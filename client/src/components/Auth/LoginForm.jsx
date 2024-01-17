import styles from "./auth.module.css";

const LoginForm = () => {
  return (
    <div className={styles.formWrapper}>
      <div className={styles.Form}>
        <div className={styles.inputEntry}>
          <div className={styles.inputTitle}>Email</div>
          <input type="text" />
        </div>
        <div className={styles.inputEntry}>
          <div className={styles.inputTitle}>Password</div>
          <input type="password" />
        </div>

        <button className={styles.button}>Log in </button>
      </div>
    </div>
  );
};

export default LoginForm;
