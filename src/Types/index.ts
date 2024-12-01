export type Expense = {
    id: string
    expenseName: string 
    amount: number
    category: string
    date: Value
}

export type draftExpense = Omit<Expense, 'id'>




type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type category = {
    id: string 
    name: string
    icon: string 
}