import styles from "./congrats.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import charmCross from "../../assets/charm_cross.svg";
import { useNavigate } from "react-router-dom";
const Congrats = () => {
  const navigate = useNavigate();
  const containerId = "congrats";
  const notify = () =>
    toast.success("Congratulations! You did it!", { containerId });

  const CopyToClipBoard = async () => {
    const textToCopy = "data need to be saved";

    try {
      await navigator.clipboard.writeText(textToCopy);
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
        <img src={charmCross} onClick={() => navigate(-1)} />
      </div>
      <div className={styles.headingCongrats} id={containerId}>
        Congrats your Quiz is Published!
      </div>

      <div className={styles.linkContainer}> some link </div>

      <button className={styles.share} onClick={CopyToClipBoard}>
        Share
      </button>
      <ToastContainer containerId="congrats" />
    </div>
  );
};

export default Congrats;
