import { summaries } from "@/dummy/fakeData";
import { Aperture } from "lucide-react";
import React from "react";

const SummaryCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {summaries.map((item, index) => (
        <div key={index} className="p-4 bg-[#264075] text-white rounded-xl grid grid-cols-12 items-center">
          <div className="col-span-2">
            <Aperture />
          </div>
          <div className="col-span-9">
            <h4 className="text-sm whitespace-nowrap">{item?.title}</h4>
            <span className="text-2xl font-semibold">{item?.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCard;
