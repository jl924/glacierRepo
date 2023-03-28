import React from "react";
import { Formik } from "formik";
import RatingView from "../sharedComponents/RatingView";
import { object, string, number, mixed, boolean, array } from "yup";
import CustomRating from "./CustomInputs/CustomRating";
import CustomRecommended from "./CustomInputs/CustomRecommended";
import BigButton from "../sharedComponents/BigButton";
import CustomInput from "./CustomInputs/CustomInput";
import CustomPhotos from "./CustomInputs/CustomPhotos";
import CustomCharacteristics from "./CustomInputs/CustomCharacteristics";
import { useSelector, useDispatch } from "react-redux";
import CustomBody from "./CustomInputs/CustomBody";
import CustomPhotoLinks from "./CustomInputs/CustomPhotoLinks";
import { apiLocalPostRequest } from "../../helpers/api.js";
import {
  toggleModal,
  sortingSet,
  reRenderRequest,
} from "../../reducers/ratingsReviewsSlice.js";

let reviewSchema = object().shape({
  rating: number().integer().min(1, "Please select a rating between 1 and 5"),
  recommended: boolean(),
  summary: string().required().min(1).max(60),
  body: string().required().min(50).max(1000),
  characteristics: object(),
  name: string().required(),
  email: string().email().required(),
  photos: mixed() /* array().of(
    string().url(
      (val) =>
        `Photo link #${
          parseInt(
            val.path.slice(val.path.indexOf("[") + 1, val.path.indexOf("]"))
          ) + 1
        } is not a valid url.`
    )
  ) */,
});

const NewReviewForm = () => {
  const characteristics = useSelector(
    (state) => state.ratingsReviewsReducer.meta.characteristics
  );
  const product = useSelector(
    (state) => state.selectedProductReducer.selectedProduct
  );
  const dispatch = useDispatch();
  const characteristicsInitial = {};
  const keys = ["Size", "Width", "Comfort", "Quality", "Length", "Fit"];
  keys && keys.forEach((key) => (characteristicsInitial[key] = 3));

  const initialValues = {
    rating: 0,
    recommend: true,
    summary: "",
    body: "",
    name: "",
    email: "",
    photos: [],
    characteristics: characteristicsInitial,
  };
  //document.querySelector('input[name="rate"]:checked').value;

  return (
    <div className="flex justify-center newReviewForm flex-column">
      <Formik
        validationSchema={reviewSchema}
        initialValues={initialValues}
        onSubmit={(values, { errors, setSubmitting, resetForm }) => {
          console.log(values.photos);

          setSubmitting(true);
          const newValues = { ...values };
          const newCharacteristics = {};
          Object.keys(characteristics).forEach((trait) => {
            const id = characteristics[trait].id;
            newCharacteristics[id] = values.characteristics[trait];
          });
          newValues.characteristics = newCharacteristics;
          newValues.product_id = product.id;
          //newValues.photos = Array.from(newValues.photos).map((f) => f);
          const formData = new FormData();
          Array.from(newValues.photos).forEach((photo) =>
            formData.append("photos", photo)
          );
          delete newValues.photos;
          Object.keys(newValues).forEach((key) => {
            console.log(key, newValues[key]);
            formData.append(key, JSON.stringify(newValues[key]));
          });
          /* Object.keys(newValues.characteristics).forEach((key) =>
            formData.append("characteristics", {
              key: newValues.characteristics[key],
            })
          ); */
          Array.from(formData).forEach((val) =>
            console.log(val, formData[val])
          );
          apiLocalPostRequest("/reviews", formData)
            .then(async (res) => {
              console.log(res);
              if (res.status === 201) {
                resetForm();
                dispatch(toggleModal());
                document.querySelector(".mainRatings").scrollIntoView();
                await dispatch(sortingSet({ sorting: "newest" }));
                dispatch(reRenderRequest());
              }
            })
            .catch((err) =>
              console.log(
                "err occurred when trying to post new review form",
                err
              )
            )
            .finally(() => setSubmitting(false));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <div
              className={
                "flex flex-col justify-center" +
                (isSubmitting ? " opacity-50" : "")
              }
            >
              {/* {Object.keys(errors).map((error) => (
                <span>{`${error}: ${errors[error]}`}</span>
              ))} */}
            </div>
            <CustomRating label="Rate this product" name="rating" />
            <CustomRecommended label="Recommended: " name="recommend" />
            <CustomInput label="Summary: " name="summary" />
            <CustomBody label="Body: " name="body" />
            <CustomCharacteristics
              label="Characteristics: "
              name={"characteristics"}
            />
            <CustomPhotos label="Photos:" name="photos" />
            <CustomInput label="Nickname: " name="name" />
            <CustomInput label="Email:" type="email" name="email" />
            <BigButton
              classes="w-fit"
              type="submit"
              text={"Submit review"}
              disabled={isSubmitting}
            />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default NewReviewForm;
