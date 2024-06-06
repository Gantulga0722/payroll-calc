import { Children } from "react";
import { Header } from "../header/Header";
import { SideMenu } from "../sideMenu/SideMenu";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="flex">
        <SideMenu />
        {children}
      </div>
    </>
  );
};

export default Layout;
