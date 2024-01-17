import { Outlet } from "react-router-dom";
import Sidebar from "../../components/SideBar/SideBar";

const Home = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <Outlet />
    </div>
  );
};

export default Home;
