import React from 'react';
import { useState, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import StyleBtn from './StyleBtn'
import Form from './Form'
import RatingView from '../../../components/sharedComponents/RatingView'
import helpers from '../reqHelpers'
import { FacebookShareButton } from 'react-share';
import { TwitterShareButton } from 'react-share';
import { PinterestShareButton } from 'react-share';
import { useSelector } from 'react-redux'


const getRatingById = helpers.getRatingById
const Selection = ({info, product, setStyle, sty }) => {


  const[imgs, setImgs] = useState([])
  const[rating, setRating] = useState([])
  const[selectedId, setSelectedId] = useState(0)
  const[rev, setRevCount] = useState(0)

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

  const { meta, sorting, ratingsReviews } = useSelector(
    (state) => state.ratingsReviewsReducer
  );



  return (
    <div className="w-[450px] ml-[0px]">
      <div className="flex flex-col">

        <div className="flex mb-[20px] mt-[15px] items-center ml-[12px]">
        <RatingView
              width={108}
              rating={meta.averageReviews}
              numStars={5}
            />
          <a module="reviews|Overview" onClick={() => {window.scrollTo({
            top: 10000,
            behavior: 'smooth'
          })}} className="text-gray-400 underline ml-[20px] transition-all duration-1000 hover:cursor-pointer">Read all {ratingsReviews.length} reviews</a>
        </div>
        <div className="ml-[20px]">
        <p className="text-gray-400">{info ? (info.category) : (<p></p>)}</p>
        <p className="text-4xl mb-[8px]">{info ? (info.name) : (<p></p>)}</p>
        {sty.sale_price ? (
          <div className="flex">
            <p className="text-red-400 mr-[10px]">${sty.sale_price}</p>
            <p className="line-through">${sty.original_price}</p>
          </div>
        ) : (
            <p>${sty.original_price}</p>
        )}
        </div>


      </div>
      <div>
        <div className="flex ml-[20px] mt-[25px]">
           <p className="font-bold">STYLE > </p>
           <p> {sty.name} </p>
        </div>
      </div>
      <div>

        {/*------STYLE BUTTONS------*/}
        <div>
        <div className="flex flex-row flex-wrap justify-start w-[280px] h-[full] ml-[20px] mb-[25px]">
          {imgs.map((style, index) =>
            {
              return (
              <StyleBtn key={index} sty={style} selectedId={selectedId} handleStyleClick={handleStyleClick}/>
            )}
          )}
        </div>
        </div>

        {/*------FORM------*/}
        <div className="ml-[20px]">
        <Form sty={sty}/>
        </div>
      </div>
      <div className="flex items-center justify-evenly w-[200px]ml-[20px] mt-[25px]">
        <FacebookShareButton className="flex items-center justify-center h-[75px] w-[75px]" url={"http://localhost:3000/"} quote={"quote"}>
          <img className="h-[60px] w-[60px] hover:h-[65px] hover:w-[65px] transition-all duration-100" src="https://www.freeiconspng.com/thumbs/facebook-logo-png/facebook-logo-3.png" />
        </FacebookShareButton>
        <TwitterShareButton className="flex items-center justify-center h-[75px] w-[75px]" url={"http://localhost:3000/"} quote={"quote"}>
          <img className="h-[60px] w-[60px] hover:h-[65px] hover:w-[65px] transition-all duration-100" src="https://www.freeiconspng.com/uploads/twitter-icon--flat-gradient-social-iconset--limav-2.png" />
        </TwitterShareButton>
        <PinterestShareButton className="flex items-center justify-center h-[75px] w-[75px]" url={"http://localhost:3000/"} media={"https://www.freeiconspng.com/uploads/pinterest-icon-png-3.png"} quote={"quote"}>
          <img className="h-[60px] w-[60px] hover:h-[65px] hover:w-[65px] transition-all duration-100" src="https://www.freeiconspng.com/uploads/pinterest-icon-png-3.png" />
        </PinterestShareButton>
      </div>
    </div>
  );
}
export default Selection;