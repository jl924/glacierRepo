import React, { useRef, useEffect } from "react";
import {useSelector} from 'react-redux'
import './Related.css';


function RelatedCompare({compare}) {

  const selectedProduct = useSelector((state) => state.selectedProductReducer.selectedProduct)

  // {selectedProduct.features.length > 0 ? (compare.extra.features[0].feature === selectedProduct.features[0].feature ?  selectedProduct.features[0].value || '✓' : "ㅤ") : "ㅤ"}

  // console.log(selectedProduct)
  // console.log(compare)

  var difference = Number(selectedProduct.default_price) - Number(compare.extra.default_price)
  if (difference < 0) {
    difference = difference * -1;
  }
  const overview1 = selectedProduct.features.length > 0 ? selectedProduct.features[0].value || '✓' : "ㅤ"

  const overviewPrice = Number(selectedProduct.default_price) > Number(compare.extra.default_price) ? '+' : '-'
  const outfitPrice = Number(selectedProduct.default_price) > Number(compare.extra.default_price) ? '-' : '+'

  return (
    <>
    <div className="compareModal">
    <div className="stats w-full">

    <div className="stat place-items-center">
      <div className="stat-title font-bold"> Overview </div>
      <div>✓</div>
      <div>✓</div>
      <div>✓</div>
      <div>{selectedProduct.default_price}</div>
      <div>{overview1}</div>
      <div>{selectedProduct.features.length > 1 ? selectedProduct.features[1].value || '✓' : "ㅤ"}</div>
      <div>ㅤ</div>
      <div>ㅤ</div>

    </div>

    <div className="stat place-items-center">
      <div className="stat-title">ㅤ</div>
      <div className="stat-title">GMO and Pesticide-free</div>
      <div className="stat-title">Made with 100% Love</div>
      <div className="stat-title">Made with 100% Care</div>
      <div className="stat-title">Price <small style={{fontStyle: 'italic'}}>difference</small><small style={{fontStyle: 'italic', textDecorationLine: 'underline'}}>{overviewPrice}{difference}.00{outfitPrice}</small></div>
      <div className="stat-title">{selectedProduct.features.length > 0 ? selectedProduct.features[0].feature : "ㅤ"}</div>
      <div className="stat-title">{selectedProduct.features.length > 1 ? selectedProduct.features[1].feature : "ㅤ"}</div>
      <div className="stat-title">{compare.extra.features.length > 0 ? (compare.extra.features[0].feature === selectedProduct.features[0].feature ?  'ㅤ' : compare.extra.features[0].feature) : "ㅤ"}</div>
      <div className="stat-title">{compare.extra.features.length > 1 ? (compare.extra.features[1].feature === selectedProduct.features[1].feature ?  'ㅤ' : compare.extra.features[1].feature) : "ㅤ"}</div>

    </div>

    <div className="stat place-items-center">
      <div className="stat-title font-bold">{compare.extra.name}</div>
      <div>✓</div>
      <div>✓</div>
      <div>✓</div>
      <div>{compare.extra.default_price}</div>
      <div>{compare.extra.features.length > 0 ? (compare.extra.features[0].feature === selectedProduct.features[0].feature ?  selectedProduct.features[0].value || '✓' : "ㅤ") : "ㅤ"}</div>
      <div>{compare.extra.features.length > 1 ? (compare.extra.features[1].feature === selectedProduct.features[1].feature ?  selectedProduct.features[1].value || '✓' : "ㅤ") : "ㅤ"}</div>
      <div>{compare.extra.features.length > 0 && compare.extra.features[0].feature !== selectedProduct.features[0].feature ? compare.extra.features[0].value || '✓': "ㅤ"}</div>
      <div>{compare.extra.features.length > 1 && compare.extra.features[1].feature !== selectedProduct.features[1].feature ? compare.extra.features[1].value || '✓': "ㅤ"}</div>
    </div>


</div>
</div>
</>
  );
}

export default RelatedCompare;