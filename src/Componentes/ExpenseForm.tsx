import { categories } from "../data/Categorias";
import { useState } from "react";
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'
import { drafExpense } from "../Types";

/* Creando el Formulario*/




export default function ExpenseForm() {

    const [expense, setexpense]= useState<drafExpense>({
        amount: 0,
        ExpenseName: '',
        category: '',
        date: new Date 


    })
  return (
   <form className="space-y-5 ">
    <legend className="uppercase text-center text-2xl font-black border-b-4 border-purple-500 border-opacity-75 py-2">Nuevo Gasto</legend>

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
       value={expense.ExpenseName}
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
       />
    </div>

    <div className="flex flex-col gap-2">
        <label
        htmlFor="category"
        className="text-xl"
        >Tipo de Categorias:</label>
       <select
       id="category"
       placeholder="Añadir la cantidad o presupuesto. ej:'300'"
       className="bg-slate-50 p-2"
       name="category"
       value={expense.category}
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
       />
    </div>

    <input type="submit" className="bg-gradient-to-r from-purple-500 to-blue-500 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg" value={'Registrar Gasto'}/>

   </form>
  )
}
