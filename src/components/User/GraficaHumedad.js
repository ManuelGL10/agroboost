import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const GraficaHumedad = ({ humedad }) => {
  return (
    <div className='flex flex-col bg-white w-50 h-40 mr-4  p-2'>
      <h3 className='text-lg font-semibold mb-2 ml-2'></h3>
      <div className="flex items-center justify-center h-52">
        <CircularProgressbar
          value={humedad}
          text={`${humedad}%`}
          strokeWidth={8}
          styles={buildStyles({
            textSize: "25px",
            textColor: "#0B9FC1",
            pathColor: "#0B9FC1",
            trailColor: "#d6d6d6",
          })}
        />
        
      </div>
    </div>
  );
};

export default GraficaHumedad;
