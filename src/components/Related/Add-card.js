
import React, {useEffect, useState} from 'react';
import {AiFillStar} from 'react-icons/ai'
import './Related.css';
import {useSelector} from 'react-redux'
import axios from 'axios'



const AddCard = () => {

  const selectedProduct = useSelector((state) => state.selectedProductReducer.selectedProduct)

  const rating = useSelector((state) => state.ratingsReviewsReducer.meta.averageReviews)

  const [addImage, setAddImage] = useState('https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

  const [styles, setStyles] = useState({})

  const token = process.env.API_KEY

const headers = {
  'Authorization': token
}


  let getProductById = (id) => {
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}/styles`, { headers })
      .then(response => {
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
  }


  useEffect(() => {
    // console.log('USEFFECT IS WORKING')
    getProductById(selectedProduct.id)
    .then((res) => {
      // console.log(res,'RESULTS IN ADD')
      setStyles(res)
      setAddImage(res.results[0].photos[0].thumbnail_url)
    })

  }, [selectedProduct]);


  let addToOutfit = () => {
    var curr = {}

    curr.id = selectedProduct.id
    curr.name = selectedProduct.name
    curr.category = selectedProduct.category
    curr.price = selectedProduct.default_price
    curr.discountPrice = styles.results[0].sale_price
    curr.photo = styles.results[0].photos[0].thumbnail_url
    curr.rating = rating

    var string = JSON.stringify(curr)

    localStorage.setItem(`${selectedProduct.id}`, string)
    console.log("item has been added to local storage")


  }








  return (
    <div className="relative">
    <div className="carousel-item container w-[220px]">
    <div id="addCard" className="card w-96 bg-base-100 shadow-xl image-full rounded border-grey">
  <figure><img className='w-full' src={addImage} /></figure>
  <div className="card-body">
  <label onClick={() => addToOutfit()} id='plus' className="btn">+</label>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
</div>
</div>

  );
}

export default AddCard
