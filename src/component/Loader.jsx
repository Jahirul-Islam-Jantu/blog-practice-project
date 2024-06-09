import React from "react";

const Loader = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <div className="flex flex-col gap-4 w-52">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
