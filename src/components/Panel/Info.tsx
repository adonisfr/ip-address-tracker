interface Props {
  title: string;
  text: string;
  separator?: boolean;
}

const Info = ({ title, text, separator = true }: Props): JSX.Element => {
  return (
    <div className="panel-info-ip">
      <h1>{title}</h1>
      <span>{text}</span>
      {separator && <div className="separator" />}
    </div>
  );
};

export default Info;
