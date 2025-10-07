import { useLoaderData } from "react-router-dom";
import AllApps from "../../components/AllApps/AllApps";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner />
      <AllApps data={data} />
    </div>
  );
};

export default Home;
