// components/Button.js
import React from 'react';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'brown', // Default to the brown variant
  size = 'md',
  disabled = false,
}) => {
  // Define Tailwind classes for different styles
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-200';

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantStyles = {
    brown: 'bg-[#A0522D] text-white hover:bg-[#8B4513] focus:ring-[#A0522D]',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-200',
  };

  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'hover:shadow-lg';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles}`}
    >
      {children}
    </button>
  );
};

export default Button;
