import React from "react";

const List = () => {
  // array of an object
  let a = [
    { id: 101, name: "nitin" },
    { id: 102, name: "kumar" },
    { id: 103, name: "sharma" },
  ];

  let arr = [1, 2, 3, 4, 5, 4, 5];

  let res = arr.map((item, i) => {
    return (
      <p key={i}>
        {i}:{item}
      </p>
    );
  });

  let ans = a.map((item) => {
    return (
      <>
        <p>{JSON.stringify(item)}</p>
        <p key={item.id}>
          {item.id}:{item.name}
        </p>
      </>
    );
  });

  
  return (
    <div>
      {res}
      {ans}
    </div>
  );
};

export default List;
