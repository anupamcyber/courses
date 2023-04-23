import React from "react";
import Navbar from "./component/Navbar";
import Filter from "./component/Filter";
import Cards from "./component/Cards";
import { apiUrl, filterData } from "./data";
import Spinner from "./component/Spinner";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
      //console.log(output.data);
      console.log(output);
    } catch (error) {
      toast.error("eeor aa gaya ");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" flex flex-col h-full">
      <div>
        <Navbar />
      </div>
      <div className="bg-bgDark2 ">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          ></Filter>
        </div>
        <div className="w-11/12 max-w-[1200px] flex flex-wrap mx-auto justify-center items-center min-h-[50vh]">
          {loading ? (
            <Spinner></Spinner>
          ) : (
            <Cards courses={courses} category={category}></Cards>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
