import Alpine from "alpinejs";

Alpine.data("post_referrer", () => ({
  checkReferrer() {
    if (document.referrer && !document.referrer.includes("edit")) {
      history.back();
    } else {
      window.location.href = "/posts";
    }
  },
}));
