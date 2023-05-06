import classList from "../../styles/classList";

type Props = {
    className?: string;
    children: string;
    type: "Main" | "Secondary" | "Tertiary";
};

function Button({ className = "", children, type }: Props) {
    // Button styling
    const buttonStyles = {
        base: "rounded-sm w-fit font-bold text-lg",
        hover: "hover:bg-transparent transition duration-150 ease-in-out",
        main: "py-4 px-8 bg-yellow-500 text-white hover:bg-yellow-600 drop-shadow-[0_3px_0_rgba(0,0,0,0.25)] uppercase",
        secondary: "py-1 px-8 bg-white text-slate-800 border-4 border-white hover:text-white",
        tertiary: "py-1 px-8 bg-yellow-500 text-white border-4 border-yellow-500 hover:text-slate-800",
    };

    // Create an array of classes
    const classes = [buttonStyles.base, buttonStyles.hover];

    if (type === "Main") classes.push(buttonStyles.main);
    else if (type === "Secondary") classes.push(buttonStyles.secondary);
    else if (type === "Tertiary") classes.push(buttonStyles.tertiary);

    if (className) classes.push(className);

    const classListStr = classList(classes);

    return <button className={classListStr}>{children}</button>;
}

export default Button;
