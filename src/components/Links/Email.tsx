import { MdEmail } from 'react-icons/md';

type Props = {
    className?: string;
    email: string;
}

function Email({ className = "", email }: Props) {
    return (
        <div className="flex items-center gap-1">
            <MdEmail /><a href={`mailto:${email}`} className={`${className}`}>{email}</a>
        </div>
    )
}

export default Email;
