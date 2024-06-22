import { useState } from "react";

export default function useAnnouncementHooks() {
    const [imageController, setImageController] = useState({
        toggler: false,
        slide: 1,
    });
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    function imageOnSlide(number: number) {
        setImageController({
            toggler: !imageController.toggler,
            slide: number,
        });
    }
    return {
        imageOnSlide, show1, handleClose1, handleShow1
    }
}