import { Phone as PhoneIcon } from 'react-feather';
import classList from "../../styles/classList";

type Props = {
    className?: string;
    number: string;
    call: string;
}

function Phone({ className = "", number, call }: Props) {
    // Create an array of classes
    const classes = ["hover:underline flex items-inline gap-2"];
    if (className) classes.push(className);
    const classListStr = classList(classes);

    return (
        <a href={`tel:${call}`} className={classListStr}><PhoneIcon />{number}</a>
    )
}

export default Phone;
