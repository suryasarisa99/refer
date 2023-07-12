import Item from "../components/Item";
import obj from "./obj.json";
import "./w3.css";
export default () => {
  return (
    <div className="lang-page">
      <h1>Jaya Surya</h1>
      {Object.entries(obj).map(([key, value]) => {
        console.log(typeof value);
        return (
          <div>
            <h1 className="title">{key}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: value,
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};
