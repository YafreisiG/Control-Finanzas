import { useCallback, useMemo } from "react"
import { formatDate } from "../Helpers"
import { Expense } from "../Types"
import AumoutDisplay from "./AumoutDisplay"
import { categories } from "../data/Categorias"

type ExpenseDetallesProps = {
    expense : Expense
}

export default function ExpenseDetalles({expense} : ExpenseDetallesProps) {

     const categoryinfor = useMemo(() => categories.filter(cat => cat.id === expense.category)[0], [expense])

  return (
    <div className="bg-white shadow-lg p-10 w-full border-b border-gray-200 flex gap-5 items-center">

       <div>
           <img src={`/icono_${categoryinfor.icon}.svg`} alt="alto gasto"className="w-20"/>
       </div>

       <div className="flex-1 space-y-3">
        <p className="text-sm font-bold uppercase text-slate-500">{categoryinfor.name}</p>
         <p>{expense.expenseName}</p>
         <p className="text-slate-600 text-sm">{formatDate(expense.date!.toString() )}</p>
       </div>

       <AumoutDisplay
         amount={expense.amount}
       />


    </div>
  )
}
