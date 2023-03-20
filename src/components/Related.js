import React from 'react';
import RelatedCard from './Related/RelatedCard';
import YourOutfitCard from './Related/YourOutfitCard';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import HoverModal from './Related/Related-Modal'
import './Related/Related.css';
import AddCard from './Related/Add-card'



const Related = () => {



  return (
    <>
    <div id='relatedTitle'> Related Items </div>
    <div className='container container1'>
    <button id='left-related' type='button' onClick={()=>document.getElementById('caro-related').scrollLeft -= 500}>❮</button>
    <div id='caro-related' className="carousel carousel-center max-w-4xl p-4 space-x-2">
      <RelatedCard/>
      <RelatedCard/>
      <RelatedCard/>
      <RelatedCard/>
      <RelatedCard/>
      <RelatedCard/>
      <RelatedCard/>
      <RelatedCard/>
      <RelatedCard/>
      <RelatedCard/>
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