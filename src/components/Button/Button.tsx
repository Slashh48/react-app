interface Props {
  children: string;
  color?: "primary" | "secondary" | "warning" | "info";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "warning" }: Props) => {
  return (
    <div>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
