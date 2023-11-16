import { getData, suffleArray, randomItem } from "./helppers.js";

//Variables globales
const STATE = {
  points: 0,
  articles: [],
};

const HIDDENTEXT = "██████████████████";
const points = document.querySelector("#points");
const quiz = document.querySelector("#quiz");


//Esta funcion lista los articulos de una categoria de la wikipedia, excluyendo la correcta que se pasa por parámetro
async function getCategoryArticles(category, exclude) {
  const data = await getData(`
    https://es.wikipedia.org/w/api.php?format=json&origin=*&action=query&list=categorymembers&cmlimit=500&cmtitle=${category}`);

  //Filtramos para eliminar respuestas con":" y además eliminar la respuesta correcta
  const articles = data.query.categorymembers
    .filter(
      (article) => article.title.includes(":") && article.title !== exclude
    )
    .map((article) => article.title);
  //console.log("Articulos filtrados y excluida la respuesta correcta: ",articles);
  return articles;
}

//Esta funcion lista las categorias a las que pertenece un articulo de la wikipedia
async function getArticlesCategories(article) {
  try {
    const data = await getData(
      `https://es.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=categories&titles=${article}`
    );
    //El objeto tiene las categorias en una ruta complicada, asi que, la sacamos asi
    const key = Object.keys(data.query.pages)[0];
    //console.log("La key es: ",key);
    const categories = data.query.pages[key].categories
      .map((category) => category.title)
      .filter((category) => !category.includes("Wikipedia"));
    //Ademas filtro categorias que son basura, empiezan por wikipedia
    return categories;
  } catch (error) {
    console.error("Error al buscar categorias de ese articulo", error);
  }
}

//Esta funcion construye una pregunta con su pista, respuesta y opciones
async function generateQuestion() {
  //quiz.innerHTML="Cargando...";
  try {
    //Coje un articulo al azar de STATE.articles
    const answer = randomItem(STATE.articles);
    //console.log("La respuesta aleatoria elegida es: ", answer);

    //Extrae el titulo y la entradilla de la API
    const data = await getData(`
    https://es.wikipedia.org/api/rest_v1/page/summary/${answer}`);
    //console.log(data);
    const { title, extract } = data;

    //console.log(title);
    //console.log(extract);

    //Oculta las palabras del resumen que coincidan con el titulo----------------------------Expresion regular
    //Creamos una expresion regular para filtrar mayusculas  i ignora Mayusculas g globalmente //
    const regex = new RegExp(title, "ig");

    const clue = extract.replaceAll(regex, HIDDENTEXT);
    //console.log(clue);

    // Si no oculto ninguna palabra genera un error
    if (!clue.includes(HIDDENTEXT)) {
      throw new Error("Cannot find title in extract");
    }

    //Busca las categorias del articulo escogido

    const categories = await getArticlesCategories(answer);
    //console.log(categories);

    //Escoge una categoria al azar
    const chosenCategory = randomItem(categories);
    //console.log(chosenCategory);//De esta categoria voy a extraer respuestas falsas

    const falseOptions = await getCategoryArticles(chosenCategory, title);
    //console.log(falseOptions);

    //Si falseOptions tiene menos de 3 articulos, volvemos a generar la pregunta
    if (falseOptions.length < 3) {
      throw new Error("Not enought false options");
    }

    //Escoge 3 articulos
    const options = suffleArray(falseOptions).slice(0, 3);
    //console.log("Las respuestas incorrectas son:", options);

    const question = {
      clue: clue,
      answer: title,
      options: suffleArray([...options, title]),
    };
    console.log("El objeto que queria conseguir es: ", question);

    //Llamamos a la funcion que lo mostrará en pantalla
    writeQuestion(question); 
    
  } catch (error) {
    console.error(error);
    generateQuestion(); //Como no quiero que pare el juego si la tarjeta
    //da un error,vuelvo a generar otra tarjeta
  }
}




//Una vez que tenemos el objeto cuestion, creamos una funcion para mostrarlo en html----------------------------------------------
function writeQuestion(question) {

  //Borramos el HTML
  quiz.innerHTML = "";
  //Actualiza los puntos
  points.innerText = STATE.points;
  //Escribimos la pista

  const clue = document.createElement("p");
  clue.innerText = question.clue;
  quiz.append(clue);

  //Escribimos las respuestas
  for (const answer of question.options) {
    const answerButton = document.createElement("button");
    answerButton.innerText = answer;

    answerButton.onclick = () => {
      //Si el boton contiene la resp correcta
      if (answer === question.answer) {
        alert("Muy bien");
        STATE.points++;
      } else {
        //Si NO es la respuesta correcta
        alert("Has fallado, vuelves a empezar");
        STATE.points = 0;
      }
      generateQuestion();
    };
    quiz.append(answerButton);
  }  
}

//Esta funcion carga la lista inicial de preguntas
async function start() {
  try {
    const yesterday = new Date(Date.now() - 8640000);

    const year = yesterday.getFullYear();
    // En las siguientes lineas convertimos a cadena de texto y le asignamos 0 hasta completar 2 caracteres al principio
    const month = String(yesterday.getMonth() + 1).padStart(2, "0");
    const day = String(yesterday.getDay()).padStart(2, "0");

    const data = await getData(
      `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/es.wikipedia.org/all-access/${year}/${month}/${day}`
    );
    console.log("El objeto que vamos a utilizar: ", data);

    //Ahora vamos a filtrar el JSON para que solo muestre los articulos, y despues solo los titulos
    const validArticles = data.items[0].articles.filter(
      (item) => !item.article.includes(":")
    );
    const articles = validArticles.map((item) => item.article);

    //console.log("Articulos validos despues de filtrar y mapear",articles);

    STATE.articles = articles;
    generateQuestion();
  } catch (error) {
    alert("Desactiva el addblock para jugar NO HAY PUBLI");
  }
}
start();
