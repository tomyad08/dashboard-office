"use client";
import { DataDepartment } from "@/DataDummy/DataDepartment";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

const CardDepartement = () => {
  const [count, setCount] = useState(0);
  const data = DataDepartment;

  if (count < 0) {
    setCount(data.length - 1);
  }
  if (count > data.length - 4) {
    setCount(0);
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div className=" my-5 ">
        <Carousel responsive={responsive} infinite={true}>
          {data.map((value) => (
            <Link href={value.link}>
              <div className="bg-white p-4 rounded-lg drop-shadow-xl mx-2 bg-gradient-to-b from-white to-green-100 hover:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi "
                  viewBox="0 0 16 16"
                >
                  <path d={value.d1} />
                  <path d={value.d2} />
                </svg>
                <h1 className="text-lg font-semibold">{value.name}</h1>
                <p className="text-sm">{value.total} employee</p>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default CardDepartement;
