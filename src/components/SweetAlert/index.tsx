import ISweetAlert from "./interface";
import Swal, { SweetAlertOptions } from "sweetalert2";

export default function SweetAlert(props: ISweetAlert) {

  const options: SweetAlertOptions = {
      title: props.title,
      text: props.text,
      icon: props.icon,
      // confirmButtonColor: "#3085d6",
      showDenyButton: props.showDenyButton,
      showCancelButton: props.showCancelButton,
      denyButtonText: props.denyButtonText,
      backdrop: props.backdrop, //`rgba(60,60,60,0.8)`,
      confirmButtonText: props.confirmButtonText,
      footer: props.footer,
  };

  function confirmedAlert() {
    if (!props.onConfirm)
      return;
    props.onConfirm();

    if (!props.showConfirmAlert)
        return;
    Swal.fire(props.confirmedTitle, props.confirmedText, props.confirmedIcon);

  }
    function deniedAlert() {
        if (!props.showDenyAlert) return;
        if (props.onDeny) {
            props.onDeny();
        }
        Swal.fire(
          props.deniedTitle,
          props.deniedText,
          props.deniedIcon
        );
    }

    function data() {
        Swal.fire(options).then((result) => {

          if (result.isConfirmed) {
              confirmedAlert();
          } else if (result.isDenied) {
              deniedAlert();
              
          }
        });
  }
  
    return (
      <>
        <span onClick={data}>{props.children}</span>
      </>
    );
}