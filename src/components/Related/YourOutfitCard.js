
import React from 'react';
import {AiFillStar} from 'react-icons/ai'




const YourOutfitCard = () => {
  return (
    <div className="relative">
      <div className="carousel-item container w-[220px]">
    <div id="card" className="card w-[220px] card-bordered rounded border-grey">
    <label onClick={() => console.log('clicked')}id='compareBtn' className="btn">X</label>
  <figure><img className='w-full'src="https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" /></figure>
  <div className="card-body" >
  <small>Hoodies & Sweaters</small>
    <h2 id="titleCard" className="card-title">Soft Hoodie!</h2>
    <small>$200</small>
    <small><AiFillStar/></small>
    <div className="card-actions justify-end">
    <small></small>
    </div>
  </div>
</div>
</div>
</div>

  );
}

export default YourOutfitCard