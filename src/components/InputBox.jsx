import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addCard } from '../features/cards/cardSlice'

function InputBox() {

    const [img, setImg] = useState('')
    const [discription,setDiscription]=useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addCard({img,discription}))
        setImg('')
        setDiscription('')
    }

  return (
    <form onSubmit={addTodoHandler} className="mt-3 space-x-3">
      <input
        type="text"
        required
        className="m-1 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Image Link..."
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <input
        type="text"
        className="m-1 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Discription..."
        value={discription}
        onChange={(e) => setDiscription(e.target.value)}
      />
      <button
        type="submit"
        className=" m-1 p-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Card
      </button>
    </form>
  )
}

export default InputBox