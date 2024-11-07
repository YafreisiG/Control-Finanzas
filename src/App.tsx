import PrestForm from "./Componentes/PrestForm"


function App() {


  return (
    <>
    <header className="bg-gradient-to-br from-blue-800 to-gray-200 py-8 max-h-72">
      <h1 className="uppercase text-center font-black text-4xl text-white">
        Planificador De Gastos 
      </h1>
    </header>

    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
     <PrestForm/>

     </div> 
        
    </>
  )
}

export default App
