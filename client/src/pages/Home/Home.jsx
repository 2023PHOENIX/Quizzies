import { Outlet } from "react-router-dom";
import Sidebar from "../../components/SideBar/SideBar";
import CreateQuiz from "../createQuiz/CreateQuiz";
import { useContext } from "react";
import { formContext } from "../../context/FormProvider";
import UseAuth from "../../services/hooks/UseAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  const isLoggedIn = UseAuth();
  const { showForm, setForm } = useContext(formContext);
  console.log(showForm, "this is from home");
  return (
    isLoggedIn && (
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Outlet />
        {showForm && <CreateQuiz />}
      </div>
    )
  );
};

export default Home;
