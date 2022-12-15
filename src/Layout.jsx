import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

const Layout = () => {

  return (
    <>
      <header>
        <Header />
      </header>
      <main className='main'>
        <Outlet />
      </main>
    </>
  )
};

export default Layout;