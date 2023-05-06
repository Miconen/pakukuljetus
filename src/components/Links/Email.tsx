import { Mail as EmailIcon } from 'react-feather';
import classList from "../../styles/classList";

type Props = {
    className?: string;
    email: string;
}

function Email({ className = "", email }: Props) {
    // Create an array of classes
    const classes = ["hover:underline flex items-inline gap-2"];
    if (className) classes.push(className);
    const classListStr = classList(classes);

    return (
        <a href={`mailto:${email}`} className={classListStr}><EmailIcon />{email}</a>
    )
}

export default Email;
