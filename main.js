(function () {
  // Simple console test
  console.log("✅ INSTANDA GitHub JS connection successful at " + new Date().toLocaleTimeString());

  // Optional: temporary visual indicator on the page
  var indicator = document.createElement("div");
  indicator.textContent = "INSTANDA GitHub JS Connected ✅";
  indicator.style.position = "fixed";
  indicator.style.bottom = "10px";
  indicator.style.right = "10px";
  indicator.style.backgroundColor = "#4CAF50";
  indicator.style.color = "#fff";
  indicator.style.padding = "5px 10px";
  indicator.style.borderRadius = "5px";
  indicator.style.zIndex = 9999;
  indicator.style.fontSize = "12px";
  document.body.appendChild(indicator);

  // Remove the indicator after 5 seconds
  setTimeout(function () {
    document.body.removeChild(indicator);
  }, 5000);

})();
