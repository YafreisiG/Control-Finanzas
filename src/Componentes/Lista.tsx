import { useMemo } from "react"
import { useBugdet } from "../Hooks/useBudget"
import ExpenseDetalles from "./ExpenseDetalles"

export default function Lista() {

    const {state} = useBugdet()
    
    const forCategoriestop = state.CurrrentCategory ? state.expenses.filter( expense => expense.category === state.CurrrentCategory) : state.expenses
    
    const isEmpty = useMemo(() => forCategoriestop.length === 0, [forCategoriestop])

  return (
    <div className="bg-white shadow-lg rounded-lg p-5 mt-10">
         {isEmpty ? <p className="text-gray-600 text-2xl font-bold">No hay Gastos</p> :(
            <>
            <p className="text-gray-600 text-2xl font-bold my-5">Listado de Gastos.</p>
            {forCategoriestop.map(expense => (
                <ExpenseDetalles
                
                key={expense.id}
                expense={expense}
                />

                
            
            
            ))}
              </>
         )}
    </div>
  )
}
