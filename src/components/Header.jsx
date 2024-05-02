// import { Menu, Button } from "antd";

// const AppHeader = () => {
//   return (
//     <div className="container-fluid">
//       <div className="header">
//         <div className="logo">
//           <div className="custom">TRVL</div>
//         </div>
//         <Menu mode="horizontal" defaultSelectedKeys={"1"}>
//           <Menu.Item key="1">home</Menu.Item>
//           <Menu.Item key="2">about</Menu.Item>
//           <Menu.Item key="3">packages</Menu.Item>
//           <Menu.Item key="4">Destination</Menu.Item>
//           <Menu.Item key="5">Contact Us</Menu.Item>
//         </Menu>
//         <div>
//           <Button className="mr-3">Sign up</Button>
//           <Button>Log in</Button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default AppHeader;

import { useState } from "react";

import { Anchor, Drawer, Button } from "antd";

const { Link } = Anchor;

const AppHeader = () => {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <a href="http://google.com">TRVL</a>
        </div>
        <div>
          <Anchor>
            <Link href="#hero" title="Home" className="text-lg" />
            <Link href="#about" title="About" className="text-lg" />
            <Link href="#feature" title="Features" className="text-lg" />
            <Link href="#works" title="How it works" className="text-lg" />
            <Link href="#faq" title="FAQ" className="text-lg" />
            <Link href="#pricing" title="Pricing" className="text-lg" />
            <Link href="#contact" title="Contact" className="text-lg" />
          </Anchor>
        </div>
        <div className="flex gap-7">
          <button className="text-lg">login</button>
          <button className="text-lg">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
