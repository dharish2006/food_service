import React, { useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PacmanLoader color="#A294F9"/>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold text-center">
            Order placed successfully
          </h2>
          <p className="text-lg text-center mt-5 text-gray-800">
            Thank you for ordering with us
          </p>
        </div>
      )}
    </div>
  );
};

export default Success;
