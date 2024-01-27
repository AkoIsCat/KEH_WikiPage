import { ButtonProps } from 'types/types';

const Button = ({ title, onClick, type }: ButtonProps) => {
  return (
    <button
      className="w-btnsize h-myHeight rounded-myRadius border-none m-2.5 text-mysize bg-btncolor hover:bg-hovercolor outline-none	"
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
