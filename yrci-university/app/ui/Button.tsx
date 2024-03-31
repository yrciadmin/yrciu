import { twMerge } from 'tailwind-merge'

interface ButtonProps {
    onClick?: () => void;
    className?: string;
    children: React.ReactNode;
  }
  
  const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
    return (
      <button
        onClick={onClick}
        className={twMerge(`font-bold py-2 px-4 rounded w-6/12 sm:w-44, ${className}`)}
      >
        {children}
      </button>
    );
  };
  
  export default Button;