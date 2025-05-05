import { useEffect } from "react";
import About from "./About";
import Hero from "./Hero";
import Mission from "./Mission";
import WhatNew from "./WhatNew";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <Hero />
      <About />
      <Mission />
      {/* <WhatNew /> */}
    </div>
  );
}

export default Home;
