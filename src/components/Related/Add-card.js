
import React, {useEffect, useState} from 'react';
import {AiFillStar} from 'react-icons/ai'
import './Related.css';
import {useSelector} from 'react-redux'
import {getProductById, getInfoById} from '../Overview/reqHelpers.js'



const AddCard = () => {

  const selectedProduct = useSelector((state) => state.selectedProductReducer.selectedProduct)

  const [addImage, setAddImage] = useState('https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

  useEffect(() => {
    // getProductById(selectedProduct.id)
    // .then((result) => {
    //   console.log(results,'RESULTS IN ADD')
    // })

  }, []);

  return (
    <div className="relative">
    <div className="carousel-item container w-[220px]">
    <div id="addCard" className="card w-96 bg-base-100 shadow-xl image-full rounded border-grey">
  <figure><img className='w-full' src={addImage} /></figure>
  <div className="card-body">
  <label onClick={() => console.log('clicked')} id='plus' className="btn">+</label>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
</div>
</div>

  );
}

export default AddCard
