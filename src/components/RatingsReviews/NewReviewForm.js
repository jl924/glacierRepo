import React from "react";
import { Formik } from "formik";

const NewReviewForm = () => {
  const ratings = [0, 1, 2, 3, 4, 5];
  const initialValues = {
    rating: 2,
    recommended: true,
    summary: "",
    body: "",
    name: "",
    email: "",
    photos: [],
  };
  //document.querySelector('input[name="rate"]:checked').value;

  return (
    <div className="newReviewForm">
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
          setFieldValue,
          /* and other goodies */
        }) => (
          <form>
            <div class="rating rating-lg">
              {ratings.map((rating) => (
                <input
                  type="radio"
                  name="rating"
                  className={
                    rating === 0 ? "rating-hidden" : "mask mask-star 2"
                  }
                  value={rating}
                  checked={values.rating === rating}
                  onClick={() => setFieldValue("rating", rating)}
                />
              ))}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default NewReviewForm;
