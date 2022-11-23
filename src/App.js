import Header from "./components/Header";
import Mainsearch from "./components/Mainsearch";
import Productlist from "./components/Productlist";

function App() {
  return (
    <>
      {/* <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Routes> */}
      <Header />
      <Mainsearch />
      <Productlist/>
    </>
  );
}

export default App;
