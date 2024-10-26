import React from "react";
import { IoCloudyOutline } from "react-icons/io5";
import { GoServer } from "react-icons/go";
import { TiDeleteOutline } from "react-icons/ti";
import { toast } from "react-toastify";

const CameraTable = ({ cameraData, updateCameraStatus }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="bg-white w-full border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Health</th>
            <th className="px-4 py-2 border-b">Location</th>
            <th className="px-4 py-2 border-b">Recorder</th>
            <th className="px-4 py-2 border-b">Tasks</th>
            <th className="px-4 py-2 border-b">Status</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cameraData.length !== 0 &&
            cameraData.map((camera, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b text-center">
                  {camera.name}
                </td>
                <td className="px-4 py-2 border-b flex gap-2 justify-center">
                  <span className="text-green-500 flex items-center gap-2">
                    <IoCloudyOutline />
                    {camera.health.cloud}
                  </span>
                  <span className="text-yellow-500 flex items-center gap-2">
                    <GoServer />
                    {camera.health.device}
                  </span>
                </td>
                <td className="px-4 py-2 border-b text-center">
                  {camera.location}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  {camera.recorder}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  {camera.tasks} Tasks
                </td>
                <td className="px-4 py-2 border-b text-center ">
                  <span
                    className={`px-2 py-1 text-sm rounded cursor-pointer ${
                      camera.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                    onClick={() =>
                      updateCameraStatus(
                        camera.id,
                        camera.status === "Active" ? "Inactive" : "Active"
                      )
                    }
                  >
                    {camera.status}
                  </span>
                </td>
                <td className="px-4 py-2 border-b  text-center">
                  <button
                    className=""
                    onClick={() => toast.error("Camera Deleted Successfully!")}
                  >
                    <TiDeleteOutline size={30} />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CameraTable;
