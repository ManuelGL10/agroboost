import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const GraficaNitrogeno = ({ nitrogeno }) => {
  // Definir el color basado en el valor del nitrógeno
  let color;
  if (nitrogeno >= 0 && nitrogeno < 175) {
    color = "#FFC107";
  } else if (nitrogeno => 175 && nitrogeno <= 180) {
    color = "#4CAF50";
  } else {
    color = "#FF6347";
  }

  const valorMaximo = 250; 

  return (
    <div className="flex flex-col bg-white w-50 h-40 mr-4 p-2">
      <div className="flex items-center justify-center h-52 relative">
        <CircularProgressbar
          value={nitrogeno}
          text={`${nitrogeno}`}
          maxValue={valorMaximo}
          strokeWidth={8}
          styles={buildStyles({
            textSize: "25px",
            textColor: color,
            pathColor: color,
            trailColor: "#d6d6d6"
          })}
        />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center text-lg font-bold mb-10" style={{ color }}>
          ppm
        </div>
      </div>
      <h3 className="flex items-center justify-center font-bold mb-2 ml-2 text-[#4D7A7D] h-0">Nitrógeno</h3>
    </div>
  );
};

export default GraficaNitrogeno;
