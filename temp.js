let x = "int methodName (int  x  ,int y, int z )";
// let reg = RegExp("(?<returntype>.*) (?<function>.+) ((?<params>.*))");
let reg = RegExp(
  "(?<returntype>\\w+)\\s+(?<function>\\w+)\\s*\\((?<params>[^)]*)\\)"
);

let y = reg.exec(x);
console.log(y.groups);
let z = y.groups.params
  .split(",")
  .map((x) => x.trim().replace("   ", " ").replace("  ", " "));
console.log(z[2].split(" "));
