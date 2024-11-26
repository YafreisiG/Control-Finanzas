export type Expense = {
    id: string
    ExpenseName: string 
    amount: number
    category: string
    date: Value
}

export type drafExpense = Omit<Expense, 'id'>




type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type category = {
    id: string 
    name: string
    icon: string 
}