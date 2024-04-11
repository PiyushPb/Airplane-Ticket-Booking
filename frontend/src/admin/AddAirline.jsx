import React, { useState } from "react";
import uploadImageToCloudinary from "../utils/uploadImageToCloudinary";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddAirline = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [airlineName, setAirlineName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "image/png") {
      setImage(file);
      setPreviewURL(URL.createObjectURL(file));
    } else {
      toast.error("Please upload a PNG image.");
    }
  };

  const handleUpload = async () => {
    if (!airlineName) {
      toast.error("Please enter the airline name.");
      return;
    }
    if (!image) {
      toast.error("Please upload an image.");
      return;
    }

    try {
      // Upload image to Cloudinary
      const cloudinaryData = await uploadImageToCloudinary(image);

      // Prepare data for backend
      const airlineData = {
        airlineLogo: cloudinaryData.secure_url,
        airlineName: airlineName,
      };

      // Send data to backend API
      const response = await axios.post(
        "http://localhost:5000/api/v1/flights/addAirline",
        airlineData
      );

      toast("Airline added:", response.data);
      navigate("/admin/");
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Error uploading image. Please try again.");
    }
  };

  return (
    <div className="px-[30px] md:px-[30px]">
      <div className="mt-5">
        <h1 className="text-3xl font-bold">Add Airline</h1>
        <p className="text-gray-500">Add new airline</p>
        <div className="mt-10">
          <label className="block text-gray-600">Airline Name</label>
          <input
            type="text"
            placeholder="Airline Name"
            className="border-[1px] mt-2 border-gray-200 rounded-md px-3 outline-none py-2 w-full"
            value={airlineName}
            onChange={(e) => setAirlineName(e.target.value)}
          />
        </div>
        <div className="mt-5">
          {previewURL && (
            <img
              src={previewURL}
              alt="Preview"
              className="w-full max-w-[300px] mb-5 rounded-md"
            />
          )}
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".png"
                />
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  PNG format only
                </p>
              </div>
            </label>
          </div>
        </div>
        <button
          className="py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white mt-5 w-full max-w-[300px] rounded-md"
          onClick={handleUpload}
        >
          Add Airline
        </button>
      </div>
    </div>
  );
};

export default AddAirline;
