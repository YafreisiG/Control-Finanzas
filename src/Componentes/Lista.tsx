import { useMemo } from "react"
import { useBugdet } from "../Hooks/useBudget"
import ExpenseDetalles from "./ExpenseDetalles"

export default function Lista() {

    const {state} = useBugdet()

    const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses])
  return (
    <div className="mt-10">
         {isEmpty ? <p className="text-gray-600 text-2xl font-bold">No hay Gastos</p> :(
            <>
            <p className="text-gray-600 text-2xl font-bold my-5">Listado de Gastos.</p>
            {state.expenses.map(expense => (
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
