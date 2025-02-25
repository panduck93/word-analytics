import SecondTitle from "./SecondTitle";

type Props = {
  stats: any;
};

export default function Stats({ stats }: Props) {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} type="Words" />
      <Stat number={stats.numberOfCharacters} type="Characters" />
      <Stat number={stats.instagramCharactersLeft} type="Instagram" />
      <Stat number={stats.facebookCharactersLeft} type="Facebook" />
    </section>
  );
}

type StatProp = {
  number: number;
  type: string;
};

function Stat({ number, type }: StatProp) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>

      <SecondTitle>{type}</SecondTitle>
    </section>
  );
}
