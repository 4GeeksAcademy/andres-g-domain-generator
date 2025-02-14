/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["my", "the"];
let adj = ["ugly", "big"];
let noun = ["apple", "ugly"];

let x = 0;
let y = 0;
let z = 0;

for (x; x < pronoun.length; x++) {
  for (y; y < adj.length; y++) {
    for (z; z < noun.length; z++) {
      console.log(pronoun[x] + adj[y] + noun[z] + ".com");
    }
  }
}
