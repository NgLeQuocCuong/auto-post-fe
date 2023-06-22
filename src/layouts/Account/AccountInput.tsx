import { useRef } from 'react'
import './index.scss';
function AccountInput(props: any) {
    const formLabel = useRef<HTMLLabelElement>(null);
    const formInput = useRef<HTMLInputElement>(null);
    const handleFocus = () => {
        if (formLabel.current !== null) {
            formLabel.current.style.display = 'inline-block';
        }
        if (formInput.current !== null) {
            formInput.current.style.border = '1px solid blue';
        }
    };
    const handleBlur = () => {
        if (formInput.current?.value === '' && formLabel.current !== null) {
                formLabel.current.style.display = 'none';
        }
        if (formInput.current !== null) {
            formInput.current.style.border = '1px solid #868686';
        }
    };
    return (
        <div className="account-input-container">
            <label ref={formLabel} className="account-input__label">{props.label}</label>
            <input ref={formInput} type={props.type} placeholder={props.label} onFocus={handleFocus} onBlur={handleBlur} />
        </div>
    )
}

export default AccountInput;
