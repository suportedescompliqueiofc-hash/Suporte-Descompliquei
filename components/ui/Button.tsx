import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
  href?: string; // If href is provided, it acts as a link
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '', 
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-orange text-white hover:bg-orange-600 shadow-[0_0_20px_rgba(255,111,32,0.3)] hover:shadow-[0_0_30px_rgba(255,111,32,0.5)] border border-transparent",
    secondary: "bg-white text-brand-black hover:bg-gray-100 border border-transparent",
    outline: "bg-transparent border border-brand-orange text-brand-orange hover:bg-brand-orange/10"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const classes = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? "_blank" : "_self"} rel={href.startsWith('http') ? "noopener noreferrer" : ""}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};