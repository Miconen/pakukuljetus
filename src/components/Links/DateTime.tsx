import { Clock as ClockIcon } from 'react-feather';

type Props = {
    className?: string;
    content: string;
}

function DateTime({ className = "", content }: Props) {
    return (
        <div className="flex items-center gap-1">
            <ClockIcon /><span className={`${className}`}>{content}</span>
        </div>
    )
}

export default DateTime;
