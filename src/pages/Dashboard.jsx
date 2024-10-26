import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CameraTable from "../components/CameraTable";
import CameraTableFilters from "../components/CameraTableFilters";
import SearchHeader from "../components/SearchHeader";
import PaginationForTable from "../components/PaginationForTable";
import { toast } from "react-toastify";
import axiosInstance from "../utils/AxiosCreate";
export default function Dashboard() {
  const [cameraData, setCameraData] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [filteredData, setFilteredData] = useState(cameraData);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    getAllCameraDetails();
  }, []);

  const getAllCameraDetails = async () => {
    try {
      const response = await axiosInstance.get(`fetch/cameras`);
      if (response.status === 200 && response.data.data) {
        setCameraData(response.data.data);
        setFilteredData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching camera details:", error);
      throw error;
    }
  };

  const updateCameraStatus = async (id, status) => {
    try {
      const payload = {
        id,
        status,
      };
      const response = await axiosInstance.put(`update/camera/status`, payload);
      if (response.status === 200 && response.data.data) {
        setCameraData((prevData) =>
          prevData.map((camera) =>
            camera.id === id ? { ...camera, status } : camera
          )
        );
        toast.success("Status Updated Successfully!");
      }
    } catch (error) {
      console.error("Error fetching camera details:", error);
      throw error;
    }
  };

  const handleFilterChange = () => {
    let filtered = cameraData;

    if (searchTerm) {
      filtered = filtered.filter((record) =>
        record.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedLocation) {
      filtered = filtered.filter(
        (record) => record.location === selectedLocation
      );
    }

    if (selectedStatus) {
      filtered = filtered.filter((record) => record.status === selectedStatus);
    }

    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    handleFilterChange();
  }, [searchTerm, selectedLocation, selectedStatus, cameraData]);

  return (
    <>
      <div className="w-full px-8">
        <SearchHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CameraTableFilters
          cameraData={cameraData}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />
        <CameraTable
          cameraData={currentItems}
          updateCameraStatus={updateCameraStatus}
        />
        <PaginationForTable
          currentPage={currentPage}
          totalItems={filteredData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      </div>
    </>
  );
}
