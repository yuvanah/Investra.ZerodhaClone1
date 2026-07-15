import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const navigate = useNavigate();
  const [, , removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}`,
          {},
          {
            withCredentials: true,
          }
        );

        const { status, user } = data;

        if (!status) {
          navigate("/login");
          return;
        }

        setUsername(user);
      } catch (err) {
        navigate("/login");
      }
    };

    verifyCookie();
  }, [navigate]);

  const Logout = () => {
    removeCookie("token");
    navigate("/login");
  };

  return (
    <>
      <TopBar Logout={Logout} Username={username} />
      <Dashboard />
    </>
  );
};

export default Home;