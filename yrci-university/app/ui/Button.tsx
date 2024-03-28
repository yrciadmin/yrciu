import { useRouter } from 'next/navigation'

interface ButtonProps {
    onClick?: () => void;
    className?: string;
    children: React.ReactNode;
  }
  
  const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
    return (
      <button
        onClick={onClick}
        className={` text-white font-bold py-2 px-4 rounded ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;