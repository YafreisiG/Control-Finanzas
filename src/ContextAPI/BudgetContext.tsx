import { useReducer, createContext, Dispatch, ReactNode, useMemo } from "react"
import { BudgetActions, budgetReducer, BudgetState, initialState } from "../Reducers/Budget-reducers"
 /*Definir los context para la api*/

type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>
    totalExpense: number 
    spareExpense: number
}

type BudgetProviderProps = {
    children: ReactNode;
}


export const budgetContext = createContext<BudgetContextProps>(null!)


export const BudgetProvider = ({children}: BudgetProviderProps) => {

   const [state, dispatch] = useReducer(budgetReducer, initialState)
      const totalExpense = useMemo(
        () => state.expenses.reduce((total, expense) => total + expense.amount, 0), [state.expenses])
          const spareExpense = state.budget - totalExpense


    return (
       <budgetContext.Provider
          value={{
            state,
            dispatch,
            totalExpense,
            spareExpense
        }}
          >
            {children}
       </budgetContext.Provider>

    )
}