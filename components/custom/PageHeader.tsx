import { File } from "lucide-react";
import React from "react";

const PageHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-2.5">
      <File size={20} />
      <h4 className="text-[#1F1F1F] text-lg font-semibold">{title}</h4>
    </div>
  );
};

export default PageHeader;
