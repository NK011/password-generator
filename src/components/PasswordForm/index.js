import React, { useState } from "react";
import styles from "../styles/components/PasswordGenerator.module.css";
function FormField({ type, name, label, onChange }) {
    return (
        <div className={styles.form__field}>
            <label>{label}</label>
            <input type={type} name={name} onChange={onChange} />
        </div>
    );
}

function PasswordForm({ setGeneratedPassword = () => {} }) {
    const defaultFieldValues = {
        passwordLength: 8,
        uppercase: false,
        lowercase: false,
        numbers: false,
        specialChar: false,
    };

    const [formState, setFormState] = useState(defaultFieldValues);
    const handleInputChange = (e) => {
        const values = { ...formState };
        const { name, checked } = e?.target;
        values[name] = checked;
        setFormState(values);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let tempPassword = ""

        if(formState.uppercase) {
            tempPassword += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        }
        if(formState.lowercase) {
            tempPassword += "abcdefghijklmnopqrstuvwxyz"
        }
        if(formState.numbers) {
            tempPassword += "1234567890"
        }
        if(formState.numbers)
    };
    return (
        <form className={styles.form__container} onSubmit={handleSubmit}>
            <div className={styles.form__row}>
                <input
                    type="range"
                    name="passwordLength"
                    min="8"
                    max="20"
                    className={styles.form__rangeField}
                    onChange={handleInputChange}
                    value={formState["passwordLength"]}
                />
            </div>
            <div className={styles.form__row}>
                <FormField
                    type="checkbox"
                    name="uppercase"
                    label="Include Uppercase"
                    onChange={handleInputChange}
                    value={formState["uppercase"]}
                />
                <FormField
                    type="checkbox"
                    name="lowercase"
                    label="Include Lowercase"
                    onChange={handleInputChange}
                    value={formState["lowercase"]}
                />
            </div>
            <div className={styles.form__row}>
                <FormField
                    type="checkbox"
                    name="numbers"
                    label="Include Numbers"
                    onChange={handleInputChange}
                    value={formState["numbers"]}
                />
                <FormField
                    type="checkbox"
                    name="specialChar"
                    label="Include Spcial Characters"
                    onChange={handleInputChange}
                    value={formState["specialChar"]}
                />
            </div>
            <div className={styles.form__row}>
                <FormField type="submit" name="submit" />
            </div>
        </form>
    );
}

export default PasswordForm;
