import { ReactNode } from "react"

type ErrorMessegeProps = {
    children: ReactNode
}

export default function ErrorMessege({children} : ErrorMessegeProps) {
  return (
    <p className="bg-red-700 p-2  text-white font-bold text-sm text-center">
        {children}
    </p>
  )
}

