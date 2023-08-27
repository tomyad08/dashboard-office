import CardDepartement from "./CardDepartemen";
import CardDetail from "./CardDetail";
import NavBar from "./NavBar";
import Tabel from "./Tabel";

const Home = () => {
  return (
    <div>
      <NavBar />
      <CardDetail />
      <CardDepartement />
      <Tabel />
    </div>
  );
};
export default Home;
