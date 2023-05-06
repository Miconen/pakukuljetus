import { MapPin as MapPinIcon } from 'react-feather';

type Props = {
    className?: string;
    content: string;
}

function Location({ className = "", content }: Props) {
    return (
        <div className="flex items-center gap-1">
            <MapPinIcon /><span className={`${className}`}>{content}</span>
        </div>
    )
}

export default Location;
