import { v4 as uuidv4} from "uuid"
import { draftExpense, Expense } from "../Types"

export type BudgetActions = {
    type: 'add-budget', payload: {budget: number}} |
    {type: 'show-modal'} |
    {type: 'close-modal'} |
    {type: 'add-expense', payload: {expense: draftExpense}} |
    {type: 'remove-expence', payload: {id: Expense['id']}} |
    {type: 'actually-expense-id', payload: {id: Expense['id']}}|
    {type: 'update-expense', payload:{expense: Expense}}

export type BudgetState = {
    budget: number 
    modal: boolean
    expenses: Expense[]
    editingid: Expense['id']
} 

const initialbudget = () : number => {
    const localStrorageBudget = localStorage.getItem('budget')
    return localStrorageBudget ? +localStrorageBudget: 0
}

const localStorageExpreses = (): Expense[] => {
    const localStorageExpreses = localStorage.getItem('expenses')
    return localStorageExpreses ? JSON.parse(localStorageExpreses) : []
}

export const initialState : BudgetState = {
    budget: initialbudget(),
    modal: false,
    expenses: localStorageExpreses(),
    editingid: ''
}

const createExpense = (draftExpense: draftExpense): Expense => {
    return {
        ...draftExpense,
        id: uuidv4()
    }

}

export const budgetReducer = (
    state: BudgetState = initialState,
    action: BudgetActions
) => {

    if(action.type === "add-budget"){
        return {
            ...state,
            budget: action.payload.budget
        }
    }

    if(action.type === 'show-modal') {
        return {
           ...state,
            modal: true
    }
}

if(action.type === 'close-modal') {
    return {
       ...state,
        modal: false,
        editingid: ''
}
}

if(action.type === 'add-expense') {
    const expense = createExpense(action.payload.expense)
    return {
        ...state,
        expenses:[...state.expenses, expense],
        modal: false
    }
}

if(action.type === 'remove-expence') {
    return {
        ...state,
        expenses: state.expenses.filter(expense => expense.id !== action.payload.id)
    }
}

if(action.type === 'actually-expense-id'){
    return{
        ...state,
        editingid: action.payload.id,
        modal: true
    }
}


if(action.type === 'update-expense') {
    return{
        ...state, 
        expenses: state.expenses.map(expense => expense.id === action.payload.expense.id ? action.payload.expense : expense ),
        modal: false,
        editingid: ''
    }
}
    return state  
}