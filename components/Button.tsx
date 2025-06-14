
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'; // Added ghost for specific uses
  children: React.ReactNode;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', leftIcon, rightIcon, ...props }) => {
  let baseStyle = 'inline-flex items-center justify-center px-6 py-3 rounded-md font-heading font-semibold text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  if (variant === 'primary') {
    baseStyle += ' bg-exergy-green text-white hover:bg-exergy-green-dark focus:ring-exergy-green';
  } else if (variant === 'secondary') {
    baseStyle += ' bg-exergy-dark-input text-exergy-text-light hover:bg-opacity-80 focus:ring-exergy-green';
  } else if (variant === 'outline') {
    // For Hero Section (dark background)
    baseStyle += ' border-2 border-white text-white hover:bg-white hover:text-exergy-green focus:ring-white';
  } else if (variant === 'ghost') {
    baseStyle += ' text-exergy-text-light hover:text-exergy-green focus:ring-exergy-green bg-transparent';
  }


  return (
    <button className={`${baseStyle} ${className}`} {...props}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
