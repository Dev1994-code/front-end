import { Layout, Menu, theme } from "antd";
const { Header } = Layout;
import AppHeader from "../components/AppHeader";
import "../assets/home.css";
import "antd/dist/antd";

const Home = () => {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
    </Layout>
  );
};
export default Home;
