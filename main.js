(function () {

  function applyReadonly() {
    var roofAgeField = document.getElementById("QQ_Property_AgeofRoof_NUM");
    if (!roofAgeField) return false;

    roofAgeField.readOnly = true;
    roofAgeField.classList.add("readonly");

    console.log("Roof Age set to readonly");
    return true;
  }

  // Try immediately
  if (applyReadonly()) return;

  // Retry until INSTANDA creates the field
  var interval = setInterval(function () {
    if (applyReadonly()) {
      clearInterval(interval);
    }
  }, 300);

})();
