import React from "react";

import { Main } from "../../components/sections/main/Main";
import { Info } from "../../components/sections/info/Info";
import { Relax } from "../../components/sections/relax/Relax";
import { Steps } from "../../components/sections/steps/Steps";
import { Footer } from "../../components/sections/footer/Footer";
import { Header } from "../../components/sections/header/Header";
import { Download } from "../../components/sections/download/Download";
import { Property } from "../../components/sections/property/Property";
import { VicTimes } from "../../components/sections/vicTimes/VicTimes";
import { PriceList } from "../../components/sections/priceList/PriceList";
import { Protected } from "../../components/sections/protected/Protected";

export const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <Steps />
      <VicTimes />
      <Protected />
      <Property />
      <Download />
      <PriceList />
      <Relax />
      <Info />
      <Footer />
    </>
  );
};
