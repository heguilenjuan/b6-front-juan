import React from 'react';
import '@/styles/components/form.scss';


interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  register?: any;
  error?: string;
}

export const Checkbox = ({
  label,
  name,
  register,
  error,
  id,
  ...rest
}: CheckboxProps) => {
  const checkboxId = id || name;

  return (
    <div className="form-group">
      <div className="form-checkbox">
        <input
          type="checkbox"
          id={checkboxId}
          className={`checkbox ${error ? 'has-error' : ''}`}
          {...(register ? register(name) : {})}
          {...rest}
        />
        <label htmlFor={checkboxId}>{label}</label>
      </div>
      {error && (
        <p id={`${checkboxId}-error`} className="form-error">
          {error}
        </p>
      )}
    </div>
  );
};
