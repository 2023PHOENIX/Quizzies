import { toast } from "react-toastify";
import styles from "./auth.module.css";
import { login } from "../../services/api/userApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const { data } = await login(userInfo);
      console.log(data);
      if (data?.token) {
        console.log("token recieved", data.token);
        localStorage.setItem("token", data.token);
        toast.success("successfully logged in");
        navigate("/dashboard");
      } else {
        toast.error("something went wrong");
      }
    } catch (e) {
      console.error(e);
      toast.error(e.response.data.message);
    }
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.Form}>
        <div className={styles.inputEntry}>
          <div className={styles.inputTitle}>Email</div>
          <input
            type="text"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputEntry}>
          <div className={styles.inputTitle}>Password</div>
          <input
            type="password"
            name="password"
            value={userInfo.password}
            onChange={handleChange}
          />
        </div>

        <button className={styles.button} onClick={handleSubmit}>
          Log in{" "}
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
