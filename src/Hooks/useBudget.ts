import { useContext } from "react"
import { budgetContext } from "../ContextAPI/BudgetContext"





export const useBugdet = () => {
     const context = useContext(budgetContext)
     return context

}