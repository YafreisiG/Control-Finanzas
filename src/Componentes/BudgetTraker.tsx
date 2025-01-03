import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useBugdet } from "../Hooks/useBudget";
import AumoutDisplay from "./AumoutDisplay";
import "react-circular-progressbar/dist/styles.css"


export default function BudgetTraker() {

  const { state, totalExpense, spareExpense, dispatch} = useBugdet()


  const porcentaje = +((totalExpense / state.budget) * 100).toFixed(2)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex justify-center">
            <CircularProgressbar
                value={porcentaje}
                styles={buildStyles({
                  pathColor: porcentaje === 100 ? '#FF0000' :'#4169E1',
                  trailColor: '#F3F4F6',
                  textSize: 8,
                  textColor: porcentaje === 100 ? '#FF0000':   '#4169E1' 
                })}
                text={`${porcentaje}% Gastado`}
            
            
            />
          </div>

              
            

          <div className="flex flex-col justify-center items-center gap-8">
            <button
            type="button"
            className= "bg-purple-500 w-full p-2 text-white uppercase font-bold rounded-lg" onClick={()=> dispatch({type: 'resert-app'})}>
                Resetear App
            </button>



            <AumoutDisplay
            label ="Presupuesto"
            amount = {state.budget}
            />

           <AumoutDisplay
            label ="Disponible"
            amount = {spareExpense}
            />
            <AumoutDisplay
            label ="Gastado"
            amount = {totalExpense}
            />



          </div>
    </div>
  )
}
