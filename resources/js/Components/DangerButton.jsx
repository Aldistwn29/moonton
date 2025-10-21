import propTypes from 'prop-types';

export default function DangerButton({
    type="submit",
    className = '',
    variant = "primary",
    processing,
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `rounded-2xl py-[13px] text-center w-full ${processing &&  "opacity-30"} btn-${variant} ${className}`
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
    DangerButton.propTypes = {
    type: propTypes.oneOf(['button', 'submit', 'reset']),
    className: propTypes.string,
    variant: propTypes.oneOf(['primary', 'secondary', 'danger', 'light-outline', 'white-outline']),
    processing: propTypes.bool,
    children: propTypes.node
    };
