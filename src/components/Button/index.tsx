import { Button_ } from './button';

interface ButtonProps {
  // propriedades
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button_ {...props}>
      {/* componente */}
      {children}
    </Button_>
  );
};

export default Button;
