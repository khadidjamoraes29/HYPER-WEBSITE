import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import Carousel from './components/Banners/Carouselhome';
import LogoRow from './components/Banners/marks'; 
import FullScreenImage from './components/Banners/FullScreenImage';
import InfoBar from './components/Banners/InfoBar';
import Footer from './components/Footer/footer';

const VitaminaC = () => <div>Vitamina C</div>;
const Multivitaminico = () => <div>Multivitamínico</div>;
const Massa = () => <div>Ganho de Massa</div>;
const Reposicao = () => <div>Reposição</div>;
const RoupasMasculino = () => <div>Roupas Masculinas</div>;
const RoupasFeminino = () => <div>Roupas Femininas</div>;

const App = () => {
  return (
    <>
    <div>
      <HeaderMenu />
    </div>
    <div style={{width: "100%"}}>
      <Carousel height = '80vh'/>
    </div>
    <div>
      <FullScreenImage src="/images/banner.jpg" />
    </div>
    <div>
      <LogoRow />
    </div>
    <div>
      <InfoBar />
    </div>
    <div>
      <Footer/>
    </div>


      <Routes>
        <Route path="/vitaminas/c" element={<VitaminaC />} />
        <Route path="/vitaminas/multi" element={<Multivitaminico />} />
        <Route path="/hipercaloricos/massa" element={<Massa />} />
        <Route path="/hipercaloricos/reposicao" element={<Reposicao />} />
        <Route path="/roupas/masculino" element={<RoupasMasculino />} />
        <Route path="/roupas/feminino" element={<RoupasFeminino />} />
      </Routes>

    </>
  );
};

export default App;
