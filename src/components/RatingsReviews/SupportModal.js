import React from "react";
import { useEffect } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { setSupportMessage, setSupportShown } from "../../reducers/modalSlice";
import CustomInput from "./CustomInputs/CustomInput";
import { string, object } from "yup";
import { Formik } from "formik";
import CustomBody from "./CustomInputs/CustomBody";
import BigButton from "../sharedComponents/BigButton";

const SupportModal = () => {
  const dispatch = useDispatch();
  const { message, isShown } = useSelector(
    (state) => state.modalReducer.support
  );

  var close = () => {
    dispatch(setSupportMessage({ message: "" }));
    dispatch(setSupportShown(false));
  };
  var handleClose = (ev) =>
    ev.target && Array.from(ev.target.classList).includes("close") && close();
  useEffect(() => {
    window.addEventListener(
      "keyup",
      (ev) => ev.key === "Escape" && isShown && close()
    );
  }, []);

  const initialValues = {
    body: "",
    name: "",
    email: "",
  };

  let reviewSchema = object().shape({
    body: string().required().min(50).max(1000),
    name: string().required(),
    email: string().email().required(),
  });

  return (
    isShown && (
      <div
        className="top-0 flex items-center justify-center w-full h-full bg-opacity-50 close bg-base-100 SupportModal hover:cursor-pointer"
        onClick={handleClose}
      >
        <div
          className={
            (isShown ? "active " : "") +
            "m-10 close SupportModalContent bg-base-100 hover:cursor-default max-w-[800px] min-w-[600px] min-h-[70%]"
          }
        >
          <span className="fixed closePhotoModal ">
            <AiOutlineCloseSquare className="fixed w-[25px] h-[25px] hover:cursor-pointer closePhotoButton top-2 right-2 bg-base-100" />
          </span>
          <div>
            <Formik
              validationSchema={reviewSchema}
              initialValues={initialValues}
              onSubmit={(values, { errors, setSubmitting, resetForm }) => {
                setSubmitting(true);
                apiLocalPostRequest("/support", formData)
                  .then(async (res) => {
                    console.log(res);
                    if (res.status === 201) {
                      resetForm();
                      close();
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
                <form
                  className="flex flex-col items-center supportForm"
                  onSubmit={handleSubmit}
                >
                  <h3 className="text-2xl font-bold text-center">
                    How can we help you today?
                  </h3>
                  <CustomBody label="Body: " name="body" noCrap={true} />
                  <CustomInput
                    placeholder="Jackson Brown"
                    label="Name: "
                    privacy="Please use your full name so we can look up your order"
                    name="name"
                  />
                  <CustomInput
                    placeholder="jackson11@email.com"
                    label="Email:"
                    privacy="Please enter a valid email address."
                    type="email"
                    name="email"
                  />
                  <BigButton
                    classes="w-fit"
                    type="submit"
                    text={"Submit Request"}
                    disabled={isSubmitting}
                    module="Ratings"
                  />
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    )
  );
};

export default SupportModal;
