import "htmx.org";
import Alpine from "alpinejs";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {
  faThumbsDown as fasThumbsDown,
  faThumbsUp as fasThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faThumbsDown as farThumbsDown,
  faThumbsUp as farThumbsUp,
} from "@fortawesome/free-regular-svg-icons";

window.Alpine = Alpine;

Alpine.start();

library.add(fasThumbsDown, farThumbsDown, fasThumbsUp, farThumbsUp);
document.addEventListener("DOMContentLoaded", () => {
  dom.i2svg();
});

document.body.addEventListener("htmx:afterSwap", () => {
  dom.i2svg();
});
