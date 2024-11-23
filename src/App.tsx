import { useMemo } from "react"
import PrestForm from "./Componentes/PrestForm"
import { useBugdet } from "./Hooks/useBudget"
import BudgetTraker from "./Componentes/BudgetTraker"
import ExpenseModal from "./Componentes/ExpenseModal"


function App() {

  const {state}= useBugdet()

  const esvalidoBugdet  = useMemo(() => state.budget > 0, [state.budget])

  return (
    <>
    <header className="bg-gradient-to-br from-blue-800 to-purple-500 py-8 max-h-72">
      <h1 className="uppercase text-center font-black text-4xl text-white">
        Planificador De Gastos 
      </h1>
    </header>

    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
          {esvalidoBugdet ? <BudgetTraker/> : <PrestForm/>}

     </div>
    

    {esvalidoBugdet && (
      <main className="max-w-3xl mx-auto py-10">
        
        <ExpenseModal /> 
      </main>
        

    )}
   
        
    </>
  )
}

export default App
