import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './inputField.css';


const InputField = ({
  input,
  label,
  type,
  meta: { touched, error },
  ...rest
}) => (
  <Fragment>
    <input
      {...input}
      {...rest}
      type={type}
      placeholder={label}
      className={`form-control my-2 ${touched && error ? 'is-invalid' : ''}`}
    />
    {
      touched && error &&
      <div className="invalid-feedback">
        {error}
      </div>
    }
  </Fragment>
);

InputField.propTypes = {
  input: PropTypes.shape({ name: PropTypes.string, value: PropTypes.string }).isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
};

InputField.defaultProps = {
  label: '',
  type: '',
};

export default InputField;
