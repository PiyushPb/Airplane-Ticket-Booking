import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";

import { BACKENDURL } from "../../Config/Config";

const QRScanner = () => {
  const [mediaStream, setMediaStream] = useState(null);
  const [selectedCamera, setSelectedCamera] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const videoRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    startCamera();
  }, [selectedCamera]);

  const startCamera = async () => {
    try {
      let devices = await navigator.mediaDevices.enumerateDevices();
      let videoDevices = devices.filter(
        (device) => device.kind === "videoinput"
      );

      if (videoDevices.length === 0) {
        toast.error("No camera available.");
        return;
      }

      const constraints = {
        video: {
          facingMode: selectedCamera === "user" ? "user" : "environment",
        },
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      videoRef.current.srcObject = stream;
      setMediaStream(stream);
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  const captureImage = async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    // Ensure that video is loaded
    if (!video.videoWidth || !video.videoHeight) {
      alert("Video is not loaded yet!");
      return;
    }

    // Set canvas dimensions to match video dimensions
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current frame from the video onto the canvas
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert canvas content to Blob representing the image
    const blob = await new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob);
      }, "image/png");
    });

    setCapturedImage(blob);
    stopCamera();
  };

  const stopCamera = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => track.stop());
      setMediaStream(null);
    }
  };

  const verifyTicket = async () => {
    try {
      if (!capturedImage) {
        console.error("No captured image to verify.");
        return;
      }

      const formData = new FormData();
      formData.append("image", capturedImage, "captured_image.png");

      const response = await fetch(BACKENDURL + "/api/v1/decode-qr", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status === true) {
          if (
            data.data.startsWith("https://abvssystem.web.app/verify-ticket/")
          ) {
            const url = data.data;
            window.open(url, "_blank");
          } else {
            toast.error("INVALID URL");
          }
        } else {
          toast.error(data.message);
        }
      } else {
        toast.error("Failed to verify ticket");
      }
    } catch (error) {
      toast.error("Error verifying ticket:", error);
    }
  };

  const recaptureImage = () => {
    setCapturedImage(null);
    startCamera();
  };

  const handleCameraChange = (deviceId) => {
    setSelectedCamera(deviceId);
    stopCamera();
  };

  return (
    <div className="mt-10">
      {!capturedImage && (
        <>
          <button
            className="px-5 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 duration-300 "
            onClick={startCamera}
          >
            Start Camera
          </button>
          <br />
          <div>
            <span>Select Camera: </span>
            {mediaStream && (
              <select onChange={(e) => handleCameraChange(e.target.value)}>
                <option value="">Default</option>
                <option value="environment">Back Camera</option>
                <option value="user">Front Camera</option>
              </select>
            )}
          </div>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            style={{ maxWidth: "100%" }}
          />
          <br />
          <button
            className="px-5 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 duration-300 "
            onClick={captureImage}
          >
            Capture
          </button>
        </>
      )}
      {capturedImage && (
        <>
          <img
            src={URL.createObjectURL(capturedImage)}
            alt="Captured"
            style={{ maxWidth: "100%" }}
          />
          <br />
          <button
            className="px-5 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 duration-300 "
            onClick={verifyTicket}
          >
            Verify Ticket
          </button>
          <button
            className="px-5 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 duration-300 ml-5"
            onClick={recaptureImage}
          >
            Recapture
          </button>
        </>
      )}
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
    </div>
  );
};

export default QRScanner;
