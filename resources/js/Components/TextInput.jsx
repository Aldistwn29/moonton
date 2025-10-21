import { forwardRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const TextInput = forwardRef(function TextInput(
  {
    type = 'text',
    name,
    value,
    defaultValue,
    className = '',
    placeholder,
    variant = 'primary',
    autoComplete,
    required,
    isFocused,
    handleChange,
    onChange,
    ...props 
  },
  ref,
) {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <input
      {...props}
      ref={ref || inputRef}
      type={type}
      name={name}
      value={value}
      defaultValue={defaultValue}
      autoComplete={autoComplete}
      required={required}
      onChange={handleChange || onChange}
      placeholder={placeholder}
      className={`rounded-2xl bg-white text-black py-[13px] px-7 w-full input-${variant} ${className}`}
    />
  );
});

TextInput.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password']),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'error']),
  autoComplete: PropTypes.string,
  required: PropTypes.bool,
  handleChange: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  isFocused: PropTypes.bool,
};

export default TextInput;