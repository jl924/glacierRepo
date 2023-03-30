import React from "react";
import { apiGetRequest } from "../helpers/api.js";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  ratingsReviewsRequest,
  ratingsReviewsSuccess,
  metaRequest,
  metaSuccess,
  reRenderSuccess,
} from "../reducers/ratingsReviewsSlice.js";
import App from "./App";
import LoadingScreen from "./LoadingScreen";

export default function AppLoader() {
  const dispatch = useDispatch();
  const product = useSelector(
    (state) => state.selectedProductReducer.selectedProduct
  );
  const sorting = useSelector((state) => state.ratingsReviewsReducer.sorting);
  const reRender = useSelector((state) => state.ratingsReviewsReducer.reRender);
  useEffect(() => {
    if (reRender === true) {
      dispatch(reRenderSuccess());
    } else {
      dispatch(ratingsReviewsRequest());
      if (product && product.id) {
        apiGetRequest("/reviews", {
          sort: sorting,
          product_id: product.id,
        }).then((res) => {
          dispatch(ratingsReviewsSuccess({ ratingsReviews: res.results }));
        });
      }
    }
  }, [product, sorting, reRender]);

  useEffect(() => {
    dispatch(metaRequest());
    if (product && product.id) {
      apiGetRequest("/reviews/meta", { product_id: product.id }).then((res) => {
        let sum = 0;
        let num = 0;
        let max = 0;
        for (let key in res.ratings) {
          sum += key * res.ratings[key];
          num += parseInt(res.ratings[key]);
          if (parseInt(res.ratings[key]) > max)
            max = parseInt(res.ratings[key]);
        }
        const average = sum / num;
        res.numReviews = num;
        res.averageReviews = Math.floor(average * 10) / 10;
        res.max = max;
        res.recommend = Math.floor(
          (100 * res.recommended.true) /
            (parseInt(res.recommended.true) + parseInt(res.recommended.false))
        );
        dispatch(metaSuccess({ meta: res }));
      });
    }
  }, [product]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
    {isLoading ? (
      <LoadingScreen />
    ) : (
      <App />
    )}
    </>
  );
}


