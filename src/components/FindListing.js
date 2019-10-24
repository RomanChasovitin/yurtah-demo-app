import React from "react";
import { Formik, Form } from "formik";
import { connect } from "react-redux";

import { getListings } from "../actions";

import LISTING_VALIDATION_SCHEMA from "../yup/listing";

const initialValues = {
  count: 0
};

const FindListing = ({ onGetListings }) => {
  const submitForm = ({ count }) => {
    onGetListings(count);
  };

  return (
    <div className="find-listing">
      <Formik
        validationSchema={LISTING_VALIDATION_SCHEMA}
        initialValues={initialValues}
        onSubmit={submitForm}>
        {({ errors, touched, values, handleChange, handleBlur, isValid }) => (
          <Form className="find-listing__form">
            <input
              type="number"
              className="find-listing__input"
              value={values.count}
              onChange={handleChange}
              name="count"
              onBlur={handleBlur}
            />
            {errors.count && touched.count ? (
              <span className="find-listing__error">{errors.count}</span>
            ) : null}
            <button type="submit" className="find-listing__button" disabled={!isValid}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onGetListings: count => dispatch(getListings(count))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(FindListing);
