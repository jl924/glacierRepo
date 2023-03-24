import React from 'react';
import { Carousel } from 'daisyui';
import { useState, useEffect } from 'react'
const Imageslide = ({product, sty, expanded, setExpanded}) => {

  var thumbCount = 0
  var mainCount = 0

  const thumbImgs = []
  const mainImgs = []



  if (product) {
    sty.photos.forEach((img) => {
      thumbImgs.push(img.url)
      mainImgs.push(img.thumbnail_url)
    })
  }

   var thumbSelection = `carousel carousel-vertical max-h-[410px] w-[55px] thumbnails z-[11]`

  const[currentIndex, setCurrentIndex] = useState(0)

  const[clickedThumb, setClickedThumb] = useState(0)

  const[zoom, setZoom] = useState(false)

  const [zoomLevel, setZoomLevel] = useState(1);

  const carousel = document.querySelector('.thumbnails')

  useEffect(() => {
    if(carousel) {
      setTimeout(() => {carousel.scrollTop -= 1000}, 5000)
    }
  }, product)


  const handleNavigationClick = (newIndex, oldIndex) => {
    setCurrentIndex(newIndex);
    setClickedThumb(newIndex);

    if(carousel) {
      if (newIndex===0) {
        carousel.scrollTop -=2000
        } else if (newIndex===mainImgs.length-1){
        carousel.scrollTop +=1000
        } else if(newIndex >= 7) {
          carousel.scrollTop +=75
        } else {
          carousel.scrollTop -=75
        }
    }
  };


  return (
    expanded && !zoom ? (
      <div className="carousel relative w-full h-[550px] hover:cursor-crosshair">
  {mainImgs.map((img, index) => {
    const prev = index === 0 ? mainImgs.length - 1 : index - 1;
    const next = index === mainImgs.length - 1 ? 0 : index + 1;

    return (
      <div
        key={index}
        className={`carousel-item flex items-center justify-center absolute inset-0 w-[1000px] transition duration-500 bg-black ${
          currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}

      >
        <img onClick={() => { setZoom(true) }} src={img} className="h-full object-cover" />
        <div className="absolute flex justify-between left-5">
          <button onClick={() => handleNavigationClick(prev)} className="btn btn-circle ml-[50px] border-transparent hover:border-white">❮</button>
        </div>
        <div className="absolute flex justify-between right-5">
           <button onClick={() => handleNavigationClick(next)} className="btn btn-circle border-transparent mr-[50px] hover:border-white">❯</button>
        </div>
        <div className="absolute font-bold text-white flex items-center justify-center right-5 top-5 h-[12px] w-[12px] hover:text-green-800 hover:text-2xl transition-all duration-150">
          <button onClick={() => {setExpanded(false)}} className="mb-[5px]">←</button>
        </div>
      </div>
    );
  })}

<div className="flex flex-col justify-center w-[60px]">

  <div className="flex flex-col justify-center h-[300px] w-[52px] absolute z-2">

   <div className={thumbSelection}>

   {thumbImgs.map((img, index) => {
   thumbCount++
   var count = thumbCount
    //TODO - UNDERLINE IMAGE THAT IS SELECTED
    return(
     clickedThumb === index ? (
     <div key={index} className="carousel-item relative flex items-center justify-center mb-[10px]">
       <button onClick={() => handleNavigationClick(count-1)} className="">
         <div className="h-[20px] w-[20px] border-[5px] border-gray-700 bg-white rounded-full"></div>
       </button>
     </div>

     ) : (
    <div key={index} className="carousel-item relative flex items-center justify-center mb-[10px]">
      <button onClick={() => handleNavigationClick(count-1)} className="">
        <div className="h-[16px] w-[16px] border-[5px] opacity-30 border-gray-700 bg-white rounded-full hover:h-[20px] hover:w-[20px] transition-all duration-150"></div>
      </button>
    </div>
    ))
   })}
</div>


</div>
</div>

</div>
    ) : expanded && zoom ? (
      <div className="carousel relative w-full h-[550px] hover:cursor-minus"
        >
          {mainImgs.map((img, index) => {
            return (
              <div key={index}
                className={`carousel-item flex item-center justify-center absolute inset-0 w-[1000px] bg-black ${currentIndex === index ? "opacity-100 z-10 scale-150" : "opacity-0 z-0"}`}
              >
                <img
                onMouseMove={(event) => {
                  const { left, top, width, height } = event.target.getBoundingClientRect();
                  const x = -((event.pageX - left) / width - 0.5) * 2 * width / 3;
                  const y = -((event.pageY - top) / height - 0.5) * 2 * height / 3;
                  event.target.style.transform = `translate(${x}px, ${y}px) scale(2)`;
                }}
                onMouseLeave={(event) => {
                  //event.target.style.transform= "scale(1)"
                }}
                className={`transition-transform duration-500 bg-black transfrom-origin-center
                ${currentIndex === index ? "opacity-100" : "opacity-0"}`}
                style={{"transition" : "all .5s ease-out"}}
                onClick={() => { setZoom(false) }} src={img} className="h-full object-cover" />
              </div>
            );
          })}
      </div>
    ) : (
      <div className="h-full w-full">
        <div className="carousel relative w-full h-full hover:cursor-zoom-in">
          {mainImgs.map((img, index) => {
            const prev = index === 0 ? mainImgs.length - 1 : index - 1;
            const next = index === mainImgs.length - 1 ? 0 : index + 1;

            return (
              <div key={index} className={`carousel-item absolute w-full h-full transition duration-500 ${currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                <img onClick={() => { setExpanded(true) }} src={img} className="w-full h-full object-cover" />
                <div className="absolute flex justify-between left-8 mt-[250px] hover:mt-[243px] transition-all duration-100 hover:left-3">
                  <button onClick={() => handleNavigationClick(prev, index)} className="h-[5px] w-[5px] rounded-full border border-transparent hover:border-white hover:h-[40px] hover:w-[40px] bg-transparent ml-[100px] transition-all duration-100">❮</button>
                </div>
                <div className="absolute flex justify-between right-8 mt-[250px] hover:mt-[243px] transition-all duration-100 hover:right-3">
                  <button onClick={() => handleNavigationClick(next, index)} className="h-[5px] w-[5px] rounded-full border border-transparent hover:border-white hover:h-[40px] hover:w-[40px] bg-transparent transition-all duration-100">❯</button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex flex-col justify-center w-[60px]">

         <div className="flex flex-col justify-center h-[500px] w-[60px] absolute z-2 mb-[600px] ml-[30px]">

           <button className="relative h-[25px] w-[50px] text-black z-[12]" onClick={() => { // scroll up handler
           const carousel = document.querySelector('.thumbnails')
           carousel.scrollTop -= 75
           }}>△</button>

            <div className={thumbSelection}>

            {thumbImgs.map((img, index) => {
            thumbCount++
            var count = thumbCount
             //TODO - UNDERLINE IMAGE THAT IS SELECTED
             return(
              clickedThumb === index ? (
              <div key={index} className="carousel-item relative flex flex-col ml-[3px]">
                <button onClick={() => handleNavigationClick(count-1)} className="h-[50px] w-[50px] flex items-center justify-center">
                  <img className="h-[50px] w-[50px] border-2 border-white transition-all duration-300" src={img} />
                </button>
                <div className="bg-gray-700 border border-white h-[3px] w-[50px] mt-[2px]"></div>
              </div>

              ) : (
             <div key={index} className="carousel-item relative">
               <button onClick={() => handleNavigationClick(count-1)} className="flex items-center justify-center h-[60px] w-[60px]">
                 <img className="h-[50px] w-[50px] border-2 border-black hover:rounded hover:border-white hover:h-[55px] hover:w-[55px] transition-all duration-300" src={img} />
               </button>
             </div>
             ))
            })}
        </div>
        <button className="relative h-[25px] w-[50px] z-[12]" onClick={() => { // scroll up handler
          const carousel = document.querySelector('.thumbnails')
          carousel.scrollTop += 75
        }}>▽</button>


       </div>
    </div>
  </div>
    )
  );
}

export default Imageslide;

