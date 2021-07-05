const items = [
  "Fire Hydrant",
  "London Bus",
  "Unicorn",
  "Jesse Ditchfield",
  "Ferris Wheel",
  "Fairy Floss",
  "Rubber Duck",
  "Clock",
  "Treasure Chest",
  "Instagram Logo",
  "Tambourine",
  "Spaghetti Bolognese",
  "SPF50+ Sunscreen",
  "Birthday Cake",
  "Butter",
  "Whipped Cream"
];

const relationshipList = ["in a", "on a", "beneath a "];

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

const history = [];
const flickerLimit = 13;
let flickerCount = flickerLimit;

let selectionA = "";
let selectionB = "";
let relationshipSelection = "";

function flicker() {
  const itemA = document.getElementById("itemA");
  const itemB = document.getElementById("itemB");
  const relationship = document.getElementById("relationship");

  selectionA = items.random();
  selectionB = items.random();
  relationshipSelection = relationshipList.random();

  itemA.textContent = selectionA;
  itemB.textContent = selectionB;
  relationship.textContent = relationshipSelection;
}

function onSpacePress() {

	const cycle = setInterval(()=>{
		if(flickerCount > 0){
			flicker();
      flickerCount = flickerCount - 1;
		}else{
      flickerCount = flickerLimit;
      clearInterval(cycle);
      const historyElem = document.getElementById("history");
      history.push(`${selectionA} ${relationshipSelection} ${selectionB}`);
      historyElem.textContent = history.join(", ");
    }
	},150)

}

document.onkeyup = function (e) {
  if (e.key == " ") {
    onSpacePress();
  }
};
