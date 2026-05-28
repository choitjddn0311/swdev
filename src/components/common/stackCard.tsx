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
    <div className="w-full 2xl:w-130 xl:w-130 lg:w-full md:w-full sm:w-full p-4 border border-foreground/10 rounded-xl flex flex-col gap-3 hover:border-cyan-400/40 transition-colors">
      <h2 className="text-xs font-semibold text-foreground/40 uppercase tracking-wider">{title}</h2>
      <ul className="flex flex-wrap gap-3">
        {items.map((item) => (
          <li
            key={item.stack}
            className="flex flex-col items-center gap-1.5 px-4 py-3 rounded-xl border border-foreground/10 hover:border-cyan-400/50 transition-colors min-w-14"
          >
            <span className={`text-2xl ${item.iconColor}`}>{item.icon}</span>
            <span className="text-xs text-foreground/60">{item.stack}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StackCard;
