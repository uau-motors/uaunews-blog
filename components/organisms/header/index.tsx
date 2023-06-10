import Toolbar from "@molecules/toolbar";
import DrawerSidebar from "@organisms/drawer-sidebar";
import MiddleHeader from "@molecules/middle-header";
import NavbarHeader from "@molecules/navbar-header";
import NotNews from "@molecules/hot-news";

const Header = () => {
  return (
    <header id="header">
      <Toolbar />
      <MiddleHeader />
      <NavbarHeader />
      <NotNews />
      <DrawerSidebar />
    </header>
  );
};

export default Header;
