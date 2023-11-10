import { articles } from "@/constant";
import Image from "next/image";
import React from "react";

const FormSection = () => {
  return (
    <div className="p-6 pb-12 bg-gray-300 formSection">
      
      {articles.map((article, index) => (
        <div className="" key={index}>
          <div className="container w-full lg:w-4/5 mx-auto flex flex-col p-9 m-3">
            <div className="flex flex-col md:flex-row overflow-hidden rounded-lg bg-[#280388] opacity-75 mt-4 mx-2">
            

              <div className="w-full py- px-6  flex flex-col justify-between ">
                <h3 className="font-extrabold pt-10 text-3xl leading-tight text-white truncate">
                  {article.title}
                </h3>
                <p className="pb-10 text-xl text-bold text-gray-300">{article.excerpt}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormSection;
