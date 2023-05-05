import { MdLocationPin } from 'react-icons/md';

type Props = {
    className?: string;
    content: string;
}

function Location({ className = "", content }: Props) {
    return (
        <div className="flex items-center gap-1">
            <MdLocationPin /><span className={`${className}`}>{content}</span>
        </div>
    )
}

export default Location;
