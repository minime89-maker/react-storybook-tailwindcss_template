import PropTypes from 'prop-types'
import React from 'react'

const Button = ({ label }) => {
	return (
		<div>
			<button className='bg-red-500 text-white text-xl py-4 px-8 rounded-md'>{label}</button>
		</div>
	)
}

Button.propTypes = {
	label: PropTypes.string.isRequired
}

Button.defaultProps = {
	label: 'Button'
}

export default Button
