
import { ChangeEvent } from 'react'
import { categories } from '../data/Categorias'
import { useBugdet } from '../Hooks/useBudget'

export default function ForCategory() {

    const { dispatch } = useBugdet()

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({type: 'add-forCategory', payload:{id: e.target.value}})
    }

  return (
    <div className='bg-white shadow-lg rounded-lg p-10'>
      <form>
        <div className='flex flex-col md:flex-row md:items-center gap-5'>
            <label htmlFor='category'>Filtrar Gastos</label>
            <select
            id='category'
            className='bg-slate-100 p-3 flex-1 rounded'
            onChange={handleChange}>

         <option value=""> --Todas las Categorias</option>
          {categories.map(category => (
            <option
            value={category.id}
            key={category.id}
            >
              {category.name}
            </option>
          ))}
            </select>

        </div>
      </form>  
        
     </div>
  )
}