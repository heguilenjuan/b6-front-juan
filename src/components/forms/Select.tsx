import React from 'react';
import '@/styles/components/form.scss';

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Option[];
  register?: any;
  error?: string;
  hint?: string;
}

export const Select = ({
  label,
  name,
  options,
  register,
  error,
  hint,
  id,
  ...rest
}: SelectProps) => {
  const selectId = id || name;

  return (
    <div className="form-group">
      <label htmlFor={selectId} className="form-label">
        {label}
      </label>
      <select
        id={selectId}
        className={`form-select ${error ? 'has-error' : ''}`}
        aria-invalid={!!error}
        aria-describedby={
          error ? `${selectId}-error` : hint ? `${selectId}-hint` : undefined
        }
        {...(register ? register(name) : {})}
        {...rest}
      >
        <option value="">Seleccionar...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error ? (
        <p id={`${selectId}-error`} className="form-error">
          {error}
        </p>
      ) : (
        hint && (
          <p id={`${selectId}-hint`} className="form-hint">
            {hint}
          </p>
        )
      )}
    </div>
  );
};
