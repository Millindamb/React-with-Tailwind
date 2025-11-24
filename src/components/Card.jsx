import React from 'react'
import { removeCard } from '../features/cards/cardSlice'
import { useSelector,useDispatch } from 'react-redux'

const Card = ({ img, discription }) => {
    const Cards=useSelector(state=>state.cards)
    const dispatch=useDispatch()
    
  return (
    <div className='flex justify-center flex-wrap'>
        {Cards.map((card) => (
            <div key={card.id} className="relative bg-gray-800 rounded-lg shadow-lg p-4 w-64 text-gray-100 m-1">
            
          <button 
            onClick={()=>{dispatch(removeCard({id:card.id}))}}
            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white w-7 h-7 flex items-center justify-center rounded-full text-sm"
          >
            ✕
          </button>

          <img 
            src={card.img} 
            alt="card-img" 
            className="w-full h-40 object-cover rounded-md"
          />

          <div className="mt-3 text-sm text-gray-300">
            {card.discription}
          </div>
        </div>
        ))}
    </div>
  )
}

export default Card
