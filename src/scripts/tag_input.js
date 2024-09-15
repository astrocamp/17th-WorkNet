import Alpine from "alpinejs";
import Tagify from "@yaireo/tagify";
// import @yaireo/tagify/dist/tagify.css;

Alpine.data("tag_input", () => ({
  init(existingTags) {
    console.log(this.$el);

    let input = new Tagify(this.$el);
    input.addTags(existingTags);

    input.on("change", (e) => {
      this.$refs.hiddenTagsInput.value = JSON.stringify(input.value);
    });
  },
}));
