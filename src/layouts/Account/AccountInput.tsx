import { useState, memo, FC, FocusEvent } from 'react'
import './index.scss';

interface AccountInputProps {
  label: string;
  type: string;
}

const AccountInput: FC<AccountInputProps> = memo(({ label, type }) => {
    const [isLabelVisible, setIsLabelVisible] = useState(false);
    const [isInputFocused, setIsInputFocused] = useState(false);

    const handleFocus = () => {
        setIsLabelVisible(true);
        setIsInputFocused(true);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        if (e.target.value.length === 0) {
            setIsLabelVisible(false); //Don't show label when the input is empty
        }
        setIsInputFocused(false);
    };

    return (
        <div className="account-input-container">
            <label className={`account-input__label ${isLabelVisible && 'visible'}`}>{label}</label>
            <input 
                className={`account-input__input ${isInputFocused && 'focused'}`} 
                type={type} placeholder={label} 
                onFocus={handleFocus} onBlur={handleBlur} 
            />
        </div>
    );
});

AccountInput.displayName = 'AccountInput';
export default AccountInput;