import { useEffect,useRef,useState } from "react"
import canvasImages from "./canvasimages"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


function Canvas({details}) { // Note the capital C\
    
    const {startIndex,numImages,duration,size,top,left,zIndex} = details; //destructuring values from data.js
    const [index,setIndex] = useState({value:details.startIndex}); //indicates which image to display 
    //isme 0 se 149 tak ki images chala rahe hain idhar value 0 se 149 tak jayega
    const canvasRef = useRef(null);

    useGSAP(() => {
        gsap.to(index,{
            value:startIndex + numImages-1 ,
            duration: duration,
            repeat: -1,
            ease: "linear",
            onUpdate: () => {
                setIndex({value:Math.round(index.value)})
            }
        })
    },[])
    useEffect(() => {
        const scale = window.devicePixelRatio; 
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d'); //drawing tool is ctx
        const img = new Image();
        img.src = canvasImages[index.value];
        img.onload = () => {
            canvas.width = canvas.offsetWidth * scale;
            canvas.height = canvas.offsetHeight * scale;
            canvas.style.width = canvas.offsetWidth + 'px';
            canvas.style.height = canvas.offsetHeight + 'px';
            ctx.scale(scale,scale);
            ctx.drawImage(img, 0, 0,canvas.offsetWidth,canvas.offsetHeight);
        };
    },[index]);

    return (
    <canvas 
            data-scroll
            data-scroll-speed={Math.random().toFixed(2)}
            style={{width:`${size *1.8}px`,height:`${size *1.8}px`,top:`${top}%`,left:`${left}%`,zIndex:`${zIndex}`}}
            ref={canvasRef} 
            id="canvas"
            className="absolute"
            >
        </canvas>
    )
}

export default Canvas 
