import Alpine from "alpinejs";
import Tagify from "@yaireo/tagify";

Alpine.data("tag_input", () => ({
  init(existingTags) {
    let input = new Tagify(this.$refs.tagInput);
    input.addTags(existingTags);

    input.on("change", (e) => {
      const inputValue = input.value ? input.value : "";
      this.$refs.hiddenTagsInput.value = JSON.stringify(inputValue);
    });
  },
}));