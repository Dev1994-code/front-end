import { Menu, Button } from "antd";

const AppHeader = () => {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <div className="custom">TRVL</div>
        </div>
        <Menu mode="horizontal" defaultSelectedKeys={"1"}>
          <Menu.Item key="1">home</Menu.Item>
          <Menu.Item key="2">about</Menu.Item>
          <Menu.Item key="3">packages</Menu.Item>
          <Menu.Item key="4">Destination</Menu.Item>
          <Menu.Item key="5">Contact Us</Menu.Item>
        </Menu>
        <Button>Sign up</Button>
        <Button>Log in</Button>
      </div>
    </div>
  );
};
export default AppHeader;
