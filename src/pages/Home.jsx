import { Layout } from "antd";
import AppHeader from "../components/Header";
import "../assets/home.css";
import "antd/dist/antd";
import { Footer } from "antd/es/layout/layout";
import AppFooter from "../components/Footer";
import { Outlet } from "react-router-dom";

const { Header } = Layout;

const Home = () => {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Outlet />
      <Footer id="footer">
        <AppFooter />
      </Footer>
    </Layout>
  );
};
export default Home;

{
  /* <Content className="mt-10">
  <Landing />
</Content>; */
}
