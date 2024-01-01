



const App = () => {

  function getRandomColor() {
    // Generar un color aleatorio en formato hexadecimal
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }
const backgroundColor = getRandomColor();

  return (
    <>
      <h1 style={{backgroundColor}}>Ejercicio 3</h1>
      <p className="importante">parrafo</p>
    </>
  )
}

export default App
