import { categories } from "../data/Categorias";
import { ChangeEvent, useEffect, useState } from "react";
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'
import { draftExpense, Value} from "../Types";
import ErrorMessege from "./ErrorMessege";
import { useBugdet } from "../Hooks/useBudget";

/* Creando el Formulario*/


export default function ExpenseForm() {
    const [expense, setExpense]= useState<draftExpense>({
        amount: 0,
        expenseName: '',
        category: '',
        date: new Date()
    })

  

    const handleInputChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setExpense(prevState => ({
            ...prevState,
            [name]: name === "amount" ? parseFloat(value) || 0 : value   // Conversión solo para "amount"

        }));


    }

    const [error, seteror] = useState('')
    const [previousAmount, setpreviousAmount] = useState(0)
    const {dispatch, state, spareExpense} = useBugdet()

    useEffect(() => {
        if(state.editingid){
            const editingExpense = state.expenses.filter(currentExpense => currentExpense.id === state.editingid)[0]
            setExpense(editingExpense)
            setpreviousAmount(editingExpense.amount)

        }
    }, [state.editingid])

    //submit 

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        //Validacion
        
        if (!expense.expenseName || !expense.category || expense.amount <= 0) {
            seteror('Todos los campos son obligatorios y la cantidad debe ser mayor a 0');
            return;
        }
          

     //if(Object.values(expense).includes('')) {
       /// seteror('Todos los campos son abligatorios')
        //return
     //}

     //Validar el limite de presupuesto
 

  if((expense.amount - previousAmount) > spareExpense) {
       seteror('Este gasto se sobresale del presupuesto')
        return
     }

         //Agregar o actualizar
         if(state.editingid) {
             dispatch({type: 'update-expense', payload:{expense: { id: state.editingid, ...expense}}})
         }else {
            dispatch({type: 'add-expense', payload: {expense}})
         }
         


         //reiniciar al state
         setExpense({ 
            amount: 0,
            expenseName: '',
            category: '',
            date: new Date()
        })
        setpreviousAmount(0)
    }

    // Función para manejar el cambio de fecha
    const handleDateChange = (value: Value) => {
        setExpense(prevState => ({
            ...prevState,
            date: value
        }));
    }

  return (
   <form className="space-y-5" onSubmit={handleSubmit}>
    <legend className="uppercase text-center text-2xl font-black border-b-4 border-purple-500 border-opacity-75 py-2">{state.editingid ? 'Guardar Cambios' : 'Nuevo Registro De Gasto'}</legend>

    {error && <ErrorMessege>{error}</ErrorMessege>}

    <div className="flex flex-col gap-2">
        <label
        htmlFor="expenseName"
        className="text-xl"
        >Nombre Gasto:</label>
       <input
       type="text"
       id="expenseName"
       placeholder="Añadir el Nombre del gasto:"
       className="bg-slate-50 p-2"
       name="expenseName"
       value={expense.expenseName}
       onChange={handleInputChange}
       />
    </div>

    <div className="flex flex-col gap-2">
        <label
        htmlFor="amount"
        className="text-xl"
        >Cantidad:</label>
       <input
       type="number"
       id="amount"
       placeholder="Añadir la cantidad o presupuesto: ej:'300'"
       className="bg-slate-50 p-2"
       name="amount"
       value={expense.amount}
       onChange={handleInputChange}
     
         />
    </div>

    <div className="flex flex-col gap-2">
        <label
        htmlFor="category"
        className="text-xl"
        >Tipo de Categorias:</label>
       <select
       id="category"
       className="bg-slate-50 p-2"
       name="category"
       value={expense.category}
       onChange={handleInputChange}
  
    
    
       >

        <option value="">--- Seleccione ---</option>
        {categories.map( category => (
            <option 
            key={category.id}
            value={category.id}>{category.name}</option>
        ))}
     </select>
    </div>

    <div className="flex flex-col gap-2">
        <label
        htmlFor="amount"
        className="text-xl"
        >Fecha Gasto:</label>
       <DatePicker
       className="bg-slate-100 p-2 border-0"
       value={expense.date}
       onChange={handleDateChange}
     
    
         />
    </div>

    <input type="submit" className="bg-gradient-to-r from-purple-500 to-blue-500 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg" 
    value={state.editingid ? 'Guardar Cambios' : 'Registrar Gasto'}/>

   </form>
  )
}
