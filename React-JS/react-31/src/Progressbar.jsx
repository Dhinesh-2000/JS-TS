import React,{useState,useEffect} from "react";

const Progressbar=()=>{
    const [progress,setProgress]=useState(0);
        
    useEffect(()=>{
        if(progress < 100){
            const timer = setTimeout(()=>{
                setProgress(progress + 10);
            })
        }
    })
}