import Item from "../components/Item";
// import list from "./list.json";
import hooks from "./hooks.json";
export default () => {
  return (
    <div className="lang-page">
      <Item item="Hooks" lang="react" data={hooks} />
    </div>
  );
};
