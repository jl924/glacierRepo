import React from 'react';
import { Carousel } from 'daisyui';
import { useState, useEffect } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md"
import { MdKeyboardArrowUp } from "react-icons/md"
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

   var thumbSelection = `carousel carousel-vertical max-h-[410px] w-[55px] thumbnails z-[11] transition-all duration-100`

  const[currentIndex, setCurrentIndex] = useState(0)

  const[clickedThumb, setClickedThumb] = useState(0)

  const[zoom, setZoom] = useState(false)

  const [zoomLevel, setZoomLevel] = useState(1);

  const carousel = document.querySelector('.thumbnails')

  const[entered, setEntered] = useState(false)

  const[size1, setSize1] = useState(20)
  const[size2, setSize2] = useState(20)

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
        <div className="absolute font-bold text-white flex items-center justify-center right-5 top-5 h-[12px] w-[12px] hover:text-2xl transition-all duration-150">
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
        <div className="h-[16px] w-[16px] border-[5px] opacity-30 border-gray-700 bg-white rounded-full hover:h-[20px] hover:w-[20px] transition-all duration-300"></div>
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
                className={`carousel-item flex item-center justify-center absolute inset-0 w-[1000px] bg-black ${currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              >
                <img
                onMouseEnter={() => {
                  if (!entered) {
                    const { left, top, width, height } = event.target.getBoundingClientRect();
                    const x = -((event.pageX - left) / width - 0.5) * 2 * width / 3;
                    const y = -((event.pageY - top) / height - 0.5) * 2 * height / 3;
                    event.target.style.transform = `translate(${x}px, ${y}px) scale(2.5)`;
                    setEntered(true)
                  }
                }}
                onMouseMove={(event) => {
                  const { left, top, width, height } = event.target.getBoundingClientRect();
                  const x = -((event.pageX - left) / width - 0.5) * 2 * width / 3;
                  const y = -((event.pageY - top) / height - 0.5) * 2 * height / 3;
                  event.target.style.transform = `translate(${x}px, ${y}px) scale(2.5)`;
                }}
                onMouseLeave={(event) => {
                  //event.target.style.transform= "scale(1)"
                }}
                className={`transition-transform duration-500 bg-black transfrom-origin-center
                ${currentIndex === index ? "opacity-100" : "opacity-0"}`}
                style={{"transition" : "all .5s ease-out"}}
                onClick={() => { setZoom(false); setEntered(false) }} src={img} className="h-full object-cover" />
              </div>
            );
          })}
      </div>
    ) : (
      <div className="h-full w-full border-r-4 border-b-4 border-double rounded">
        <div className="carousel relative w-full h-full hover:cursor-zoom-in">
          {mainImgs.map((img, index) => {
            const prev = index === 0 ? mainImgs.length - 1 : index - 1;
            const next = index === mainImgs.length - 1 ? 0 : index + 1;

            return (
              <div key={index} className={`carousel-item absolute w-full h-full transition duration-500 ${currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                <img onClick={() => { setExpanded(true) }} src={img} className="w-full h-full object-cover" />
                <div className="absolute flex justify-center items-center left-20 mt-[250px] h-[50px] w-[50px]">
                  {index === 0 ? (
                    <p></p>
                  ) : (
                    <button onClick={() => handleNavigationClick(prev, index)} className="flex items-center justify-center hover:text-xl transition-all duration-300 text-black">❮</button>
                  )}
                </div>
                <div className="absolute flex justify-center items-center right-8 mt-[250px] h-[50px] w-[50px]">
                  {index === mainImgs.length-1 ? (
                    <p></p>
                  ) : (
                    <button onClick={() => handleNavigationClick(next, index)} className="flex items-center justify-center hover:text-xl transition-all duration-300 text-black">❯</button>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex flex-col justify-center w-[60px]">

         <div className="flex flex-col justify-center h-[435px] w-[60px] absolute z-2 mb-[600px] ml-[30px]">

            {thumbImgs.length <= 7 ? (
              <p></p>
            ) : (
              <button className="relative flex items-center justify-center ml-[3px] h-[20px] w-[50px] text-black z-[12]" onClick={() => { // scroll up handler
                const carousel = document.querySelector('.thumbnails')
                carousel.scrollTop -= 75
                }}><MdKeyboardArrowUp className="text-black transition-all duration-300"
                                        size={size1}
                                        onMouseEnter={() => {setSize1(30)}}
                                        onMouseLeave={() => {setSize1(20)}}
              /></button>
            )}
            <div className={thumbSelection}>

            {thumbImgs.map((img, index) => {
            thumbCount++
            var count = thumbCount
             //TODO - UNDERLINE IMAGE THAT IS SELECTED
             return(
              clickedThumb === index ? (
              <div key={index} className="carousel-item relative flex flex-col items-center h-[55px] mt-[10px]">
                  <img className="h-[50px] w-[50px] border-2 border-black transition-all duration-200 " src={img} />
                <div className="bg-black h-[1px] w-[50px] mb-[2px] mt-[2px]"></div>
                <div className="bg-black h-[1px] w-[35px]"></div>
              </div>

              ) : (
             <div key={index} className="carousel-item relative h-[55px] hover:animate-pulse">
               <button onClick={() => handleNavigationClick(count-1)} className="flex items-center justify-center h-[60px] w-[60px]">
                 <img className="h-[50px] w-[50px] border-2 border-black hover:rounded hover:border-black hover:h-[55px] hover:w-[55px] transition-all duration-200" src={img} />
               </button>
             </div>
             ))
            })}
        </div>
        {thumbImgs.length < 7 ? (
          <p></p>
        ) : (
          <button className="relative flex items-center justify-center ml-[3px] h-[20px] w-[50px] z-[12]" onClick={() => { // scroll up handler
            const carousel = document.querySelector('.thumbnails')
            carousel.scrollTop += 75
          }}><MdKeyboardArrowDown className="text-black transition-all duration-300"
                                  size={size2}
                                  onMouseEnter={() => {setSize2(30)}}
                                  onMouseLeave={() => {setSize2(20)}}
                                  />
           </button>
        )}
       </div>
    </div>
  </div>
    )
  );
}

export default Imageslide;

