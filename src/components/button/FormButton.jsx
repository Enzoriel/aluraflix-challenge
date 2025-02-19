import PropTypes from "prop-types";
import "./FormButton.css";

const FormButton = ({ type, label, onClick = null, disabled = false, buttonType }) => {
  return (
    <button type={type} className={`form-button ${buttonType}`} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

FormButton.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  buttonType: PropTypes.string.isRequired,
};

export default FormButton;
