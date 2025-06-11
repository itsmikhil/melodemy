"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";


const featuredWebinars = [
  {
    title: "Understanding Music Theory",
    description:
      "Dive deep into the fundamentals of music theory and enhance your musical skills.",
    slug: "understanding-music-theory",
    isFeatured: true,
  },
  {
    title: "The Art of Songwriting",
    description:
      "Learn the craft of songwriting from experienced musicians and songwriters.",
    slug: "the-art-of-songwriting",
    isFeatured: true,
  },
  {
    title: "Mastering Your Instrument",
    description:
      "Advanced techniques to master your musical instrument of choice.",
    slug: "mastering-your-instrument",
    isFeatured: true,
  },
  {
    title: "Music Production Essentials",
    description:
      "Get started with music production with this comprehensive overview.",
    slug: "music-production-essentials",
    isFeatured: true,
  },
  // Added two more webinars
  {
    title: "Live Performance Techniques",
    description:
      "Enhance your live performance skills with expert tips and strategies.",
    slug: "live-performance-techniques",
    isFeatured: true,
  },
  {
    title: "Digital Music Marketing",
    description:
      "Learn how to promote your music effectively in the digital age.",
    slug: "digital-music-marketing",
    isFeatured: true,
  },
];

const UpcomingWebinars = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center p-4 text-center">
      <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
        FEATURED WEBINARS
      </h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
        Enhance Your Musical Journey
      </p>
      <div className="max-w-6xl mx-auto">
        <HoverEffect
          items={featuredWebinars.map((item) => {
            return {
              title: item.title,
              description: item.description,
              link: item.slug,
            };
          })}
        />
      </div>
      <button className="border-1 text-xl mx-auto border-white px-3 py-1 bg-white  text-black rounded-lg cursor-pointer">
          View All Webinars
        </button>
    </div>
  );
};

export default UpcomingWebinars;
