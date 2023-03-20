import React from 'react';
import { useState, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import StyleBtn from './StyleBtn'
import Form from './Form'

const Selection = ({info, product, setStyle, style }) => {

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
    <div className="w-[400px] ml-[20px]">
      <div className="flex flex-col">
        <div className="mb-[5px]">***** <a className="text-gray-400 underline">Read all reviews</a></div>
        <p className="text-gray-400">{info.category}</p>
        <p className="text-4xl text-gray-500">{info.name}</p>
        <p>${style.original_price}</p>
      </div>
      <div>
        <div className="flex">
           <p className="font-bold">STYLE > </p>
           <p> {style.name} </p>
        </div>
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