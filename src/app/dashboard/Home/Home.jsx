import CardDepartement from "./CardDepartemen";
import CardDetail from "./CardDetail";
import NavBar from "./NavBar";
import Tabel from "./Tabel";

const Home = () => {
  return (
    <div className="w-5/6">
      <NavBar />
      <CardDetail />
      <CardDepartement />
      <Tabel />
    </div>
  );
};
export default Home;
