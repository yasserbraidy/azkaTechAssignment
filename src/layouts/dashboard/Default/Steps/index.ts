import React from "react";

// import { ShepherdOptionsWithType } from "react-shepherd";

//   // shepherd
// const Steps: any = [
//     {
//         title: "<h4>Menu</h4>",
//         text: '<p className="mb-0">Check the content under Menu Style. Click to view all oavailable Menu Style options for you.</p>',
//         attachTo: { element: ".sidebar ", on: "right" },
//         buttons: [
//         {
//             type: "next",
//             text: "Next",
//         },
//         ],
//         when: {
//         show: () => {
//             const shepherd = document.querySelector(".shepherd-modal-overlay-container") as Element;
//             shepherd.classList.add("shepherd-modal-is-visible");
//         },
//         cancel: () => closeTour(),
//         },
//     },
//     {
//         title: "<h4>Live Customizer</h4>",
//         text: '<p className="mb-0">Transform the entire look, color, style and appearance of using Live Customizer settings. Change and copy the settings from here.</p>',
//         attachTo: { element: ".btn-setting", on: "left" },
//         buttons:
//             [
//                 {
//                     type: "back",
//                     classes: "shepherd-button-secondary",
//                     text: "Back",
//                 },
//                 {
//                     action: function(this: any) {
//                         sessionStorage.setItem("tour", "true");
//                         return this.next();
//                     },
//                     text: "Done",
//                 },
//             ],
//         when: {
//             cancel: () => closeTour(),
//         },
//     },
// ];
// const closeTour = () => {
//     sessionStorage.setItem("tour", "true");
// };
// export const tourOptions = {
//     defaultStepOptions: {
//         cancelIcon: {
//         enabled: true,
//         },
//     },
//     when: {
//         cancel: function () {},
//     },
// };
// export default Steps;