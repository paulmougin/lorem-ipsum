import Description from "./Description";
import Title from "./Title";

const Content = (props) => {
  return (
    <div className="content">
      <Title name={props.title} />
      <Description text={props.description} />
    </div>
  );
};

export default Content;
