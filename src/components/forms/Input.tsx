import React from 'react'
import '@/styles/components/form.scss';


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  register?: any //props de react-hook-form (manejador de forms)
  error?: string;
  hint?: string; //texto opcionar que aparece debajo del input
}

export const Input = ({ label, name, register, error, hint, id, ...rest }: InputProps) => {
  const inputId = id || name;

  return (
    <div className='form-group'>
      <label
        htmlFor={inputId}
        className='form-label'
      >
        {label}
      </label>
      <input
        id={inputId}
        name={name}
        aria-invalid={`${!error}`}
        aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
        className='form-input'
        {...(register ? register(name) : {})}
        {...rest}
      />
      {error && (
        <p
          id={`${inputId}--error`}
          className='form-error'
        >
          {error}
        </p>
      )}
      {!error && hint && (
        <small id={`${inputId}--hint`}
          className='form-hint'
        >
          {hint}
        </small>
      )}
    </div>
  )
}

