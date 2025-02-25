type Props = {
  children: React.ReactNode;
};
export default function SecondTitle({ children }: Props) {
  return <h2 className="second-heading">{children}</h2>;
}
