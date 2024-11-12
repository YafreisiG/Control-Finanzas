import { useReducer, createContext, Dispatch, ReactNode } from "react"
import { BudgetActions, budgetReducer, BudgetState, initialState } from "../Reducers/Budget-reducers"
 /*Definir los context para la api*/

type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>
}

type BudgetProviderProps = {
    children: ReactNode;
}


export const budgetContext = createContext<BudgetContextProps>(null!)


export const BudgetProvider = ({children}: BudgetProviderProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState)


    return (
       <budgetContext.Provider
          value={{
            state,
            dispatch
        }}
          >
            {children}
       </budgetContext.Provider>

    )
}