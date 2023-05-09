import { Input } from "antd-mobile";
import { useEffect } from "react";

const HomePage: React.FC = () => {
  useEffect(() => {
    console.log(process.env);
  }, []);
  return <div>HomePage</div>;
};

export default HomePage;
