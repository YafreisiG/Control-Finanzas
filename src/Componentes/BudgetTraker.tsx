import AumoutDisplay from "./AumoutDisplay";


export default function BudgetTraker() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex justify-center">
            <img src="/grafico.jpg" alt="Estadista grafica del presupuesto" />
          </div>


          <div className="flex flex-col justify-center items-center gap-8">
            <button
            type="button"
            className= "bg-purple-500 w-full p-2 text-white uppercase font-bold rounded-lg">
                Resetear App
            </button>



            <AumoutDisplay
            label ="Presupuesto"
            amount = {300}
            />

           <AumoutDisplay
            label ="Disponible"
            amount = {200}
            />
            <AumoutDisplay
            label ="Gastado"
            amount = {100}
            />



          </div>
    </div>
  )
}
