import React from "react";
import Card from "./Card";

const Cards = (props) => {
  let courses = props.courses;

  function getCourses() {
    let allCourses = [];
    Object.values(courses).forEach((array) => {
      array.forEach((courseData) => {
        allCourses.push(courseData);
      });
    });
    return allCourses;
  }
  console.log("printing data");
  console.log(courses);
  return (
    <div>
      {getCourses().map((course) => (
        <Card key={course.id} course={course} />
      ))}
    </div>
  );
};
export default Cards;
