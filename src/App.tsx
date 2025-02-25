import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Textarea from "./components/Textarea";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

function App() {
  const [stats, setStats] = useState({
    numberOfWords: 0,
    numberOfCharacters: 0,
    instagramCharactersLeft: 280,
    facebookCharactersLeft: 2200,
  });

  return (
    <>
      <Header />

      <Main>
        <Textarea setStats={setStats} />
        <Stats stats={stats} />
      </Main>

      <Footer />
    </>
  );
}

export default App;
