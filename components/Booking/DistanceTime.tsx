import { DirectionDataContext } from "@/context/DirectionDataContext";
import React, { useContext } from "react";

function DistanceTime() {
  const { directionData, setDirectionData } = useContext(DirectionDataContext);

  return (
    directionData?.routes && (
      <div className="bg-[#009494] p-3 rounded-md">
        <h2 className="text-white opacity-80 text-[15px]">
          Duration:{" "}
          <span className="font-bold text-white">
            {(directionData.routes[0].duration / 60).toFixed(2)} Minutes{" "}
          </span>
        </h2>
        <h2 className="text-white opacity-80 text-[15px]">
          Distance:{" "}
          <span className="font-bold mr-3 text-white">
            {(
              directionData.routes[0].distance *
              0.000621371192 *
              1.60934
            ).toFixed(2)}{" "}
            Km
          </span>
        </h2>
      </div>
    )
  );
}

export default DistanceTime;
