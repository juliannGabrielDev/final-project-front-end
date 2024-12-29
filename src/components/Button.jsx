import PropTypes from "prop-types";

export default function Button( { children, className }) {
    return (
        <button className={`bg-primaryYellow rounded-2xl font-bold font-karla text-sm md:text-base p-1 ${ className }`}>{ children }</button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}