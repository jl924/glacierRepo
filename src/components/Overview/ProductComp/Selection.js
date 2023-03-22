import React from 'react';
import { useState, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import StyleBtn from './StyleBtn'
import Form from './Form'
import RatingView from '../../../components/sharedComponents/RatingView'
import helpers from '../reqHelpers'
const getRatingById = helpers.getRatingById
const Selection = ({info, product, setStyle, style }) => {

  const[imgs, setImgs] = useState([])
  const[rating, setRating] = useState([])
  const[selectedId, setSelectedId] = useState(0)

  let handleStyleClick = (id) => {
    setStyle(product.results[id])
    setSelectedId(id)
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

  useEffect(() => {
    if(product) {
      getRatingById(product.product_id)
      .then((res) => {
        var count = 0
        var rating = 0
        res.results.forEach((review) => {
          count++
          rating += review.rating
        })
        setRating(rating/count)
      })
    }
  })


  return (
    <div className="w-[450px] ml-[20px]">
      <div className="flex flex-col">

        <div className="flex mb-[5px] items-center">
          <RatingView width={75} numStars={5} rating={rating} />
          <a className="text-gray-400 underline ml-[20px]">Read all reviews</a>
        </div>

        <p className="text-gray-400">{info ? (info.category) : (<p></p>)}</p>
        <p className="text-4xl text-gray-500">{info ? (info.name) : (<p></p>)}</p>
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
        <div className="flex flex-row flex-wrap justify-start w-[250px]">
          {imgs.map((style) =>
            {
              return (
              <StyleBtn key={style.id} style={style} selectedId={selectedId} handleStyleClick={handleStyleClick}/>
            )}
          )}
        </div>

        {/*------FORM------*/}
        <Form style={style}/>
      </div>
    </div>
  );
}

export default Selection;