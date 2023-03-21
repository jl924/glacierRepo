import React, {useEffect, useState} from 'react';
import RelatedCard from './Related/RelatedCard';
import YourOutfitCard from './Related/YourOutfitCard';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import HoverModal from './Related/Related-Modal'
import './Related/Related.css';
import AddCard from './Related/Add-card'
import axios from 'axios'
import {useSelector} from 'react-redux'
import loadCarousel from './Related/RelatedFunc'



const Related = () => {

  const selectedProduct = useSelector((state) => state.selectedProductReducer.selectedProduct)

  const [product, setProduct] = useState([]);


  useEffect(() => {
    loadCarousel(selectedProduct.id)
    .then((result) => {
      var productList = result[0]
      for(var i = 0; i<productList.length; i++) {
        productList[i].extra = result[1][i]
      }
      console.log(productList, 'plese work')
      setProduct(productList)
    })

  }, []);





  return (
    <>
    <div id='relatedTitle'> Related Items </div>
    <div className='container container1'>
    <button id='left-related' type='button' onClick={()=>document.getElementById('caro-related').scrollLeft -= 500}>❮</button>
    <div id='caro-related' className="carousel carousel-center max-w-4xl p-4 space-x-2">
      {product.map((single) => (
        <RelatedCard products={single}/>
      ))}

    </div>
    <button id='right-related' type='button' onClick={()=>{return document.getElementById('caro-related').scrollLeft += 400}}>❯</button>
</div>
<div id='outfitTitle'> Your Outfits </div>
<div className='container container1'>
    <button id='left-related' type='button' onClick={()=>document.getElementById('caro-outfit').scrollLeft -= 500}>❮</button>
    <div id='caro-outfit' className="carousel carousel-center max-w-4xl p-4 space-x-2">
      <AddCard/>
      <YourOutfitCard/>
      <YourOutfitCard/>
      <YourOutfitCard/>
      <YourOutfitCard/>
      <YourOutfitCard/>
      <YourOutfitCard/>
      <YourOutfitCard/>
      <YourOutfitCard/>
      <YourOutfitCard/>
    </div>
    <button id='right-related' type='button' onClick={()=>{return document.getElementById('caro-outfit').scrollLeft += 400}}>❯</button>
</div>
</>
  );
}

export default Related;