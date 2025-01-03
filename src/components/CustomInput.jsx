import PropTypes from 'prop-types';

export default function CustomInput({ id, type, label, placeholder, value, onChange, ...rest }) {
    return (
        <>
            <label
                htmlFor={id}
                className="block mb-2 font-medium"
            >
                {label}
            </label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...rest}
                className="block mb-3 w-full bg-highlightWhite outline-none rounded-2xl p-2 border-2 focus:border-primaryGreen focus:ring-primaryGreen"
            />
        </>
    )
}

CustomInput.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    rest: PropTypes.object,
}