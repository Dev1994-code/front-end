import { Button, Flex } from "antd";
import { Link as RouterLink } from "react-router-dom";
import { useCookies } from "react-cookie";

const Btn = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const LogOut = () => {
    setCookies("access_token", "");
    window.location.reload();
  };
  return (
    <Flex gap="small" align="flex-start" vertical>
      <Flex gap="large">
        {!cookies.access_token ? (
          <>
            <RouterLink to="/login">
              <Button type="primary">Login</Button>
            </RouterLink>
            <RouterLink to="/signup">
              <Button type="primary" className="ml-4">
                Sign up
              </Button>
            </RouterLink>
          </>
        ) : (
          <Button type="primary" onClick={LogOut} className="ml-4">
            logOut
          </Button>
        )}
      </Flex>
    </Flex>
  );
};
export default Btn;
