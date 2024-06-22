import React, { useState } from "react";
import { motion } from "framer-motion";
import { showSweetAlert } from "../../utilities/global";

export default function AnimationCard() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [counter, setCounter] = useState(0);
    const texts = [
        "Click Me",
        "Animate?",
        "Catch me!",
        "Gotcha!",
        "Try again!",
        "So close!",
        "Nice try!",
        "Not today!",
        "Almost there!",
    ];
    const getRandomPosition = () => {
        // make the button run away between -300px and -50pc or between 50px and 300
        const range1 = Math.random() >= 0.5 ? 300 : -300;
        const range2 = Math.random() >= 0.5 ? 50 : -50;
        return Math.floor(Math.random() * (range1 - range2 + 1)) + range2;
    };
    const handleHover = () => {
        setPosition({
            x: getRandomPosition(),
            y: getRandomPosition(),
        });

        setCounter((prevCount) => prevCount + 1);
        if (counter === 4) {
            showSweetAlert(
                "Game Over",
                "You hovered 5 times without clicking!",
                "error"
            );            
            setCounter(0);  
        }
    };
    const handleClick = () => {
        showSweetAlert("Good Job", "You Have Won!", "success");
        setCounter(0);
    };
    const getRandomText = () => {
        const randomIndex = Math.floor(Math.random() * texts.length);
        return texts[randomIndex];
    };
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                zIndex: "10"
            }}
        >
            <motion.button
                className="btn btn-danger "
                whileHover={{ scale: 1.0 }}
                onHoverStart={handleHover}
                onClick={handleClick}
                style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    padding: "10px 20px",
                    fontSize: "16px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    x: position.x,
                    y: position.y,
                    transition: "all 0.01s ease",
                }}
            >
                {getRandomText()}
            </motion.button>
        </div>
    );
};
