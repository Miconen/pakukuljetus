import { AiFillPhone } from 'react-icons/ai';

type Props = {
    className?: string;
    number: string;
    call: string;
}

function Phone({ className = "", number, call }: Props) {
    return (
        <div className="flex items-center gap-1">
            < AiFillPhone /> <a href={`tel:${call}`} className={`${className} hover:underline`}>{number}</a>
        </div>
    )
}

export default Phone;
