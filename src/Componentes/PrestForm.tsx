import { useMemo, useState } from "react"


export default function PrestForm() {

    const [budget, setBudget]= useState(0)

    const PrestChanges = (e : React.ChangeEvent<HTMLInputElement>) => {
     setBudget(e.target.valueAsNumber)
      

    }

    /*Validación*/

    const validation = useMemo(() => {
        return isNaN(budget) || budget <= 0
    }, [budget])
  
  return (
    
    <form className='space-y-5'>
        <div className='flex flex-col space-y-4'>
            <label htmlFor="budget" 
            className="text-4xl text-blue-800 font-bold text-center uppercase">
                Definir presupuesto
            </label>

           <input 
           id="budget"
           type="number" 
           className="w-full bg-white border border-gray-200 p-2"
           placeholder="Define tu presupuesto"
           name="budget"
           value={budget}
           onChange={PrestChanges}
         
            />
        </div>


        <input
         type="submit"
         value='Definir Presupuesto'
         className="bg-blue-800 hover:bg-blue-500 cursor-pointer w-full p-2 text-white font-black uppercase disabled:opacity-30"
         disabled={validation}
        />
    </form>
  )
}
