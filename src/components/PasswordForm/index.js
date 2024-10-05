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

function PasswordForm({ generatedPassword, setGeneratedPassword = () => {} }) {
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
        console.log(name, checked);
        values[name] = checked;
        setFormState(values);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let tempPassword = "";

        if (formState.uppercase) {
            tempPassword += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if (formState.lowercase) {
            tempPassword += "abcdefghijklmnopqrstuvwxyz";
        }
        if (formState.numbers) {
            tempPassword += "1234567890";
        }
        if (formState.specialChar) {
            tempPassword += "!@#$%&";
        }

        if (tempPassword.length === 0) {
            window.alert("Please select an option to generate a new password");
            return;
        }

        let generatedPassword = "";
        for (let i = 0; i < formState.passwordLength; i++) {
            generatedPassword += tempPassword.charAt(
                Math.floor(Math.random() * tempPassword.length)
            );
        }

        setGeneratedPassword(generatedPassword);
    };

    const handleReset = () => {
        setFormState(defaultFieldValues);
        setGeneratedPassword("");
    };
    return (
        <form className={styles.form__container} onSubmit={handleSubmit}>
            <div className={styles.form__rangeRow}>
                <p>Password Length: {formState.passwordLength}</p>
                <input
                    type="range"
                    name="passwordLength"
                    min="8"
                    max="20"
                    className={styles.form__rangeField}
                    onChange={(e) => {
                        setFormState((prev) => ({
                            ...prev,
                            passwordLength: e.target.value,
                        }));
                    }}
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
                {generatedPassword ? (
                    <button
                        type="button"
                        className={styles.primary__button}
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                ) : (
                    <input
                        className={styles.primary__button}
                        type="submit"
                        name="submit"
                    />
                )}
            </div>
        </form>
    );
}

export default PasswordForm;
