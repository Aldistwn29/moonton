import { Link } from "@inertiajs/react";

export default function MenuItem({ link, icon, text, isActive, method = "get" }) {
    // jika link kosong atau '#', render button disable
    if (!link || link === '#') {
        return (
            <button
                className="side-link"
                type='button'
                onClick={() => {
                    alert('Comming Soon')
                }}
            >
                {icon}
                {text}
            </button>
        )
    }
    return (
        <>
            <Link
                href={route(link)}
                className={`side-link ${isActive ? 'active' : ''}`}
                method={method}
                as="button"
            >
                {icon}
                {text}
            </Link>
        </>
    )
}