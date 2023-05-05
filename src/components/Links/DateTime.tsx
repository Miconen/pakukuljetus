import { IoIosTime } from 'react-icons/io';

type Props = {
    className?: string;
    content: string;
}

function DateTime({ className = "", content }: Props) {
    return (
        <div className="flex items-center gap-1">
            <IoIosTime /><span className={`${className}`}>{content}</span>
        </div>
    )
}

export default DateTime;
