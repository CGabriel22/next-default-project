import { Example_ } from './example';

interface ExampleProps {
  //propriedades
  color: string;
}

const Example: React.FC<ExampleProps> = ({ children, ...props }) => {
  return (
    <Example_ color={props.color}>
      {/* componente */}
      {children}
    </Example_>
  );
};

export default Example;
