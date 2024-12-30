import PropTypes from "prop-types";

export default function Button(props) {
    return (
        <button className={`${props.bg} ${props.textColor} ${ props.width } rounded-2xl font-bold font-karla whitespace-nowrap text-sm md:text-base py-1 px-2 active:scale-95 transition-transform`}>{ props.children }</button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    width: PropTypes.string,
    bg: PropTypes.string,
    textColor: PropTypes.string,
}
Button.defaultProps = {
    bg: 'bg-primaryYellow',
};