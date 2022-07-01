var shuffSortObj = (function shuffleAndSort() {
  const tilesArr = [
    { text: 1, class: "colorGrp1" },
    { text: 2, class: "colorGrp2" },
    { text: 3, class: "colorGrp3" },
    { text: 4, class: "colorGrp2" },
    { text: 5, class: "colorGrp3" },
    { text: 6, class: "colorGrp4" },
    { text: 7, class: "colorGrp4" },
    { text: 8, class: "colorGrp1" },
    { text: 9, class: "colorGrp3" },
  ];

  function shuffle() {
    let ctr = tilesArr.length;
    let temp; // temporary value
    let index;

    // while the array has items in it
    while (ctr > 0) {
      // Fisher-Yates Algorithm -->
      // Choose a random index
      index = Math.floor(Math.random() * ctr); // Generate random number between 0 and how many items in array
      // decrease ctr value by 1
      ctr--;
      // SWAPPING last element
      temp = tilesArr[ctr]; // targetting random index position
      tilesArr[ctr] = tilesArr[index]; // take array at random index and swap for index of the loop
      tilesArr[index] = temp; // Putting temp value into index position
      // <----
    }
    render(tilesArr);
  }

  // sort
  function sortArr() {
    tilesArr.sort(function (x, y) {
      return x.text - y.text;
    });
    render(tilesArr);
  }
  // render
  function render(tilesArr) {
    document.getElementById("grid").innerHTML = "";
    for (var i = 0; i < tilesArr.length; i++) {
      var card = document.createElement("div");
      var value = document.createElement("div");
      card.className =
        "col-md-4 col-sm-4 col-xs-12 square card " + tilesArr[i].class;
      value.className = "value";

      value.innerHTML = tilesArr[i].text;
      card.appendChild(value);

      document.getElementById("grid").appendChild(card);
    }
  }
  return {
    shuffle,
    sortArr,
  };
})();
function load() {
  shuffSortObj.sortArr();
}
window.onload = load;
