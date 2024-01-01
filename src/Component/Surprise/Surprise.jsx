import React from "react";
import { useLoaderData } from "react-router-dom";

const Surprise = () => {
  const luckLoader = useLoaderData();
  console.log(luckLoader);

  const handleYourLuck = () => {
    fetch("http://localhost:5000/luck", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(detailsCategory),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Product added to cart!");
        }
      });
  };

  return (
    <>
      <div>
        <div>
          <h1>Luck: {luckLoader.length}</h1>
          <div className="grid grid-cols-4 gap-5 ">
            {luckLoader.map((luck) => (
              <div key={luck.id}>
                <img src={luck.image} className="md:w-[300px] h-[230px]" />
                <h1 className="font-bold text-center">{luck.name}</h1>
                <div
                  onClick={handleYourLuck}
                  className="border flex justify-center items-center rounded-full m-3 p-1"
                >
                  <button>Luck</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Surprise;
