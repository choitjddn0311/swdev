import React from "react";

interface StackItem {
  stack: string;
  icon: React.ReactNode;
  iconColor: string;
}

interface StackCardProps {
  title: string;
  items: StackItem[];
}

const StackCard = ({ title, items }: StackCardProps) => {
  return (
    // w130 h50
    <ul className="w-full h-25 2xl:w-130 2xl:h-50 xl:w-130 xl:h-50 p-3 border-2 border-maincolor rounded-lg flex flex-col gap-3">
      <h1 className="text-md 2xl:text-xl xl:text-xl font-semibold">{title}</h1>
      <div className="flex flex-wrap gap-1 items-center justify-start w-full">
        {items.map((item) => (
          <li
            key={item.stack}
            // 30 30
            className="flex flex-col items-center justify-center w-15 h-7 2xl:w-30 2xl:h-30 xl:w-30 xl:h-30 lg:h-30 lg:w-30 md:w-30 md:h-30 sm:w-30 sm:h-30"
          >
            <span className={`text-3xl ${item.iconColor}`}>
              {item.icon}
            </span>
            <span className="text-sm hidden sm:block md:block lg:block xl:block 2xl:block text-foreground text-center">{item.stack}</span>
          </li>
        ))}
      </div>
    </ul>
  );
};

export default StackCard;