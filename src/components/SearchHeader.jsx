import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchHeader = ({ cameraData, setCameraData, searchTerm, setSearchTerm }) => {
    return <div className='flex items-center justify-between'>
        <div>
            <p className="text-[24px] font-700">Cameras</p>
            <span>Manage your cameras here.</span>
        </div>
        <div className="flex items-center bg-gray-100 rounded-md p-2 w-full max-w-xs">
            <input
                type="text"
                placeholder="search"
                className="bg-transparent focus:outline-none w-full text-gray-700"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <FaSearch className="w-5 h-5 text-gray-500" />
        </div>
    </div>
}

export default SearchHeader;