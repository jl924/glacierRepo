
import React from 'react';
import {AiFillStar} from 'react-icons/ai'




const YourOutfitCard = () => {
  return (
    <div class="relative">
      <div className="carousel-item container w-[220px]">
    <div id="card" className="card w-[220px] card-bordered rounded border-grey">
    <label onClick={() => console.log('clicked')}id='compareBtn' className="btn">X</label>
  <figure><img className='w-full'src="https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scae=10&wid=1600&hei=1600" /></figure>
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