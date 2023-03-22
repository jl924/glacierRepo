import React from 'react';
import { Carousel } from 'daisyui';
import { useState } from 'react'
const Imageslide = ({product, style, expanded, setExpanded}) => {

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

   var thumbSelection = `carousel carousel-vertical max-h-[410px] w-[55px] thumbnails z-[11]`

  const[currentIndex, setCurrentIndex] = useState(0)

  const handleNavigationClick = (newIndex) => {
    setCurrentIndex(newIndex);
  };


  return (
    expanded ? (
      <div className="carousel relative w-full h-[550px] hover:cursor-zoom-in">
  {mainImgs.map((img, index) => {
    const prev = index === 0 ? mainImgs.length - 1 : index - 1;
    const next = index === mainImgs.length - 1 ? 0 : index + 1;

    return (
      <div
        key={index}
        className={`carousel-item absolute inset-0 w-[1000px] transition duration-500  ${
          currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      >
        <img onClick={() => { setExpanded(false) }} src={img} className="w-full h-full object-cover" />
        <div className="absolute flex justify-between left-5 right-5 top-1/2">
          <button onClick={() => handleNavigationClick(prev)} className="btn btn-circle ml-[100px]">❮</button>
          <button onClick={() => handleNavigationClick(next)} className="btn btn-circle ml-[100px]">❯</button>
        </div>
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
                <div className="absolute flex justify-between left-5 right-5 top-1/2">
                  <button onClick={() => handleNavigationClick(prev)} className="btn btn-circle ml-[100px]">❮</button>
                  <button onClick={() => handleNavigationClick(next)} className="btn btn-circle ml-[100px]">❯</button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex flex-col justify-center w-[60px]">

         <div className="flex flex-col justify-center h-[500px] w-[52px] absolute z-2 mb-[600px] ml-[30px]">

           <button className="relative h-[25px] w-[50px] text-black" onClick={() => { // scroll up handler
           const carousel = document.querySelector('.thumbnails')
           carousel.scrollTop -= 75
           }}>△</button>

            <div className={thumbSelection}>

            {thumbImgs.map((img, index) => {
            thumbCount++
            var count = thumbCount
             //TODO - UNDERLINE IMAGE THAT IS SELECTED
             return(
             <div key={index} className="carousel-item relative mb-[10px]">
               <button onClick={() => handleNavigationClick(count-1)} className="h-[50px] w-[50px]">
                 <img className="h-[50px] w-[50px] mb-[10px] border-2 border-black" src={img} />
               </button>
             </div>
             )
            })}
        </div>
        <button className="relative h-[25px] w-[50px]" onClick={() => { // scroll up handler
          const carousel = document.querySelector('.thumbnails')
          carousel.scrollTop += 75
        }}>▽</button>

       </div>
    </div>
  </div>
    )
  );



//   return (
//   expanded ? (
//     <div className="carousel w-full h-full hover:cursor-zoom-in h-[550px]">

//     {mainImgs.map((img, index) => {
//       const prev = index === 0 ? mainImgs.length : index;
//       const next = index === mainImgs.length - 1 ? 0 : index + 1;

//       return (
//         <div key={index} id={"slide" + (index + 1)} className={`carousel-item relative w-full ${currentIndex === index ? "active" : ""}`}>
//         <img onClick={() => { setExpanded(false) }} src={img} className="w-full" />
//         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//           <button onClick={() => handleNavigationClick(prev)} className="btn btn-circle ml-[100px]">❮</button>
//           <button onClick={() => handleNavigationClick(next + 1)} className="btn btn-circle ml-[100px]">❯</button>
//         </div>
//       </div>
//       )
//     })}

//     </div>
//   ) : (


//   <div className="h-full w-full">

//     {/*--------MAIN IMAGES--------*/}
//   <div className="carousel w-full h-full hover:cursor-zoom-in">

//     {mainImgs.map((img, index) => {
//       const prev = index === 0 ? mainImgs.length : index;
//       const next = index === mainImgs.length - 1 ? 0 : index + 1;

//       return (
//         <div key={index} id={"slide" + (index + 1)} className="carousel-item relative w-full">
//         <img onClick={()=>{setExpanded(true)}} src={img} className="w-full" />
//         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

//           <a href={"#slide" + (prev)} className="btn btn-circle ml-[100px]" >❮</a>

//           <a href={"#slide" + (next + 1)} className="btn btn-circle ml-[100px]" >❯</a>

//         </div>
//       </div>
//       )
//     })}

//   </div>


//   {/*--------THUMBNAILS--------*/}
//   <div className="flex flex-col justify-center w-[60px]">

//     { <div className="flex flex-col justify-center h-[500px] w-[52px] absolute z-2 mb-[600px] ml-[30px]">

//     <button className="relative h-[25px] w-[50px] text-black" onClick={() => { // scroll up handler
//       const carousel = document.querySelector('.thumbnails')
//       carousel.scrollTop -= 75
//     }}>△</button>

//     <div className={thumbSelection}>

//     {thumbImgs.map((img, index) => {
//       thumbCount++
//       //TODO - UNDERLINE IMAGE THAT IS SELECTED
//       return(
//       <div key={index} className="carousel-item relative mb-[10px]">
//         <a className="h-[50px] w-[50px]" href={"#slide" + thumbCount}>
//           <img className="h-[50px] w-[50px] mb-[10px] border-2 border-black" src={img} />
//         </a>
//       </div>
//       )
//     }
//     )}
//   </div>

//   <button className="relative h-[25px] w-[50px]" onClick={() => { // scroll up handler
//       const carousel = document.querySelector('.thumbnails')
//       carousel.scrollTop += 75
//     }}>▽</button>

//   </div> }
//   </div>

// </div>


//   ));
}

export default Imageslide;

