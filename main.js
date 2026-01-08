(function () {

  function lockRoofAgeField() {
    var input = document.getElementById("QQ_Property_AgeofRoof_NUM");
    if (!input) return;

    // Visually show readonly
    input.classList.add("readonly");

    // Prevent typing
    input.addEventListener("keydown", prevent, true);
    input.addEventListener("keypress", prevent, true);
    input.addEventListener("keyup", prevent, true);

    // Prevent paste
    input.addEventListener("paste", prevent, true);

    // Prevent mouse changes
    input.addEventListener("mousedown", prevent, true);

    // Prevent value changes from JS typing
    input.value = input.value;

    console.log("Roof Age field locked");
  }

  function prevent(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }

  // Keep enforcing (INSTANDA rebinds input)
  setInterval(lockRoofAgeField, 500);

})();
