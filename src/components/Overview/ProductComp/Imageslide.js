import React from 'react';
import { Carousel } from 'daisyui';
const Imageslide = ({product, style}) => {

  var thumbCount = 0
  var mainCount = 0

  const thumbImgs = []
  const mainImgs = []

  if (product) {
    style.photos.forEach((img) => {
      thumbImgs.push(img.url)
      mainImgs.push(img.thumbnail_url)
    })
  }

   var thumbSelection = `carousel carousel-vertical max-h-[410px] w-[55px] thumbnails`

  return (
  <div className="h-full w-full">

    {/*--------MAIN IMAGES--------*/}
  <div className="carousel w-full h-full">

    {mainImgs.map((img, index) => {
      const prev = index === 0 ? mainImgs.length : index;
      const next = index === mainImgs.length - 1 ? 0 : index + 1;

      return (
        <div key={index} id={"slide" + (index + 1)} className="carousel-item relative w-full">
        <img src={img} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

          <a href={"#slide" + (prev)} className="btn btn-circle ml-[100px]" >❮</a>

          <a href={"#slide" + (next + 1)} className="btn btn-circle ml-[100px]" >❯</a>

        </div>
      </div>
      )
    })}

  </div>


  {/*--------THUMBNAILS--------*/}
  <div className="flex flex-col justify-center w-[60px]">

    { <div className="flex flex-col justify-center h-[500px] w-[52px] absolute z-2 mb-[600px] ml-[30px]">

    <button className="relative h-[25px] w-[50px] text-black" onClick={() => { // scroll up handler
      const carousel = document.querySelector('.thumbnails')
      carousel.scrollTop -= 75
    }}>△</button>

    <div className={thumbSelection}>

    {thumbImgs.map((img, index) => {
      thumbCount++
      //TODO - UNDERLINE IMAGE THAT IS SELECTED
      return(
      <div key={index} className="carousel-item relative mb-[10px]">
        <a className="h-[50px] w-[50px]" href={"#slide" + thumbCount}>
          <img className="h-[50px] w-[50px] border-2 border-black" src={img} />
        </a>
      </div>
      )
    }
    )}
  </div>

  <button className="relative h-[25px] w-[50px]" onClick={() => { // scroll up handler
      const carousel = document.querySelector('.thumbnails')
      carousel.scrollTop += 75
    }}>▽</button>

  </div> }
  </div>

</div>


  );
}

export default Imageslide;

