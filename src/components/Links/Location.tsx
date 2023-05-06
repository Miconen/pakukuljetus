import { MapPin as MapPinIcon } from 'react-feather';
import classList from "../../styles/classList";

type Props = {
    className?: string;
    content: string;
}

function Location({ className = "", content }: Props) {
    // Create an array of classes
    const classes = ["hover:underline flex items-inline gap-2"];
    if (className) classes.push(className);
    const classListStr = classList(classes);

    return (
        <span className={classListStr}><MapPinIcon />{content}</span>
    )
}

export default Location;
