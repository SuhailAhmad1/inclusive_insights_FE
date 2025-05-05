import { useEffect } from "react";
import Hero from "./Hero";
import HowTo from "./HowTo";
import SubmitForm from "./SubmitSection";

export default function Submission() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <HowTo />
      <SubmitForm />
    </>
  );
}
