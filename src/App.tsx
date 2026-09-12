import { Suspense } from "react";
import Hero from "./component/Hero";
import Nav from "./component/Nav";
import Technologies from "./component/Technologies";
import type TechnologiesType from "./type/TechnologiesType";

const fetchTechnologies = async (): Promise<TechnologiesType[]> => {
  const response = await fetch("/data/technologies.json");
  return response.json();
};

const technologiesPromise = fetchTechnologies();

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Suspense fallback={<p>Loading technologies...</p>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
    </>
  );
}

export default App;
