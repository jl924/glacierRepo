import React from 'react';
import RelatedCard from './Related/RelatedCard';
import YourOutfitCard from './Related/YourOutfitCard';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import HoverModal from './Related/Related-Modal'
import './Related/Related.css';



const Related = () => {



  return (
    <div className='container mx-auto'>
    <div> Related Items </div>
    <button id='left-related' type='button' onClick={()=>document.getElementById('caro').scrollLeft -= 20}>❮</button>
    <div id='caro' className="carousel max-w-7xl p-4 space-x-2">
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
    <button id='right-related' type='button' onClick={()=>document.getElementById('caro').scrollLeft += 20}>❮</button>
    <div> Your outfit </div>
    <div className="carousel max-w-7xl p-4 space-x-4">
      <YourOutfitCard/>
      <YourOutfitCard/>
      <YourOutfitCard/>
      <YourOutfitCard/>
      <YourOutfitCard/>
      <YourOutfitCard/>
      <YourOutfitCard/>
      <YourOutfitCard/>
    </div>
</div>
  );
}

export default Related;