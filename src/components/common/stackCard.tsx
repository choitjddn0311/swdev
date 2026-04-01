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
        <ul className="w-130 h-50 p-3 border-2 border-maincolor rounded-lg flex flex-col justify-between">
            <h1 className="text-xl ">{title}</h1>
            <div className="flex justify-start gap-2 items-center">
              {items.map((item) => (
                <li key={item.stack} className="w-30 text-center text-foreground">{item.stack}</li>
              ))}
            </div>
            <div className="flex justify-start gap-2 items-center">
              {items.map((item) => (
                <li key={item.stack} className={`w-30 h-25 flex justify-center items-center text-2xl ${item.iconColor}`}>{item.icon}</li>
              ))}
            </div>
        </ul>
    )
}

export default StackCard;