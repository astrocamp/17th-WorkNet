import Alpine from "alpinejs";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {
  faThumbsDown as fasThumbsDown,
  faThumbsUp as fasThumbsUp,
  faBell as fasBell,
} from "@fortawesome/free-solid-svg-icons";
import {
  faThumbsDown as farThumbsDown,
  faThumbsUp as farThumbsUp,
  faBell as farBell,
} from "@fortawesome/free-regular-svg-icons";

library.add(
  fasThumbsDown,
  farThumbsDown,
  fasThumbsUp,
  farThumbsUp,
  fasBell,
  farBell
);
dom.i2svg();

Alpine.data("reactions_post", () => ({
  init() {
    dom.i2svg();
  },
}));
