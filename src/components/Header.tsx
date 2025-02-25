import MainTitle from "./MainTitle";
import Background from "./Background";

export default function Header() {
  return (
    <header>
      <Background />

      <MainTitle>
        Word<span className="first-heading--thin">Analytics</span>
      </MainTitle>
    </header>
  );
}
