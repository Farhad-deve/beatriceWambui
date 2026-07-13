import { type ReactNode } from "react";
import Line from "./Line";

interface TitleProps {
    children: ReactNode
}

const TitlePage = ({ children } : TitleProps ) => {
  return (
    <>
      <div className="flex flex-col items-center gap-0-5r w-full md-flex-row md-gap-2r font-f-Poppins">
        <h1 className="font-500">{children}</h1>
        <Line />
      </div>
    </>
  );
};

export default TitlePage;
