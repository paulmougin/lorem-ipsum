import "./App.css";
import Content from "./components/Content";

const App = () => {
  return (
    <div className="block-content">
      <Content
        title="Pharetra Cras"
        description="Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus."
      />
      <Content
        title="Euismod Inceptos"
        description="Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis."
      />
    </div>
  );
};

export default App;
