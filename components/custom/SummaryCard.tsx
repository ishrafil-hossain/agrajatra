import { summaries } from "@/dummy/fakeData";
import { Aperture } from "lucide-react";
import React from "react";

const SummaryCard = () => {
  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {summaries.map((item, index) => (
        <div key={index} className="group">
          <div className="p-4 bg-white group-hover:bg-primary text-primary group-hover:text-white border border-primary rounded-xl flex gap-3 items-center transition duration-500">
            <div className="text-primary group-hover:text-white transition duration-500">
              <Aperture />
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-lg font-semibold whitespace-nowrap">{item?.title}</h4>
              <span className="text-2xl font-semibold">{item?.value}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCard;
