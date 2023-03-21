import React, {useState} from 'react';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../reducers/cartSlice'

const Form = ({ style }) => {



  const [starFill, setStarFill] = useState(true)

  const [formData, setFormData] = useState(
    {
      size: "",
      qty: "",
    }
  )

  const[outOfStock, setOutOfStock] = useState(false)

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData({...formData, [name]: value})
    console.log(formData)
  }

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    setStarFill(!starFill)
  }

  let mapSizes = () => {
    if((Object.keys(style).length)) {
      return Object.keys(style.skus).map((id, index) => {
        if(style.skus[id].quantity) {
          return <option value={style.skus[id].size} key={index}>{style.skus[id].size}</option>
        } else {
          setOutOfStock(true)
        }
      })
    }
  }

  let mapQtys = () => {
    if((Object.keys(style).length)) {
      var qtys = []
      var done = false
      Object.keys(style.skus).forEach((id, index) => {
        var sku = style.skus[id]
        if(sku.size === formData.size && !done) {
          done = true
          for(var i = 1; i < sku.quantity; i++) {
            if(i <= 15) {
              qtys.push(i)
            }
          }
        }
      })
      return qtys.map((qty, index) => {
        return <option value={qty} key={index}>{qty}</option>
      })
    }
  }
//test

  const dispatch = useDispatch();

  let handleSubmit = (e) => {
    e.preventDefault()
    var item = {Style: style, Size: formData.size, Qty: formData.qty}
    dispatch(addItem(item))
  }

  return (
    <div className="mt-[20px]">

    <form onSubmit={handleSubmit}>

      <div className="flex flex-row h-[50px]">
        <select id="size" value={formData.size} onChange={handleChange} name="size" className="border border-black font-bold w-[160px]">
          {outOfStock ? (<option>OUT OF STOCK!</option>) : (
            <>
            <option>Select Size</option>
            {mapSizes()}
            </>
          )}
        </select>
        <select id="qty" value={formData.qty} onChange={handleChange} name="qty" className="border border-black ml-[20px] font-bold w-[100px]">
          {formData.size.length ? (
            <>
              {mapQtys()}
            </>
          ) : (<option>-</option>)}
        </select>

      </div>

      <div className="flex flex-row mt-[10px] font-bold">

        <button onClick={handleSubmit} className="flex items-center h-[50px] border border-black w-[210px]">
          <p className="w-[180px] pr-[70px]">ADD TO BAG</p>
          <p className="font-light text-2xl mb-[4px]">+</p>
        </button>

        <button className="flex flex-row justify-center items-center border w-[50px] h-[50px] bg-white border border-solid border-black ml-[20px]" onClick={handleFavoriteClick}>
          {starFill ? (
            <AiFillStar className="text-yellow-500 fill-current" />
          ) : (
            <AiOutlineStar className="text-gray-500 fill-current" />
          )}
        </button>

      </div>
    </form>
    </div>
  );
}

export default Form;