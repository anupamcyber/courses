import React from "react";
import Card from "./Card";
import { useState } from "react";

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      //main sirf specifc data pass krunga
      console.log(category);
      return courses[category];
    }
  }

  console.log("printing data");
  console.log(courses);
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4 max-h-full">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          //functon send ho rahah hai
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
};
export default Cards;
