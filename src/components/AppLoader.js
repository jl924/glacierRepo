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
  const { ratingsReviews, sorting, reRender } = useSelector(
    (s) => s.ratingsReviewsReducer
  );
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
        let num = ratingsReviews.length;
        let sum = 0;
        let max = 0;
        var ratings = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        ratingsReviews.forEach((review) => ratings[review.rating]++);

        for (let key in ratings) {
          sum += key * ratings[key];
          if (ratings[key] > max) max = ratings[key];
        }
        const average = sum / num;
        var recommend = Math.floor(
          (100 * res.recommended.true) /
            (parseInt(res.recommended.true) + parseInt(res.recommended.false))
        );
        var ret = {
          ...res,
          numReviews: num,
          averageReviews: Math.floor(average * 10) / 10,
          max,
          recommend,
          ratings,
        };
        dispatch(metaSuccess({ meta: ret }));
      });
    }
  }, [product, ratingsReviews]);

  const [isLoading, setIsLoading] = useState(true);

  const [z, setZ] = useState(20);
  useEffect(() => {
    if (isLoading === false) {
      setTimeout(() => {
        setZ(1);
      }, 200);
    }
  }, [isLoading]);

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <>
      <div className={`z-${z} absolute`}>
        <LoadingScreen isLoading={isLoading} setIsLoading={setIsLoading} />
      </div>
      <div>
        <App />
      </div>
    </>
  );
}
