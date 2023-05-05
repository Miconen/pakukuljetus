type Props = {
    className?: string;
    children: string;
    type: "Main" | "Secondary";
}

function Button({className = "", children, type}: Props) {
    // Button styling
    let buttonStyles = "py-1 px-8 rounded-sm w-fit font-bold text-lg"
    let buttonStylesHover = "hover:bg-transparent transition duration-150 ease-in-out"
    let buttonMain = "bg-yellow-500 text-white hover:bg-yellow-600 drop-shadow-[0_3px_0_rgba(0,0,0,0.25)]";
    let buttonSecondary = "bg-white text-slate-800 border-4 border-white hover:text-white"

    const styleBuilder = () => {
        let styles: string = buttonStyles;
        styles += " " + buttonStylesHover;

        if (type == "Main") styles += " " + buttonMain; 
        else if (type == "Secondary") styles += " " + buttonSecondary;

        if (className) styles += " " + className;

        return styles;
    }

    return (
        <button className={styleBuilder()}>{children}</button>
    );
}

export default Button;
