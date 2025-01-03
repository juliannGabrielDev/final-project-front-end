import PropTypes from 'prop-types';

export default function H1({children, variant}) {
    return (
        <h1 className={`${variant} text-5xl md:text-6xl leading-9 font-medium font-markazi`}>{children}</h1>
    )
}

H1.propTypes = {
    children: PropTypes.string.isRequired,
    variant: PropTypes.string,
}