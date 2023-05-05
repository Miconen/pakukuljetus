import type { ReactElement } from "react";

type Props = {
    children?: ReactElement | ReactElement[];
    className?: string;
    horizontal?: boolean;
}

function Container({children, className = "", horizontal}: Props) {
    return (
        <div className={`${className} container flex ${horizontal ? "flex-row" : "flex-col"}`}>
            {children}
        </div>
    )
}

export default Container;
