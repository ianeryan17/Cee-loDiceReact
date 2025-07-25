import React from 'react';

const CustomButton = ({ title, onPress, buttonStyle, textStyle, disabled }) => (
    <button
        onClick={onPress}
        style={{
            ...buttonStyle, 
            ...(disabled ? styles.disabledButton : styles.enabledButton)}} // Apply different styles based on the disabled state        
        disabled={disabled}
    >
        <span style={textStyle}>{title}</span>
    </button>
);

const styles = {
    enabledButton: {
        backgroundColor: 'black', // Adjust color for enabled state
        borderColor: 'black',
        borderWidth: '10px',
        padding: '10px 20px', // Add padding for better appearance
        borderRadius: '5px', // Add border radius for rounded corners
        color: 'white', // Set text color
        cursor: 'pointer', // Show pointer cursor on hover
    },
    disabledButton: {
        backgroundColor: 'black', // Adjust color for disabled state
        opacity: 0.5,
        cursor: 'not-allowed', // Show not-allowed cursor when disabled
    },
};

export default CustomButton;
