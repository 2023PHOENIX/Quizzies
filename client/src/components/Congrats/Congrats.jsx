import styles from "./congrats.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import charmCross from "../../assets/charm_cross.svg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { formContext } from "../../context/FormProvider";
const Congrats = ({ url }) => {
  const { showForm, setForm } = useContext(formContext);

  const navigate = useNavigate();
  const containerId = "congrats";
  const notify = () =>
    toast.success("Congratulations! You did it!", { containerId });

  const CopyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      console.log("Text copied");
      notify();
    } catch (e) {
      console.log(e);
    }
  };
  // TODO: fix the toast position
  return (
    <div className={styles.wrapper}>
      <div className={styles.charmCross}>
        <img src={charmCross} onClick={() => setForm(!showForm)} />
      </div>
      <div className={styles.headingCongrats} id={containerId}>
        Congrats your Quiz is Published!
      </div>

      <div className={styles.linkContainer}>{url} </div>

      <button className={styles.share} onClick={CopyToClipBoard}>
        Share
      </button>
    </div>
  );
};

export default Congrats;
