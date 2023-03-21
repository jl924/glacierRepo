import React from "react";
import { apiGetRequest } from "../../helpers/api.js";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  ratingsReviewsRequest,
  ratingsReviewsSuccess,
  metaRequest,
  metaSuccess,
} from "../../reducers/ratingsReviewsSlice.js";
import RatingsReviews from "../RatingsReviews.js";

export default function RatingsReviewsLoader() {
  const dispatch = useDispatch();
  dispatch(ratingsReviewsRequest());
  dispatch(metaRequest());
  const product = useSelector(
    (state) => state.selectedProductReducer.selectedProduct
  );
  useEffect(() => {
    if (product && product.id) {
      apiGetRequest("/reviews", { product_id: product.id }).then((res) => {
        dispatch(ratingsReviewsSuccess({ ratingsReviews: res.results }));
      });

      apiGetRequest("/reviews/meta", { product_id: product.id }).then((res) => {
        let sum = 0;
        let num = 0;
        for (let key in res.ratings) {
          sum += key * res.ratings[key];
          num += parseInt(res.ratings[key]);
        }
        const average = sum / num;
        res.numReviews = num;
        res.averageReviews = Math.floor(average * 100) / 100;
        res.recommend = Math.floor(
          (100 * res.recommended.true) /
            (parseInt(res.recommended.true) + parseInt(res.recommended.false))
        );
        dispatch(metaSuccess({ meta: res }));
      });
    }
  }, [product]);

  return <RatingsReviews />;
}
