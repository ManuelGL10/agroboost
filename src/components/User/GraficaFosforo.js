import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const GraficaFosforo = ({ fosforo }) => {
  // Definir el color basado en el valor de fosforo
  let color;
  if (fosforo >= 0 && fosforo < 50) {
    color = "#FFC107";
  } else if (fosforo => 50 && fosforo <= 60) {
    color = "#4CAF50";
  } else {
    color = "#FF6347";
  }

  return (
    <div className="flex flex-col bg-white w-50 h-50 mr-4 mt-4 p-2">
      <div className="flex items-center justify-center h-52 relative">
        <CircularProgressbar
          value={fosforo}
          text={`${fosforo}`}
          strokeWidth={8}
          styles={buildStyles({
            textSize: "25px",
            textColor: color,
            pathColor: color,
            trailColor: "#d6d6d6",
          })}
        />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center text-lg font-bold mb-10" style={{ color }}>
          ppm
        </div>
      </div>
      <h3 className="flex items-center justify-center font-bold mb-2 ml-2 text-[#4D7A7D]">Fósforo</h3>
    </div>
  );
};

export default GraficaFosforo;
