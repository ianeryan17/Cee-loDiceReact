import React from 'react';
import CustomButton from './customButton.js';

const BottomBorder = ({ stake, updateStake, lockInBet, isEditable, waitAndRoll, isRollButtonDisabled, isLockInButtonDisabled }) => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.leftHalf}>
          <StakeBox
            amount={stake}
            handleAmountChange={updateStake}
            handlePress={lockInBet}
            isLockInButtonDisabled={isLockInButtonDisabled}
            isEditable={isEditable} // Set the editability based on the isLockInButtonDisabled prop
          />
        </div>
        <div style={styles.rightHalf}>
                <CustomButton
                      title="Push to Roll"
                      onPress={waitAndRoll}
                      disabled={isRollButtonDisabled}
                      buttonStyle={{
                        ...styles.bottomButton2
                      }}
                      textStyle={styles.bottomButtonText}
                />  
        </div>
      </div>
    </div>
  );
};

const StakeBox = ({ amount, handleAmountChange, isEditable, handlePress, isLockInButtonDisabled }) => {
        const handleChange = (event) => {
                // Pass the new stake value to the handleAmountChange function
                handleAmountChange(parseFloat(event.target.value)); // Convert input value to a float
        };

        return (
          <div style={styles.rectangle}>
            <input
              style={{
                ...styles.input,
                ...(isEditable ? {} : styles.nonEditableText)
              }}
              placeholder=""
              value={amount}
              onChange={handleChange}
              type="number"
              disabled={!isEditable} // Set the input field disabled based on the isEditable prop
            />
            <CustomButton
              title="Lock In"
              onPress={handlePress}
              buttonStyle={{
                ...styles.bottomButton,
                ...styles.leftHalf,
                ...(isEditable ? {} : styles.nonEditableButton)
              }}
              textStyle={styles.bottomButtonText}
              disabled={isLockInButtonDisabled}
            />
          </div>
        );
};
      

const RollButton = ({ waitAndRoll, isRollButtonDisabled }) => {
  return (
    <CustomButton
      title="Push to Roll"
      onPress={waitAndRoll}
      disabled={isRollButtonDisabled}
      buttonStyle={styles.bottomButton2}
      textStyle={styles.bottomButtonText}
    />
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: 'transparent', // Background color
    padding: '10px',
    boxSizing: 'border-box',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftHalf: {
    flex: 1,
    marginRight: '10px',
  },
  rightHalf: {
    flex: 1,
    marginLeft: '10px',
    textAlign: 'center'
  },
  rectangle: {
    display: 'flex',
    flexDirection: 'row',
    height: '130px',
    alignItems: 'center',
    padding: '0 20px',
  },
  input: {
    border: '5px solid black',
    backgroundColor: 'white',
    borderRadius: '5px',
    borderTop: '5px solid black',
    marginRight: '10px',
    height: '80px',
    width: '30%',
    fontSize: '50px',
    textAlign: 'right',
    fontFamily: 'aanothertag',
  },
  nonEditableText: {
    opacity: 0.1,
  },
  bottomButton: {
    marginTop: '25px',
    marginBottom: '25px',
    borderRadius: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    width: '250px',
    height: '80px',
    backgroundColor: 'blue',
  },
  bottomButton2: {
    marginTop: '25px',
    marginBottom: '25px',
    borderRadius: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    height: '80px',
  },
  bottomButtonText: {
    color: 'white',
    fontSize: '50px',
    fontFamily: 'hesorder',
  },
};

export { BottomBorder, StakeBox, RollButton };
