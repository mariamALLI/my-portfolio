import { useState, useEffect } from 'react'

export const LoadingScreen = ({onComplete}) => {
//create a state to keep track of the text
    const [text, setText] = useState("");
// keep track of the full text we want to display
    const fullText = "Welcome to my portfolio!";

// useEffect to update the text every 100ms
useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
        setText(fullText.substring(0, index));
        index++;

        if (index > fullText.length) {
            clearInterval(interval);
            // call the onComplete function after the text is fully displayed to end the loading screen
            setTimeout(() => {
                onComplete();
            }, 1000); // wait for 1 second before calling onComplete
        }
    }, 100);
    return () => clearInterval(interval);
}, [onComplete]);



    return (
        <div className="flex flex-col items-center justify-center bg-black text-gray-100 fixed inset-0 z-50"> 
            <div className="mb-4 text-6xl font-bold">
                <h1>
                   {text}
                    <span className="animate-blink ml-1"> | </span>
                </h1>
            </div>
            
            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-purple-600 shadow-[0_0_15px_#3b82f6] animate-loading-bar ">
                </div>
            </div>  



        </div>
    )
}