"use client";

import React, { useEffect, useState } from "react";
import { getCourseById } from "../../../../_services";
import VideoPlayer from "./_components/VideoPlayer";
function CoursePreview({ params }) {
  const [courseDetails, setCourseDetails] = useState([]);
  useEffect(() => {
    params.courseId ? getCourse(params.courseId) : null;
  }, []);
  const getCourse = () => {
    getCourseById(params.courseId).then((resp) => {
      setCourseDetails(resp.courseList);
      console.log(resp);
    });
  };
  return (
    courseDetails?.name && (
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2">
            <VideoPlayer />
          </div>
          <div>Enroll Options</div>
        </div>
      </div>
    )
  );
}

export default CoursePreview;
