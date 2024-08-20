import React from "react";
import { courses } from "../../courses";
import Card from "../../Components/Card";

function Home() {
  return (
    <div className="container-card">
      <div className="course-card">
        {courses.slice(0, 3).map((course) => (
          <Card
            key={course.id}
            title={course.title}
            date={course.date}
            preinformation={course.preinformation}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
