const items = [
  "Fire Hydrant",
  "London Bus",
  "Unicorn",
  "Jesse Ditchfield",
  "Ferris Wheel",
  "Fairy Floss",
  "Rubber Duck",
];

const relationshipList = ["in a", "on a"];

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

const history = [];

function onSpacePress() {
  const itemA = document.getElementById("itemA");
  const itemB = document.getElementById("itemB");
  const relationship = document.getElementById("relationship");

  const selectionA = items.random();
  const selectionB = items.random();
  const relationshipSelection = relationshipList.random();

  itemA.textContent = selectionA;
  itemB.textContent = selectionB;
  relationship.textContent = relationshipSelection;

  const historyElem = document.getElementById("history");
  history.push(`${selectionA} ${relationshipSelection} ${selectionB}`);
  historyElem.textContent = history.join(", ");
}

document.onkeyup = function (e) {
  console.log(e.key);
  if (e.key == " ") {
    console.log("space");
    onSpacePress();
  }
};
