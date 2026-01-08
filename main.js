<script>
(function() {
    var script = document.createElement("script");
    script.src = "https://manoj-sundaralingam.github.io/instanda-js/main.js";
    script.type = "text/javascript";
    script.defer = true;
    script.onload = function() {
        console.log("✅ INSTANDA successfully loaded main.js from GitHub");
    };
    script.onerror = function() {
        console.error("❌ Failed to load main.js from GitHub");
    };
    document.head.appendChild(script);
})();
</script>
