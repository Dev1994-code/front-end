import { Layout } from "antd";
import AppHeader from "../components/Header";
import "../assets/home.css";
import "antd/dist/antd";
import Landing from "./Landing";
import { Footer } from "antd/es/layout/layout";
import AppFooter from "../components/Footer";

const { Header, Content } = Layout;

const Home = () => {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content className="mt-10">
        <Landing />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
};
export default Home;
