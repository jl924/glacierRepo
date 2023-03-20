import React from 'react';
import { Carousel } from 'daisyui';
const Imageslide = () => {

  var thumbCount = 0
  var mainCount = 0

  const thumbImgs = ["https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
   "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80",
    "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80",
     "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
       "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",

   ]

   const mainImgs = [
    "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
    "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80",
    "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80",
    "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
    "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
   ]

   var thumbSelectionHeight = thumbImgs.length * 65
   if(thumbSelectionHeight > 455) {
    thumbSelectionHeight = 455
   }
   var thumbSelection = `carousel carousel-vertical rounded-box h-[${thumbSelectionHeight}px] w-[75px] ml-[10px] mb-[0px] border border-black thumbnails`

  return (
  <div className="h-full w-full">

    {/*--------MAIN IMAGES--------*/}
  <div className="carousel w-full h-full">

    {mainImgs.map((img) => {
      mainCount++
      return (
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href={"#slide" + mainCount-1} className="btn btn-circle ml-[60px]">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div>
      )
    })}

  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a></a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle ml-[60px]">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle ml-[60px]">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle ml-[60px]">❮</a>
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide5" className="carousel-item relative w-full">
    <img src="https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle ml-[60px]">❮</a>
      <a href="#slide6" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide6" className="carousel-item relative w-full">
    <img src="https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle ml-[60px]">❮</a>
      <a></a>
    </div>
  </div>
  </div>


  {/*--------THUMBNAILS--------*/}
  <div className="flex flex-col justify-center w-[60px] py-2 gap-2 absolute">

    { <div className="flex flex-col items-center justify-center h-[700px] w-[65px] absolute z-2 mb-[600px] ml-[50px]">

    <button className="absolute h-[50px] w-[50px] mb-[480px] ml-[10px] text-black" onClick={() => { // scroll up handler
      const carousel = document.querySelector('.thumbnails')
      carousel.scrollTop -= 75
    }}>△</button>

    <div className={thumbSelection}>

    {thumbImgs.map(img => {
      thumbCount++
      return(
      <div className="carousel-item h-[65px] relative">
        <a href={"#slide" + thumbCount}>
          <img src={img} />
        </a>
      </div>
      )
    }
    )}


  </div>

  <button className="absolute h-[50px] w-[50px] mt-[480px] ml-[10px] mt-[450px]" onClick={() => { // scroll up handler
      const carousel = document.querySelector('.thumbnails')
      carousel.scrollTop += 75
    }}>▽</button>

  </div> }
  </div>

</div>


  );
}

export default Imageslide;

