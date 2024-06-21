export default interface IModal {
    show: boolean;
    onHide: () => void;
    header?: JSX.Element | string;
    body?: JSX.Element | string;
    footer?: JSX.Element | string;
    onConfirm?: () => void;
    confirmButtonText?: string;
//   size?: "sm" | "md" | "lg" | "xl"; //An optional string that represents the size of the modal. The options are "sm", "md", "lg", and "xl".
//   fullscreen?:
//     | true
//     | string
//     | "sm-down"
//     | "md-down"
//     | "lg-down"
//     | "xl-down"
//     | "xxl-down";
//   centered?: boolean; //A boolean that indicates whether the modal should be centered on the screen.
//   backdropClassName?: string; //An optional property that allows you to specify additional CSS classes to be applied to the modal backdrop.closeButton?: boolean; //A boolean indicating whether the modal contains close button at the header
//   animation?: boolean; // An optional property that indicates whether the modal should be animated when it is shown or hidden.

//   dialogClassName?: string; // An optional property that allows you to specify additional CSS classes to be applied to the modal dialog.
//   dialogAs?: React.ElementType; // An optional property that allows you to specify a custom element type to use for the modal dialog. This can be useful if you want to create a custom modal dialog component.
//   scrollable?: boolean; //A boolean that indicates whether the modal should be scrollable if the content overflows.

//   closeButton?: boolean; //A boolean that indicates whether the modal contains close button on the header or not
//   contentClassName?: string; // An optional property that allows you to specify additional CSS classes to be applied to the modal content.
//   closeOnBackdropClick?: boolean; //A boolean that indicates whether the modal should be closed when the user clicks outside of it.
//   closeOnEscape?: boolean; //A boolean that indicates whether the modal should be closed when the user presses the "Escape" key.
//   backdrop?: "static" | true; //A string that represents the type of backdrop to display behind the modal. The options are "static" and true.

}