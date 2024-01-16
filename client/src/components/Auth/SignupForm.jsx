import styles from "./auth.module.css";

const SignupForm = () => {
  return (
    <div className={styles.Form}>
      <div className={styles.inputEntry}>
        <div className={styles.inputTitle}>Name</div>
        <input type="text" />
      </div>
      <div className={styles.inputEntry}>
        <div className={styles.inputTitle}>Email</div>
        <input type="text" />
      </div>
      <div className={styles.inputEntry}>
        <div className={styles.inputTitle}>Password</div>
        <input type="password" />
      </div>
      <div className={styles.inputEntry}>
        <div className={styles.inputTitle}>Confirm Password</div>
        <input type="password" />
      </div>

      <button className={styles.button}>Sign-Up </button>
    </div>
  );
};

export default SignupForm;
