import React from 'react'
import { useTodos } from '../hooks/useTodos'
import { statusOpts } from '../constant';
import { FilterOption } from '../components/FilterOption';

const Filter = () => {

    const {todos, filter, filterTodoSetter, filterSetter} = useTodos();

    const handleFilterChange = (event:React.ChangeEvent<HTMLSelectElement>) => {        
          const filterState = todos.filter(td => td.status === event.target.value)
          filterTodoSetter(filterState)
          filterSetter(event.target.value)
      }

    return (
        <div>
            <label>Filter</label>
            <select value={filter} onChange={handleFilterChange} className={`status-${filter}`} >
                {statusOpts.map(option => <FilterOption option={option} />)}
            </select>
        </div>
    )
}

export default Filter