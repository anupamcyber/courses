import React from "react";

const Filter = ({ filterData }) => {
  let filterDatas = filterData;
  return (
    <div>
      {filterDatas.map((data) => (
        <button key={data.id}>{data.title}</button>
      ))}
    </div>
  );
};

export default Filter;
