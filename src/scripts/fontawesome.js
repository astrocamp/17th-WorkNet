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

library.add(fasThumbsDown, farThumbsDown, fasThumbsUp, farThumbsUp);
dom.i2svg();

Alpine.data("reactions_post", () => ({
  init() {
    dom.i2svg();
  },
}));
