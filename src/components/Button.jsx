import PropTypes from "prop-types";

export default function Button({variant, children, ...rest}) {
    return (
        <button {...rest} className={`${variant} rounded-2xl font-bold font-karla whitespace-nowrap text-sm md:text-base py-1 px-2 active:scale-95 transition-transform`}>
            {children}
        </button>
    )
}

Button.propTypes = {
    variant: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}