import { Mail as EmailIcon } from 'react-feather';

type Props = {
    className?: string;
    email: string;
}

function Email({ className = "", email }: Props) {
    return (
        <div className="flex items-center gap-1">
            <EmailIcon /><a href={`mailto:${email}`} className={`${className} hover:underline`}>{email}</a>
        </div>
    )
}

export default Email;
