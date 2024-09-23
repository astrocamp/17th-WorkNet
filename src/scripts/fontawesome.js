import Alpine from "alpinejs";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {
  faThumbsDown as fasThumbsDown,
  faThumbsUp as fasThumbsUp,
  faBell as fasBell,
  faHeart as fasHeart,
  faUser as fasUser,
  faBriefcase as fasBriefcase,
  faCaretDown as fasCaretDown,
  faStar as fasStar,
  faLocationDot as fasLocationDot,
  faMagnifyingGlass as fasMagnifyingGlass,
  faSackDollar as fasSackDollar,
  faPen as fasPen,
  faUserCircle as fasUserCircle,
  faTrashCan as fasTrashCan,
  faPlus as fasPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faThumbsDown as farThumbsDown,
  faThumbsUp as farThumbsUp,
  faBell as farBell,
  faHeart as farHeart,
  faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";

library.add(
  fasThumbsDown,
  farThumbsDown,
  fasThumbsUp,
  farThumbsUp,
  farBell,
  fasBell,
  fasHeart,
  farHeart,
  fasUser,
  fasCaretDown,
  fasStar,
  fasLocationDot,
  fasMagnifyingGlass,
  fasSackDollar,
  fasPen,
  fasUserCircle,
  farStar,
  fasTrashCan,
  fasPlus,
  fasBriefcase,
);
dom.i2svg();

Alpine.data("reactions_post", () => ({
  init() {
    dom.i2svg();
  },
}));

Alpine.data("company_favorite", () => ({
  init() {
    dom.i2svg();
  },
}));

Alpine.data("job_favorite", () => ({
  init() {
    dom.i2svg();
  },
}));
