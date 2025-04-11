import React from 'react';
import type { ButtonHTMLAttributes } from 'react';
import '@/styles/components/form.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button = ({
  type = 'button',
  variant = 'primary',
  children,
  className = '',
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`form-button form-button--${variant} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
