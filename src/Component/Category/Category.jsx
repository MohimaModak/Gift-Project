import React, { useEffect, useState } from "react";

const Category = ({ selectedCategory }) => {
  const [category, setCategory] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/giftTypes")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
        filterCategory(data, selectedCategory);
      });
  }, [selectedCategory]);
  const filterCategory = (data, selectedCategory) => {
    if (selectedCategory === "All") {
      setFilteredCategory(data);
    } else {
      const filteredData = data.filter(
        (gift) => gift.category === selectedCategory
      );
      setFilteredCategory(filteredData);
    }
  };

  return (
    <div>
      category: {filteredCategory.length}
      <div className="grid grid-cols-3 gap-5 ">
        {filteredCategory.map((categoryGift) => (
          <div key={categoryGift._id}>
            <div className="border rounded-md">
              <img
                src={categoryGift.image}
                className="rounded-md h-[300px]"
                alt={categoryGift.category}
              />
              <h1 className="text-center font-bold p-3">
                {categoryGift.category}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

// import React, { useEffect, useState } from "react";

// const Category = ({ setSelectedCategory }) => {
//   const [category, setCategory] = useState([]);
//   const [filter, setFilter] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/giftTypes")
//       .then((res) => res.json())
//       .then((data) => {
//         setCategory(data);
//         giftTypes(data, setSelectedCategory);
//       });
//   }, [setSelectedCategory]);

//   const giftTypes = (data, setSelectedCategory) => {
//     if (setSelectedCategory === "All") {
//       setFilter(data);
//     } else {
//       const filterData = data.filter(
//         (giftCategory) => giftCategory.category === setSelectedCategory
//       );
//       setFilter(filterData);
//     }
//   };

//   return <div>Category: {filter.length}</div>;
// };

// export default Category;
