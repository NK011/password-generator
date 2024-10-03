import React from "react";
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
    const handleInputChange = (e) => {
        console.log(e.target.checked);
    };
    return (
        <form className={styles.form__container}>
            <div className={styles.form__row}>
                <FormField
                    type="checkbox"
                    name="uppercase"
                    label="Include Uppercase"
                    onChange={handleInputChange}
                />
                <FormField
                    type="checkbox"
                    name="lowercase"
                    label="Include Lowercase"
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.form__row}>
                <FormField
                    type="checkbox"
                    name="specialChar"
                    label="Include Numbers"
                    onChange={handleInputChange}
                />
                <FormField
                    type="checkbox"
                    name="lowercase"
                    label="Include Spcial Characters"
                    onChange={handleInputChange}
                />
            </div>
        </form>
    );
}

export default PasswordForm;
