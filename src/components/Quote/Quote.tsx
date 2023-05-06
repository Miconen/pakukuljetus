type Props = {
    children: string;
    name: string;
    info: string;
}

function Quote({children, name, info}: Props) {
    return (
        <section className="bg-white shadow-lg text-gray-800 flex flex-col p-8 gap-4 rounded-md">
            <blockquote className="text-xl italic font-semibold">
                <svg aria-hidden="true" className="w-10 h-10 text-gray-400" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                <p>"{children}"</p>
            </blockquote>
            <div className="flex md:items-center flex-col md:flex-row md:divide-x-2 divide-gray-500">
                <cite className="md:pr-3 font-medium">{name}</cite>
                <cite className="md:pl-3 text-sm">{info}</cite>
            </div>
        </section>
    )
}

export default Quote;
