import React from 'react';
import {AiFillStar} from 'react-icons/ai'
import {useSelector, useDispatch} from 'react-redux'
import RatingView from '../sharedComponents/RatingView'
import axios from 'axios'
import selectedProductSlice from '../../reducers/selectedProductSlice'




const YourOutfitCard = ({outfits}) => {

  const yourOutfitLoad = useSelector((state) => state.selectedProductReducer.yourOutfitLoad)

let deleteIt = (id) => {
  localStorage.removeItem(`${id}`)
  var dummmy = {}
  dummmy['dummy'] = 2
  dispatch(selectedProductSlice.actions.yourOutfitLoadRequestSuccess(dummmy))
}

const selectedProduct = useSelector((state) => state.selectedProductReducer.selectedProduct)

const token = process.env.API_KEY

const headers = {
  'Authorization': token
}

const dispatch = useDispatch();

let getProductById = (id) => {
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}`, { headers })
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
// console.log("getProductById", getProductById)


if (outfits.discountPrice) {
  return (
    <div className="relative">
      <div className="carousel-item container w-[250px]">
    <div id={outfits.id} className="card card1 w-[250px] card-bordered rounded border-grey">
    <label onClick={() => deleteIt(outfits.id)} id='compareBtn' className="btn">X</label>
  <figure id='cardImgContainter'><img className='cardImg'src={outfits.photo ||"https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6" } /></figure>
  <div className="card-body hover:cursor-pointer" id={outfits.id} onClick={
      ()=>getProductById(outfits.id)
      .then((response)=> {
        // console.log('then response after req',response)
        dispatch(selectedProductSlice.actions.selectedProductRequestSuccess(response))
      })}>
  <small>{outfits.category}</small>
    <h2 id="titleCard" className="card-title">{outfits.name}</h2>
    <small style={{textDecoration: 'line-through'}}>{outfits.price}</small>
    <small style={{color:'red'}}>{outfits.discountPrice}</small>
    <RatingView width={108} rating={outfits.rating}/>
    <div className="card-actions justify-end">
    <small></small>
    </div>
  </div>
</div>
</div>
</div>
  );


    } else {
      return (
        <div className="relative">
          <div className="carousel-item container w-[250px]">
        <div id={outfits.id} className="card card1 w-[250px] card-bordered rounded border-grey">
        <label onClick={() => deleteIt(outfits.id)} id='compareBtn' className="btn">X</label>
      <figure id='cardImgContainter'><img className='cardImg'src={outfits.photo ||"https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6" } /></figure>
      <div className="card-body hover:cursor-pointer" id={outfits.id} onClick={
          ()=>getProductById(outfits.id)
          .then((response)=> {
            // console.log('then response after req',response)
            dispatch(selectedProductSlice.actions.selectedProductRequestSuccess(response))
          })}>
      <small>{outfits.category}</small>
        <h2 id="titleCard" className="card-title">{outfits.name}</h2>
        <small>{outfits.price}</small>
        <RatingView width={108} rating={outfits.rating}/>
        <div className="card-actions justify-end">
        <small></small>
        </div>
      </div>
    </div>
    </div>
    </div>
      );

    }

}

export default YourOutfitCard