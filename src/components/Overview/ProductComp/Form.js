import React, {useState} from 'react';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';

const Form = () => {

  const [starFill, setStarFill] = useState(true)

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    setStarFill(!starFill)
  }

  return (
    <div>
    <form>
      <div className="flex flex-row">

        <select>
          <option>Select Style</option>
          <option>Option</option>
          <option>Option</option>
        </select>
        <select>
          <option>Select Style</option>
          <option>Option</option>
          <option>Option</option>
        </select>

      </div>
      <div className="flex flex-row ">

        <button>ADD TO BAG</button>
        <button className="flex flex-row justify-center items-center border w-8 h-8 bg-white border border-solid border-black" onClick={handleFavoriteClick}>
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