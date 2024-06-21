import { useState } from "react";

const useAlert = () => {
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [status, setStatus] = useState("danger");
  const [autoHide, setAutoHide] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(5000);
  const setAlert = (status: string, message: string, autoHide: boolean = true, timer: number = 5000) => {
    setStatus(status);
    setMessage(message);
    setShowAlert(true);
    setAutoHide(autoHide);
    setTimer(timer);
  };

  const resetAlert = () => {
    setMessage("");
    setShowAlert(false);
    setStatus("danger");
    setAutoHide(true);
    setTimer(5000);
  };

  return { message, showAlert, status, setAlert, resetAlert, autoHide, timer };
};
export default useAlert;
