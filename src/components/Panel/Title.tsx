interface Props {
  text: string;
}
const Title = ({ text }: Props): JSX.Element => {
  return <h1 className="title-ip-address-tracker">{text}</h1>;
};

export default Title;
