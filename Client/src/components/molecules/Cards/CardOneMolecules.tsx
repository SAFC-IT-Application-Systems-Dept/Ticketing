import { CardOneMoleculesProps } from "@/core/types";
import React from "react";
import CountUp from "react-countup";

const colorStyles = [
  "bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-200",
  "bg-green-100 text-green-600 dark:bg-green-800 dark:text-green-300",
  "bg-red-200 text-red-800 dark:bg-red-900 dark:text-red-200",
  "bg-yellow-200 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  "bg-green-300 text-green-800 dark:bg-green-700 dark:text-green-300",
];

const CardOneMolecules = (props: CardOneMoleculesProps) => {
  const colorClass = colorStyles[props.colorIndex % colorStyles.length];
  return (
    <div
      className={`font-bold rounded-md shadow-md h-[150px] flex flex-col items-center justify-center ${colorClass} transition-all duration-300 ease-in-out`}
    >
      <span className="text-[50px]">
        <CountUp duration={3} end={Number(props.count)} />
      </span>
      {props.label}
    </div>
  );
};

export default CardOneMolecules;
