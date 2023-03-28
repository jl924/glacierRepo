import React, { useRef, useEffect } from "react";
import {useSelector} from 'react-redux'
import './Related.css';


function RelatedCompare({compare}) {

  const selectedProduct = useSelector((state) => state.selectedProductReducer.selectedProduct)

  // {selectedProduct.features.length > 0 ? (compare.extra.features[0].feature === selectedProduct.features[0].feature ?  selectedProduct.features[0].value || '✓' : "ㅤ") : "ㅤ"}

  return (
    <>
    <div>
    <div className="stats w-full">

    <div className="stat place-items-center">
      <div className="stat-title font-bold"> Overview </div>
      <div>✓</div>
      <div>✓</div>
      <div>✓</div>
      <div>{selectedProduct.features.length > 0 ? selectedProduct.features[0].value || '✓' : "ㅤ"}</div>
      <div>{selectedProduct.features.length > 1 ? selectedProduct.features[1].value || '✓' : "ㅤ"}</div>
      <div>ㅤ</div>
      <div>ㅤ</div>

    </div>

    <div className="stat place-items-center">
      <div className="stat-title">ㅤ</div>
      <div className="stat-title">GMO and Pesticide-free</div>
      <div className="stat-title">Made with 100% Love</div>
      <div className="stat-title">Made with 100% Care</div>
      <div className="stat-title">{selectedProduct.features.length > 0 ? selectedProduct.features[0].feature : "ㅤ"}</div>
      <div className="stat-title">{selectedProduct.features.length > 1 ? selectedProduct.features[1].feature : "ㅤ"}</div>

      <div className="stat-title">{compare.extra.features.length > 0 ? (compare.extra.features[0].feature === selectedProduct.features[0].feature ?  '' : compare.extra.features[0].feature) : ""}</div>
      <div className="stat-title">{compare.extra.features.length > 1 ? (compare.extra.features[1].feature === selectedProduct.features[1].feature ?  '' : compare.extra.features[1].feature) : ""}</div>

    </div>

    <div className="stat place-items-center">
      <div className="stat-title font-bold">{compare.extra.name}</div>
      <div>✓</div>
      <div>✓</div>
      <div>✓</div>
      <div>{compare.extra.features.length > 0 ? (compare.extra.features[0].feature === selectedProduct.features[0].feature ?  selectedProduct.features[0].value || '✓' : "ㅤ") : "ㅤ"}</div>
      <div>{compare.extra.features.length > 1 ? (compare.extra.features[1].feature === selectedProduct.features[1].feature ?  selectedProduct.features[1].value || '✓' : "ㅤ") : "ㅤ"}</div>
      <div>{compare.extra.features.length > 0 && compare.extra.features[0].feature !== selectedProduct.features[0].feature ? compare.extra.features[0].value || '✓': ""}</div>
      <div>{compare.extra.features.length > 1 && compare.extra.features[1].feature !== selectedProduct.features[1].feature ? compare.extra.features[1].value || '✓': ""}</div>
    </div>


</div>
</div>
</>
  );
}

export default RelatedCompare;