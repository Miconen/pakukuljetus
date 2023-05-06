import type { ReactElement } from "react";
import classList from "../../styles/classList";

type Props = {
    children?: ReactElement | ReactElement[];
    className?: string;
    horizontal?: boolean;
}

function Container({children, className = "", horizontal}: Props) {
    const containerStyles = {
        base: "container flex px-4 md:px-0",
        horizontal: "flex-row",
        vertical: "flex-col",
    };

    // Create an array of classes
    const classes = [containerStyles.base];

    if (horizontal) classes.push(containerStyles.horizontal);
    else classes.push(containerStyles.vertical);

    if (className) classes.push(className);

    const classListStr = classList(classes);

    return (
        <div className={classListStr}>
            {children}
        </div>
    )
}

export default Container;
