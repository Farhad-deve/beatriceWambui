import { type ReactNode } from "react";
import Line from "./Line";
import styles from './line.module.css'

interface TitleProps {
    children: ReactNode
}

const TitlePage = ({ children } : TitleProps ) => {
  return (
    <>
      <div className="flex flex-col items-center gap-0-5r w-full lg-flex-row md-gap-1r lg-gap-2-5r font-f-Poppins">
        <h1 className={`font-500 ${styles.titleSize}`}>{children}</h1>
        <Line />
      </div>
    </>
  );
};

export default TitlePage;
