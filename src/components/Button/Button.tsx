import styles from "./Button.module.css";

interface Props {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <div>
      <button type="button" className={styles.button} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
