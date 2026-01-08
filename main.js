alert("External INSTANDA JS loaded");

(function () {
  console.log("INSTANDA external JS loaded");

  function waitForElement(selector, callback) {
    var observer = new MutationObserver(function () {
      var el = document.querySelector(selector);
      if (el) {
        callback(el);
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // Example: hide Name Insured question
  waitForElement('[data-question-id="NameInsured"]', function (el) {
    el.style.display = "none";
  });

})();
//
var roofAgeField = document.getElementById("QQ_Property_AgeofRoof_NUM");
if (roofAgeField) {
    roofAgeField.readOnly = true;
    roofAgeField.classList.add("readonly");
}
