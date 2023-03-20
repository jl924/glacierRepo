import React from 'react';
import { useState, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import StyleBtn from './StyleBtn'
import Form from './Form'

const Selection = ({ product, setStyle }) => {

  const [imgs, setImgs] = useState([])

  let handleStyleClick = (id) => {
    console.log(id)
    setStyle(product.results[id])
  }

  useEffect(() => {
    if(product) {
      let productImgs = []
      product.results.forEach((result, index) => {
      productImgs.push({id: index, img: result.photos[0].url})
    })
    setImgs(productImgs)
    }
  }, [product])

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
              return (
              <StyleBtn key={style.id} style={style} handleStyleClick={handleStyleClick}/>
            )}
          )}
        </div>

        {/*------FORM------*/}
        <Form />
      </div>
    </div>
  );
}

export default Selection;