(function () {
  console.log("INSTANDA main.js active");

  var ROOF_AGE_ID = "QQ_Property_AgeofRoof_NUM";

  function isRoofAgeField(target) {
    return target && target.id === ROOF_AGE_ID;
  }

  // Block keyboard input
  document.addEventListener("keydown", function (e) {
    if (isRoofAgeField(e.target)) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }, true);

  // Block typing / knockout updates
  document.addEventListener("input", function (e) {
    if (isRoofAgeField(e.target)) {
      e.target.value = e.target.value;
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }, true);

  // Block paste
  document.addEventListener("paste", function (e) {
    if (isRoofAgeField(e.target)) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }, true);

  // Cosmetic readonly (best effort)
  setInterval(function () {
    var el = document.getElementById(ROOF_AGE_ID);
    if (el) {
      el.readOnly = true;
      el.setAttribute("readonly", "readonly");
      el.classList.add("readonly");
    }
  }, 500);

})();
