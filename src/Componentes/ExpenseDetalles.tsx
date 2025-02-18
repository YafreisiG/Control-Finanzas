import { useMemo } from "react"
import { formatDate } from "../Helpers"
import { Expense } from "../Types"
import { 
  LeadingActions,
   SwipeableList, 
  SwipeableListItem, 
  SwipeAction, 
  TrailingActions } from "react-swipeable-list"
import AumoutDisplay from "./AumoutDisplay"
import { categories } from "../data/Categorias"
import { useBugdet } from "../Hooks/useBudget"
import "react-swipeable-list/dist/styles.css"


type ExpenseDetallesProps = {
    expense : Expense
}

export default function ExpenseDetalles({expense} : ExpenseDetallesProps) {
     const { dispatch } = useBugdet()

     const categoryinfor = useMemo(() => categories.filter(cat => cat.id === expense.category)[0], [expense])

   const leadingActions = () => (
     <LeadingActions>
          <SwipeAction
         onClick={() => dispatch ({type: 'actually-expense-id', payload: {id: expense.id}})}
         >
           Actualizar
       </SwipeAction>
      </LeadingActions>
      )

       const trailingActions = () => (
       <TrailingActions>
         <SwipeAction
           onClick={() => dispatch({type: 'remove-expence', payload: {id: expense.id}})}
           destructive={true}
          >
            Eliminar
         </SwipeAction>
        </TrailingActions>
      )


  return (
    <SwipeableList>
      <SwipeableListItem
      maxSwipe={1}
       leadingActions={leadingActions()}
       trailingActions={trailingActions()} 
      >
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
    </SwipeableListItem>
    </SwipeableList>
  )

}
