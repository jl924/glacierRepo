import React, {useState} from 'react';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';

const Form = ({ style }) => {



  const [starFill, setStarFill] = useState(true)

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    setStarFill(!starFill)
  }

  let mapSizes = () => {
    if((Object.keys(style).length)) {
      return Object.keys(style.skus).map((id, index) => {
        if(style.skus[id].quantity) {
          return <option key={index}>{style.skus[id].size}</option>
        }
      })
    }
  }

  let mapQtys = () => {
    if((Object.keys(style).length)) {
      return Object.keys(style.skus).map((id, index) => {
        console.log(style.skus[id].quantity)

      })
    }
  }

  return (
    <div className="mt-[20px]">
    <form>
      <div className="flex flex-row">
        <select>
          <option>Select Size</option>
          {mapSizes()}
        </select>
        <select>
          <option>1</option>
          <option>Option</option>
          <option>Option</option>
        </select>

      </div>
      <div className="flex flex-row mt-[10px]">

        <button>ADD TO BAG</button>
        <button className="flex flex-row justify-center items-center border w-8 h-8 bg-white border border-solid border-black ml-[10px]" onClick={handleFavoriteClick}>
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