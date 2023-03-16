import React from 'react';
import { useState, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
var buttonClass = "flex items-center justify-center w-10 h-10 rounded-full border mr-[10px] mt-[10px]"

const Selection = ({ product, setStyle }) => {
  var mapKey = 1
  const [starFill, setStarFill] = useState(true)

  const [imgs, setImgs] = useState([])

  let handleStyleClick = (id) => {
    console.log(id)
    setStyle()
  }

  useEffect(() => {
    if(product) {
      let productImgs = []
      product.results.forEach((result) => {
      productImgs.push({id: result.style_id, img: result.photos[0].url})
    })
    setImgs(productImgs)
    }
  }, [product])


  const handleFavoriteClick = (e) => {
    e.preventDefault();
    setStarFill(!starFill)
  }

  console.log(imgs)
  return (
    <div className="w-[400px] box-border border border-gray-400">
      <div>
        <p>Star Rating</p>
        <p>Category</p>
        <p>Expanded Product Name</p>
        <p>Price</p>
      </div>
      <div>
        <p>STYLE > SELECTED STYLE</p>
      </div>
      <div>

        {/*------STYLE BUTTONS------*/}
        <div className="flex flex-row flex-wrap justify-start w-52">
          {imgs.map((style) =>
            {
              mapKey++
              return (<button onClick={() => handleStyleClick(style.id)} key={mapKey} className={buttonClass}>
              <img src={style.img} className="w-full h-full object-cover rounded-full" />
            </button>)}
          )}
        </div>

        {/*------FORM------*/}
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
      </div>
    </div>
  );
}

export default Selection;