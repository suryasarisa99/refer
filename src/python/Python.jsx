import Item from "../components/Item";
import lists from "./lists.json";
import strings from "./strings.json";
import functions from "./functions.json";
import dictinory from "./dictionary.json";
import sets from "./sets.json";
import random from "./random.json";
import numpy from "./numpy.json";
export default () => {
  return (
    <div className="lang-page">
      <Item item="String Methods" lang="python" data={strings} />
      <Item item="List Methods" lang="python" data={lists} />
      <Item item="Functions" lang="python" data={functions} />
      <Item item="Dictinory Methods" lang="python" data={dictinory} />
      <Item item="sets Methods" lang="python" data={sets} />
      <Item item="random Methods" lang="python" data={random} />
      <Item item="numpy Methods" lang="python" data={numpy} />
    </div>
  );
};
