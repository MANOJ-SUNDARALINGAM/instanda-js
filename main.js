(function () {

  function makeReadonly() {
    var el = document.getElementById("QQ_Property_AgeofRoof_NUM");
    if (!el) return;

    el.readOnly = true;
    el.setAttribute("readonly", "readonly");
    el.classList.add("readonly");
  }

  // Run once in case element already exists
  makeReadonly();

  // Observe DOM changes (INSTANDA / Knockout safe)
  var observer = new MutationObserver(function () {
    makeReadonly();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  console.log("INSTANDA readonly observer active");

})();
