Tomando como base el API creada en el apartado anterior:

Crea un middleware de manejo de errores.

Lanza un error en el middleware que permite crear un nuevo mensaje si falta algún campo antes de crear el mensaje.

Lanza un error en el middleware que retorna información de un mensaje concreto si no se encuentra el mensaje con el ID establecido.

Utiliza el bloque try catch y la función next para enviar el error al middleware de errores.

Como buena práctica, cuando generes un error agrégale una propiedad que indique el código de estado http de ese error, por ejemplo, puedes agregar la propiedad httpStatus. En el middleware de error, establece como código de estado el valor que figure en dicha propiedad antes de enviar la respuesta al cliente. En caso de que no exista establece como valor el código de estado 500.

