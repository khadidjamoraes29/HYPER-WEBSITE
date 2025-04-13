import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import Carousel from './components/Banners/Carouselhome';

const App = () => {
  return (
    <>
    <div>
      <HeaderMenu />
    </div>
    <div style={{ width: "50%", margin: "0 auto" }}>
      <Carousel/>
    </div>
    </>
  );
};

export default App;
