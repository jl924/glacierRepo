import React from 'react';
import {AiFillStar} from 'react-icons/ai'
import './Related.css';
import Modal from './Related-Modal'




const RelatedCard = () => {
  return (
    <div>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
<label id='modal1' htmlFor="my-modal-4" className="modal cursor-pointer">
  <label id='modal2'className="modal-box relative" htmlFor="">
    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </label>
</label>
      <div className="carousel-item container w-[220px]">
    <div id="card" className="card w-[220px] card-bordered rounded border-grey">
    <label id='compareBtn' htmlFor="my-modal-4" className="btn">☆</label>
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

export default RelatedCard

