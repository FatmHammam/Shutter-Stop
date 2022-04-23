import styles from './Input.module.scss';

function Input({ leftIcon, rightIcon, extraIcon, placeholder }) {
  return (
    <div className={styles.inputWrapper}>
      {leftIcon}
      {extraIcon}
      <input type="text" className="form-control border-0" placeholder={placeholder} />
      {rightIcon}
    </div>
  );
}

export default Input;
