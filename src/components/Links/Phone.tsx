import { Phone as PhoneIcon } from 'react-feather';

type Props = {
    className?: string;
    number: string;
    call: string;
}

function Phone({ className = "", number, call }: Props) {
    return (
        <div className="flex items-center gap-1">
            <PhoneIcon /><a href={`tel:${call}`} className={`${className} hover:underline`}>{number}</a>
        </div>
    )
}

export default Phone;
