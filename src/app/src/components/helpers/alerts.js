import Swal from "sweetalert2";

module.exports = {
  successAlert: function () {
    Swal.fire("Registro", "Guardado Exitosamente!", "success");
  },
};
