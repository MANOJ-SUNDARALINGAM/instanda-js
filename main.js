(function () {
  console.log("INSTANDA main.js loaded");

  function setRoofAgeReadonly() {
    var input = document.getElementById("QQ_Property_AgeofRoof_NUM");
    if (!input) return;

    // Apply readonly
    input.readOnly = true;
    input.setAttribute("readonly", "readonly");
    input.classList.add("readonly");
  }

  // Run once after a short delay
  setTimeout(setRoofAgeReadonly, 1500);

  // Keep enforcing because INSTANDA / Knockout re-renders
  setInterval(setRoofAgeReadonly, 500);

})();
