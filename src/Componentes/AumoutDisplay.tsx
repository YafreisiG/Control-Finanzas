import { formatCurrency } from "../Helpers"

type AumoutDisplayProps ={
    label?: string
    amount: number
}

export default function AumoutDisplay({label, amount}: AumoutDisplayProps) {
  return (
    <p className="text-2xl text-blue-500 font-bold">
        {label} {''}
        <span className="font-black text-black">{formatCurrency (amount)}</span>

    </p>
  )
}
