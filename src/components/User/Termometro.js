import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const GraficaTemperatura = ({ temperatura }) => {
  // Definir el color dependiendo de la temperatura
  let color;
  if (temperatura > 25) {
    // Color rojo para temperaturas altas
    color = "#FF6347"; 
  } else if (temperatura < 0) {
    // Color azul para temperaturas negativas
    color = "#0000FF"; 
  } else {
    // Color azul para temperaturas bajas
    color = "#0B9FC1"; 
  }

  return (
    <div className="flex flex-col bg-white w-50 h-40 mr-4 p-2">
      <h3 className="text-lg font-semibold mb-2 ml-2"></h3>
      <div className="flex items-center justify-center h-52">
        <CircularProgressbar
          value={Math.abs(temperatura)} 
          text={`${temperatura}°C`}
          strokeWidth={8}
          styles={buildStyles({
            textSize: "25px",
            textColor: color, 
            pathColor: color, 
            trailColor: "#d6d6d6",
          })}
        />
      </div>
    </div>
  );
};

export default GraficaTemperatura;
