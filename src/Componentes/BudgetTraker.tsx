import { useMemo } from "react";
import { useBugdet } from "../Hooks/useBudget";
import AumoutDisplay from "./AumoutDisplay";


export default function BudgetTraker() {

  const { state} = useBugdet()

  const totalExpense = useMemo(() => state.expenses.reduce((total, expense) => expense.amount + total, 0), [state.expenses])

   const spareExpense = state.budget - totalExpense
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex justify-center">
            <img src="/grafico.jpg" alt="Estadista grafica del presupuesto" />
          </div>


          <div className="flex flex-col justify-center items-center gap-8">
            <button
            type="button"
            className= "bg-purple-500 w-full p-2 text-white uppercase font-bold rounded-lg">
                Resetear App
            </button>



            <AumoutDisplay
            label ="Presupuesto"
            amount = {state.budget}
            />

           <AumoutDisplay
            label ="Disponible"
            amount = {spareExpense}
            />
            <AumoutDisplay
            label ="Gastado"
            amount = {totalExpense}
            />



          </div>
    </div>
  )
}
