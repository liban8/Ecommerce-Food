import React from 'react'
import data from './data'
import Foodshoping from './Foodshoping'
function Food() {
    
  return (
    <div className='grid grid-cols-4 gap-3 m-5'>
        {
            data.map((items)=>(
                <Foodshoping key={items.id} items={items}/>
            ))
        }
    </div>
  )
}

export default Food