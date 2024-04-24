import React from "react";
import { BsCashCoin, BsCurrencyDollar } from "react-icons/bs";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import { SiCashapp } from "react-icons/si";

const data = [
  {
    label: "Your Total Balance",
    amount: "100,020.00",
    increase: 10.9,
    icon: <BsCurrencyDollar size={26} />,
  },
  {
    label: "Total Income",
    amount: "150,010.00",
    icon: <BsCashCoin size={26} />,
    increase: 8.9,
  },
  {
    label: "Total Expense",
    amount: "50,010.00",
    icon: <SiCashapp size={26} />,
    increase: -10.9,
  },
];

const ICON_STYLES = [
  "bg-blue-300 text-blue-800",
  "bg-emerald-300 text-emerald-800",
  "bg-rose-300 text-rose-800",
];

const Stats = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between gap-8 2xl:gap-30 mb-20'>
      {data.map((item, index) => (
        <div
          key={index + item.label}
          className='w-full 2xl:min-w-96 flex items-center justify-between gap-5 px-4 md:px-8 py-12 rounded-lg bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-900'
        >
          <div className='flex items-center gap-2'>
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full ${ICON_STYLES[index]}`}
            >
              {item.icon}
            </div>

            <div className='space-y-3'>
              <span className='text-gray-600 dark:text-gray-400 text-base md:text-lg'>
                {item.label}
              </span>
              <p className='text-2xl 2xl:text-3xl font-medium text-black dark:text-gray-400'>
                ${item.amount}
              </p>
            </div>
          </div>

          <div>
            <p
              className={`flex gap-1 items-center text-base md:text-lg font-semibold ${
                item.increase > 0 ? "text-emerald-500" : "text-red-500"
              }`}
            >
              {item.increase > 0 ? <IoMdArrowUp /> : <IoMdArrowDown />}
              {Math.abs(item.increase)} %
            </p>
            <span className='text-xs md:text-sm text-gray-600 dark:text-gray-500'>
              Compare to last year
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
