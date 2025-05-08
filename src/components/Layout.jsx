import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";

const Layout = () => {
  return (
    <>
      <AppBar />
      <main style={{ padding: "80px" }}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
