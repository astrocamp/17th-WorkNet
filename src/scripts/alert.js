import Swal from "sweetalert2";
import Alpine from "alpinejs";

// 快閃訊息
export const flashAlert = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1500,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

// 確認刪除訊息
export const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger",
  },
  buttonsStyling: false,
  showCancelButton: true,
  confirmButtonText: "Yes, do it !",
  cancelButtonText: "No, cancel !",
  reverseButtons: true,
});

Alpine.data("confirm_msg", () => ({
  confirmDelete(msg) {
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: msg,
        icon: "warning",
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.$el.submit();
        }
      });
  },
}));

Alpine.data("flash_msg", () => ({
  init() {
    const msg = this.$el.dataset.msg;
    const tag = this.$el.dataset.tag;
    flashAlert.fire({
      icon: tag,
      title: msg,
    });
  },
}));

Alpine.start();
