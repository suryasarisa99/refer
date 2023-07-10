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
      <Item item="String Methods" data={strings} />
      <Item item="List Methods" data={lists} />
      <Item item="Functions" data={functions} />
      <Item item="Dictinory Methods" data={dictinory} />
      <Item item="sets Methods" data={sets} />
      <Item item="random Methods" data={random} />
      <Item item="numpy Methods" data={numpy} />
    </div>
  );
};
