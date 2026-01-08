(function () {

  function makeRoofAgeReadonly() {
    var roofAgeField = document.getElementById("QQ_Property_AgeofRoof_NUM");
    if (roofAgeField) {
      roofAgeField.readOnly = true;
      roofAgeField.classList.add("readonly");
      console.log("Roof Age field set to readonly");
      return true;
    }
    return false;
  }

  // Try immediately
  if (makeRoofAgeReadonly()) return;

  // Retry until element appears
  var interval = setInterval(function () {
    if (makeRoofAgeReadonly()) {
      clearInterval(interval);
    }
  }, 300);

})();
