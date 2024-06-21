import { useState } from "react";

const useSweetAlert = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [icon, setIcon] = useState<
    "info" | "question" | "warning" | "error" | "success"
  >("warning");
  const [confirmButtonText, setConfirmButtonText] = useState("");
  const [showDenyButton, setShowDenyButton] = useState(false);
  const [denyButtonText, setDenyButtonText] = useState("");
  const [showConfirmAlert, setShowConfirmAlert] = useState(false);
  const [showDenyAlert, setShowDenyAlert] = useState(false);
  const [confirmedTitle, setConfirmedTitle] = useState("");
  const [confirmedText, setConfirmedText] = useState("");
  const [confirmedIcon, setConfirmedIcon] = useState<
    "info" | "question" | "warning" | "error" | "success"
  >("success");
  const [deniedTitle, setDeniedTitle] = useState("");
  const [deniedText, setDeniedText] = useState("");
  const [deniedIcon, setDeniedIcon] = useState<
    "info" | "question" | "warning" | "error" | "success"
  >("error");

  const setSweetAlert = (
    title: string,
    text: string,
    icon: "info" | "question" | "warning" | "error" | "success",
    confirmButtonText?: string,
    showDenyButton?: boolean,
    denyButtonText?: string,
    showConfirmAlert?: boolean,
    showDenyAlert?: boolean,
    confirmedTitle?: string,
    confirmedText?: string,
    confirmedIcon?: "info" | "question" | "warning" | "error" | "success",
    deniedTitle?: string,
    deniedText?: string,
    deniedIcon?: "info" | "question" | "warning" | "error" | "success"
  ) => {
    setTitle(title);
    setText(text);
    setIcon(icon);
    setConfirmButtonText(confirmButtonText || '');
    setShowDenyButton(showDenyButton || false);
    setDenyButtonText(denyButtonText || '');
    setShowConfirmAlert(showConfirmAlert || false);
    setShowDenyAlert(showDenyAlert || false);
    setConfirmedTitle(confirmedTitle || '');
    setConfirmedText(confirmedText || '');
    setConfirmedIcon(confirmedIcon || 'error');
    setDeniedTitle(deniedTitle || '');
    setDeniedText(deniedText || '');
    setDeniedIcon(deniedIcon || 'error');
  };

  const resetSweetAlert = () => {
    setTitle("");
    setText("");
    setIcon("warning");
    setConfirmButtonText("");
    setShowDenyButton(true);
    setDenyButtonText("");
    setShowConfirmAlert(true);
    setShowDenyAlert(true);
    setConfirmedTitle("");
    setConfirmedText("");
    setConfirmedIcon("success");
    setDeniedTitle("");
    setDeniedText("");
    setDeniedIcon("error");
  };

  return {
    title,
    text,
    icon,
    confirmButtonText,
    showDenyButton,
    denyButtonText,
    showConfirmAlert,
    showDenyAlert,
    confirmedTitle,
    confirmedText,
    confirmedIcon,
    deniedTitle,
    deniedText,
    deniedIcon,
    setSweetAlert,
    resetSweetAlert,
  };
};

export default useSweetAlert;
//     function handleDeleteSweetAlert() {
//       setSweetAlert(
//         "Delete Company",
//         "Are you sure you want to delete this Company?",
//         "warning",
//         "Delete",
//         true,
//         "Don't Delete",
//         true,
//         true,
//         "Deleted!",
//         "Company has been deleted.",
//         "success",
//         "Denied!",
//         "You cancelled the deletion.",
//         "error"
//       );
//     }