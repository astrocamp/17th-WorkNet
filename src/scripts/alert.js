import Swal from "sweetalert2";
import Alpine from "alpinejs";

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

export const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger",
  },
  buttonsStyling: false,
  showCancelButton: true,
  confirmButtonText: "確認",
  cancelButtonText: "取消",
  reverseButtons: true,
  title: "",
  text: "此動作無法還原",
});

Alpine.data("confirm_msg", () => ({
  confirmDelete(msg) {
    swalWithBootstrapButtons
      .fire({
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
