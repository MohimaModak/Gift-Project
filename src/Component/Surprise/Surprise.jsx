import React, { useEffect, useState } from "react";

const Surprise = () => {
  const [luck, setLuck] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/luck")
      .then((res) => res.json())
      .then((data) => setLuck(data));
  }, []);

  return (
    <div className="">
      <h1>luck: {luck.length}</h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 gap-5">
          {luck.map((selection) => (
            <div key={selection.name}>
              <div className="border rounded-md">
                <img src={selection.image} className="h-[200px] w-[300px]" />
                <h1 className="text-center text- m-2">{selection.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Surprise;
