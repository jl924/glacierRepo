import React from 'react';
import {AiFillStar} from 'react-icons/ai'
import './Related.css';
import Modal from './Related-Modal'
import RelatedCompare from './Related-Card-Compare'




const RelatedCard = ({products}) => {
  return (
    <div className="relative">
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
<label id='modal1' htmlFor="my-modal-4" className="modal cursor-pointer">
  <label id='modal2'className="modal-box relative" htmlFor="">
    <RelatedCompare/>
  </label>
</label>
      <div className="carousel-item container w-[250px]">
    <div id={products.product_id} onClick={()=>console.log(products.product_id)} className="card card1 w-[250px] card-bordered rounded border-grey">
    <label id='compareBtn' htmlFor="my-modal-4" className="btn">☆</label>
  <figure id='cardImgContainter'><img className='cardImg' src={products.results[3].photos[0].thumbnail_url
 ||"https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6" }/></figure>
  <div className="card-body" >
  <small>{products.extra.category}</small>
    <h2 id="titleCard" className="card-title">{products.extra.name}</h2>
    <small>{products.extra.default_price}</small>
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

