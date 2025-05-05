import { useEffect } from "react";
import Hero from "./Hero";
import Main from "./Main";
export default function Publications() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <Main />
    </>
  );
}
