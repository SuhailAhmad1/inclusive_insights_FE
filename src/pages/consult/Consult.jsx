import { useEffect } from "react";
import Hero from "./Hero";
import Expertise from "./Expertise";
import Process from "./Process";
import Contact from "./Contact";

export default function Consult() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <Expertise />
      <Process />
      <Contact />
    </>
  );
}
