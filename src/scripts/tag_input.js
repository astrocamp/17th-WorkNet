import Alpine from "alpinejs";
import Tagify from "@yaireo/tagify";
// import @yaireo/tagify/dist/tagify.css;

Alpine.data("tag_input", () => ({
  init() {
    console.log(this.$el);

    new Tagify(this.$el);
  },
}));
