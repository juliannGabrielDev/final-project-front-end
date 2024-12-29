import PropTypes from 'prop-types';

export default function Link({ children }) {
    return (
        <li className='font-bold font-karla text-lg'><a href="#">{ children }</a></li>
    )
}

Link.propTypes = {
    children: PropTypes.node.isRequired,
};