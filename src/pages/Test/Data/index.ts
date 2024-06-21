import Swal from "sweetalert2";

  export function Sweetalert2() {
    Swal.fire({ 
      title: "The Internet?",
      text: "That thing is still around? question",
      backdrop: `rgba(60,60,60,0.8)`,
    });
  }
  export function Sweetalert3() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      backdrop: `rgba(60,60,60,0.8)`,
      footer: '<a href="">Why do I have this issue?</a>',
    });
  }
  export function Sweetalert5() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      backdrop: `rgba(60,60,60,0.8)`,
        confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }
  export function Sweetalert9() {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      denyButtonText: `Don't save`,
      backdrop: `rgba(60,60,60,0.8)`,
      confirmButtonText: "Save",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "<p>Hello world</p>", "info");
      }
    });
  }