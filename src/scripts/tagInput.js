import Alpine from "alpinejs";
import Tagify from "@yaireo/tagify";

Alpine.data("tag_input", () => ({
  init(existingTags) {
    let input = new Tagify(this.$el);
    input.addTags(existingTags);

    input.on("change", () => {
      this.$refs.hiddenTagsInput.value = JSON.stringify(input.value);
    });
  },
}));
