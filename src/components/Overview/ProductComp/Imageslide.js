import React from 'react';
import { Carousel } from 'daisyui';
const Imageslide = () => {

  var thumbCount = 0

  const thumbImgs = ["https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
   "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80",
    "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80",
     "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
       "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
   ]


  return (
  <div className="h-full w-full">

    {/*--------MAIN IMAGES--------*/}
  <div className="carousel w-full h-full">

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

    <a href="#slide1" className="btn btn-xs h-[60px] w-full h-[60px] absolute mb-[1000px] ml-[10px] p-0">
      <img src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" className="w-full h-full" />
    </a>

    <a href="#slide2" className="btn btn-xs h-[60px] absolute mb-[850px] ml-[10px] w-full p-0">
      <img src="https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" className="w-full h-full" />
    </a>

    <a href="#slide3" className="btn btn-xs h-[60px] absolute mb-[700px] ml-[10px] w-full p-0">
      <img src="https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" className="w-full h-full" />
    </a>

    <a href="#slide4" className="btn btn-xs h-[60px] absolute mb-[550px] ml-[10px] w-full p-0">
      <img src="https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" className="w-full h-full" />
    </a>

    <a href="#slide5" className="btn btn-xs h-[60px] absolute mb-[400px] ml-[10px] w-full p-0">
      <img src="https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" className="w-full h-full" />
    </a>

    <a href="#slide6" className="btn btn-xs h-[60px] absolute mb-[250px] ml-[10px] w-full p-0">
      <img src="https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" className="w-full h-full" />
    </a>

  </div>
  {/* <div className="w-[50px] absolute z-2">
  <div className="carousel carousel-vertical rounded-box h-[200px] w-[50px] ml-[200px] mt-[0px] absolute">
    {thumbImgs.map(img => {
      thumbCount++
      return(
      <div className="carousel-item">
        <a href={"#slide" + thumbCount}>
          <img src={img} />
        </a>
      </div>
      )
    }
    )}
  </div>
  </div> */}
</div>


  );
}

export default Imageslide;

