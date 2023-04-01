import React, {useState} from 'react';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../reducers/cartSlice'

const Form = ({ sty }) => {



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
  }

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    setStarFill(!starFill)
  }

  let mapSizes = () => {
    if((Object.keys(sty).length)) {
      return Object.keys(sty.skus).map((id, index) => {
        if(sty.skus[id].quantity) {
          return <option value={sty.skus[id].size} key={index}>{sty.skus[id].size}</option>
        } else {
          setOutOfStock(true)
        }
      })
    }
  }

  let mapQtys = () => {
    if((Object.keys(sty).length)) {
      var qtys = []
      var done = false
      Object.keys(sty.skus).forEach((id, index) => {
        var sku = sty.skus[id]
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
    var item = {Style: sty.name, Size: formData.size, Qty: formData.qty}
    if (formData.size.length) {
      dispatch(addItem(item))
      if(localStorage.getItem("cart") === null) {
        var cart = JSON.stringify([item])
        localStorage.setItem("cart", cart)
      } else {
        var cart = JSON.parse(localStorage.getItem("cart"))
        cart.push(item)
        cart = JSON.stringify(cart)
        localStorage.setItem("cart", cart)
      }
    } else {
      alert("Please Select a Size!")
    }
  }

  return (
    <div>

    <form onSubmit={handleSubmit}>

      <div className="flex flex-row h-[50px]">
        <select module="sizeSelect|Overview" id="size" value={formData.size} onChange={handleChange} name="size" className="border bg-inherit font-bold w-[160px] hover:cursor-pointer hover:border-2 border-primary">
          {outOfStock ? (<option>OUT OF STOCK!</option>) : (
            <>
            <option>Select Size</option>
            {mapSizes()}
            </>
          )}
        </select>

        {formData.size.length ? (
          <select module="qtySelect|Overview" id="qty" value={formData.qty} onChange={handleChange} name="qty" className="border bg-inherit border-primary ml-[20px] font-bold w-[100px] hover:cursor-pointer hover:border-2">
            <>
              {mapQtys()}
            </>
          </select>
        ) : (
          <select module="qtySelect|Overview" id="qty" value={formData.qty} onChange={handleChange} name="qty" className="border bg-inherit border-primary ml-[20px] font-bold w-[100px] hover:cursor-pointer hover:border-2" disabled>
            <option>-</option>
          </select>
        )}
      </div>

      <div className="flex flex-row mt-[10px] font-bold">
        {outOfStock ? (<p></p>) : (
          <button module="styleBtn|Overview" onClick={handleSubmit} className="flex items-center h-[50px] border border-primary w-[210px] mr-[20px] hover:cursor-pointer hover:border-2">
            <p className="w-[180px] pr-[70px]">ADD TO BAG</p>
            <p className="font-light text-2xl mb-[4px]">+</p>
          </button>
        )}
        <button module="styleBtn|Overview" className="flex flex-row justify-center items-center w-[50px] h-[50px] border border-solid border-primary hover:cursor-pointer hover:border-2" onClick={handleFavoriteClick}>
          {starFill ? (
            <AiFillStar module="styleBtn|Overview" className="text-yellow-500 fill-current" />
          ) : (
            <AiOutlineStar module="styleBtn|Overview" className="text-gray-500 fill-current" />
          )}
        </button>

      </div>
    </form>
    </div>
  );
}

export default Form;