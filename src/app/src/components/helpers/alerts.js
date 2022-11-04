import Swal from "sweetalert2";

export const successAlert = function () {
  Swal.fire("Registro", "Guardado Exitosamente!", "success");
};

export const dialogSuccess = function (message) {
  Swal.fire({
    position: "center",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
};
