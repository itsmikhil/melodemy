"use client";
import React from "react";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";

const FeaturedCourses = () => {
  interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
  }
  const filteredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured === true
  );
  return (
    <div className="py-12 bg-gray-900">
      <div className="flex flex-col items-center">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 py-8 px-6">
          {filteredCourses.map((item, idx) => {
            return (
              <div key={idx} className="">
                <BackgroundGradient className="rounded-[22px] sm:max-h-[20rem]  md:max-h-[15rem] flex flex-col justify-between gap-4 p-4 sm:p-10 bg-white dark:bg-zinc-900">
                  <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {item.title}
                  </p>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>
                  <div className="text-center">
                    {" "}
                    <Link className="text-center" href={"/courses"}>
                      Learn More
                    </Link>
                  </div>
                </BackgroundGradient>
              </div>
            );
          })}
        </div>

        <button className="border-1 text-xl mx-auto border-white px-3 py-1 hover:bg-white hover:text-black rounded-lg">
          View More
        </button>
      </div>
    </div>
  );
};

export default FeaturedCourses;
