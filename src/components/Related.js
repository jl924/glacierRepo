import React, {useEffect, useState, useRef, useCallback} from 'react';
import RelatedCard from './Related/RelatedCard';
import YourOutfitCard from './Related/YourOutfitCard';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import HoverModal from './Related/Related-Modal'
import './Related/Related.css';
import AddCard from './Related/Add-card'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
// const loadCarousel = require('./Related/RelatedFunc.js');
import loadCarousel from './Related/RelatedFunc.js'
import {outfit, setOutfit} from './Related/loadOutfit.js'
import selectedProductSlice from '../reducers/selectedProductSlice'




const Related = () => {

  const selectedProduct = useSelector((state) => state.selectedProductReducer.selectedProduct)
  const yourOutfitLoad = useSelector((state) => state.selectedProductReducer.yourOutfitLoad)

  const [product, setProduct] = useState([]);
  const [outfit, setOutfit] = useState([])

  useEffect(() => {
    // console.log('what going inside the then', selectedProduct.id)
    loadCarousel(selectedProduct.id)
    .then((result) => {
      // console.log('useeffect has reached then')
      var productList = result[0]
      for(var i = 0; i<productList.length; i++) {
        productList[i].extra = result[1][i]
        var rate = result[2][i].ratings
        var count = 0
        var add = 0
        for (var keys in rate) {
          add += (Number(rate[keys]) *  Number(keys))
          count += Number(rate[keys])
        }
        productList[i].ratings = (add/count);

      }
      // console.log(productList)
      setProduct(productList)
    })

  }, [selectedProduct]);

  var maxleftstart = 0

  const [maximum2, setMaximum2] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log('insde the local storage', { ...localStorage })

    let loadOutfit = () => {
    var yourOutfit = []
    for (var key in localStorage) {
      if(Number(key)) {
        yourOutfit.push(JSON.parse(localStorage[key]))
    }
    }
    setOutfit(yourOutfit)
    // console.log(yourOutfit)
    if (yourOutfit.length > 2) {
      setMaximum2(true)
    } else {
      setMaximum2(false)
    }
  }
  loadOutfit()
  }, [yourOutfitLoad]);

  const carouselRef = useRef(null);
  const carouselRef2 = useRef(null);
  const [scroll, setScroll] = useState(0);



   const [maxLeft, setMaxLeft] = useState(1)
  function checkCarouselPosition() {
    const carouselElement = carouselRef.current;
    const scrollPosition = carouselElement.scrollLeft;
    var maxScrollLeft = carouselElement.scrollWidth - carouselElement.clientWidth
    setMaxLeft(maxScrollLeft)
    // console.log(maxLeft, 'is the max')
    // console.log(scrollPosition, 'current position')
    return scrollPosition;
  }



  // console.log(maxleftstart,'maxleftstart')
  // console.log(outfitLength,'outfitLength')

  const [maxLeft2, setMaxLeft2] = useState(1)
  function checkCarouselPosition2() {
    const carouselElement2 = carouselRef2.current;
    const scrollPosition2 = carouselElement2.scrollLeft;
    var maxScrollLeft2 = carouselElement2.scrollWidth - carouselElement2.clientWidth
    setMaxLeft2(maxScrollLeft2)
    // console.log(outfitLength, 'outfitLength inside checkpo')
    return scrollPosition2;
  }


  var showleft1 = false
  const [left1, setLeft1] = useState(false);
  const [maximum, setMaximum] = useState(true);

  useEffect(() => {

    if (checkCarouselPosition() > 0) {
      setLeft1(true)
    } else if (checkCarouselPosition() === 0) {
      setLeft1(false)
    }
    if (checkCarouselPosition() === maxLeft) {
      setMaximum(false)
    }
    if (checkCarouselPosition() < maxLeft) {
      setMaximum(true)
    }
    // console.log(showleft1, 'SHOW ME THE TRUTH')
  }, [scroll]);


  var showleft2 = false
  const [left2, setLeft2] = useState(false);

  useEffect(() => {

    checkCarouselPosition()

    if (checkCarouselPosition2() > 0) {
      setLeft2(true)
    } else if (checkCarouselPosition2() === 0) {
      setLeft2(false)
    }
    if (checkCarouselPosition2() === maxLeft2) {
      setMaximum2(false)
    }
    if (checkCarouselPosition2() < maxLeft2) {
      setMaximum2(true)
    }
    // console.log(showleft2, 'SHOW ME THE TRUTH')

  }, [scroll]);

  useEffect(() => {

    checkCarouselPosition()

    if (checkCarouselPosition2() > 0) {
      setLeft2(true)
    } else if (checkCarouselPosition2() === 0) {
      setLeft2(false)
    }
    if (checkCarouselPosition2() === maxLeft2) {
      setMaximum2(false)
    }
    if (checkCarouselPosition2() < maxLeft2) {
      setMaximum2(true)
    }
    var yourOutfit2 = []
    for (var key in localStorage) {
      if(Number(key)) {
        yourOutfit2.push(JSON.parse(localStorage[key]))
    }
    }
    // console.log(yourOutfit)
    if (yourOutfit2.length > 2) {
      setMaximum2(true)
    } else {
      setMaximum2(false)
    }

  }, []);



  return (
    <>
    <div id='relatedTitle'> Related Items </div>
    <div className='container container1'>
    <button id='left-related' type='button' onClick={()=>document.getElementById('caro-related').scrollLeft -= 500} module="relatedCaroLeft|related">{left1 ? '❮' : "ㅤ"}</button>
    <div id='caro-related' className="carousel carousel-center max-w-4xl p-4 space-x-2" ref={carouselRef} onScroll={() => setScroll(scroll+1)}>

      {product.map((single) => (
        <RelatedCard products={single} key={single.product_id}/>
      ))}
    </div>
    <button id='right-related' type='button' onClick={()=>{return document.getElementById('caro-related').scrollLeft += 400}} module="relatedCaroRight|related">{maximum ? '❯' : "ㅤ"}</button>
</div>
<div id='outfitTitle'> Your Outfits </div>
<div className='container container1'>
    <button id='left-related' type='button' onClick={()=>document.getElementById('caro-outfit').scrollLeft -= 500}module="YourOutfitCaroLeft|related">{left2 ? '❮' : "ㅤ"}</button>
    <div id='caro-outfit' className="carousel carousel-center max-w-4xl p-4 space-x-2" ref={carouselRef2} onScroll={() => setScroll(scroll+1)}>
      <AddCard module="addCard|related"/>
      {outfit.map((double) => (
        <YourOutfitCard outfits={double} key={double.id} module="YourOutfitCard|related"/>
      ))}
    </div>
    <button id='right-related' type='button' onClick={()=>{return document.getElementById('caro-outfit').scrollLeft += 400}} module="YourOutfitCaroright|related">{maximum2 ? '❯' : "ㅤ"}</button>
</div>
</>
  );
}

export default Related;

