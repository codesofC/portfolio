"use client";

import { useLanguage } from "./LanguageContext";
import { certifications, education, traductionsData } from "@/constants/index";
import { useState } from "react";
import Link from "next/link";
import { IoCloudDownloadOutline } from "react-icons/io5";

const EduDetails = () => {
  const [details, setDetails] = useState(false);

  const { language } = useLanguage();

  return (
    <div className="flex flex-col gap-6">
      <div
        className={`relative flex items-center gap-12 py-2 before:w-12 before:h-[3px] before:absolute before:bottom-0 ${
          !details ? "before:left-0" : "before:left-[7.8rem]"
        } before:bg-green-600 before:transition-[left] before:duration-100 before:ease-in`}
      >
        <span
          onClick={() => setDetails(false)}
          className="cursor-pointer text-white font-bold"
        >
          {traductionsData[`${language}`].aboutMe.experience.title1}
        </span>
        <span
          onClick={() => setDetails(true)}
          className="cursor-pointer text-white font-bold"
        >
          {traductionsData[`${language}`].aboutMe.experience.title2}
        </span>
      </div>
      {details ? (
        <ul className="flex flex-col gap-4">
          {education.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="w-[5px] h-[5px] rounded-full bg-white"></span>
              <span className="text-white">{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-white italic">Freelancer - Sept 2023</p>
            <p className="text-white font-bold">
              {traductionsData[`${language}`].aboutMe.experience.p1} <br />
              <span className="text-green-600">
                {traductionsData[`${language}`].aboutMe.experience.p2} {`:)`}
              </span>
            </p>
            <p className="text-white">
              Email: {" "}
              <Link 
                href="mailto:inelusjudelin01@gmail.com"
                className="text-gray-400"
              > 
              
                inelusjudelin01@gmail.com
              </Link>
            </p>
          </div>
          <Link
            href={`/assets/cv${language}.pdf`}
            className="w-20 flex-center gap-2 py-2 px-4 bg-green-600 text-white rounded-lg text-lg"
          >
            CV <IoCloudDownloadOutline />
          </Link>
        </div>
      )}
    </div>
  );
};

export default EduDetails;
