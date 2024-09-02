import "htmx.org";
import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

document.addEventListener("load", function () {
  FontAwesome.dom.i2svg();
});
