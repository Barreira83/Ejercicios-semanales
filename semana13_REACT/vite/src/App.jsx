import foto from '/charmander.png'
const App = () => {
  return (
    <>
      <h1>{import.meta.env.VITE_COMPANY_NAME}</h1>
      <img src={foto} alt="Foto"/>
    </>
  )
}

export default App