const keyContainers = document.querySelectorAll(".keys");

const textArea = document.querySelector(".display textarea");

// console.log(keyContainers[0]);
// console.log(keyContainers[0].children);

keyContainers.forEach(function (key) {
  key.addEventListener("click", function (e) {
    // console.log(e);
    // console.log(e.explicitOriginalTarget);
    // console.log(e.explicitOriginalTarget.value);
    // console.log(e.explicitOriginalTarget.value.toLowerCase());

    if (!e.explicitOriginalTarget.value) return;

    let keyClicked = e.explicitOriginalTarget.value.toLowerCase();

    textArea.value += keyClicked;
  });
});
