import React from "react";
import { useState } from "react";

function Checkbox() {
  // Category Name
  const category_name = [
    {
      id: "1",
      name: "Toys",
    },
    {
      id: "2",
      name: "Bags",
    },

    {
      id: "3",
      name: "Tables",
    },

    {
      id: "5",
      name: "Chair",
    },

    {
      id: "6",
      name: "Toys",
    },

    {
      id: "7",
      name: "Toys",
    },
  ];
  const [data, setData] = useState(category_name);
  const FilterData = (e) => {
    console.log(e);
    const result = category_name.filter((curData) => {
      return curData.id === e;
    });
    setData(result);
  };

  return (
    <>
      {data.map((link, index) => {
        return (
          <div className="">
            <input
              className="my-3"
              type="checkbox"
              name="cuisines"
              id={link.id}
              onChange={(event) => FilterData(link.id)}
            />
            <span className="checkbox-items"> {link.name} </span>
          </div>
        );
      })}
    </>
  );
}

export default Checkbox;
