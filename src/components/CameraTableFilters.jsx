// FilterComponent.js
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineWifi } from "react-icons/ai";

const CameraTableFilters = ({
  selectedStatus,
  cameraData,
  selectedLocation,
  setSelectedLocation,
  setSelectedStatus,
}) => {
  const fetchAllLocations = () => {
    const uniqueLocations = Array.from(
      new Set(
        cameraData
          .filter((item) => item.location.trim() !== "")
          .map((item) => item.location)
      )
    );

    return uniqueLocations;
  };
  return (
    <div className="flex items-center justify-between my-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <CiLocationOn className="mr-[-20px] z-10" />
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="bg-gray-100 rounded-md p-2 pl-8 text-gray-700 focus:outline-none"
          >
            <option value=""> Location</option>
            {fetchAllLocations().map((option) => {
              return <option value={`${option}`}>{option}</option>;
            })}
          </select>
        </div>
        <div className="flex items-center">
          <AiOutlineWifi className="mr-[-20px] z-10" />
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-gray-100 rounded-md p-2 pl-8 text-gray-700 focus:outline-none"
          >
            <option value="">Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CameraTableFilters;
