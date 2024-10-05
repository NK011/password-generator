import React from "react";
import styles from "../styles/components/cardHeader.module.css";
function CardHeader({ generatedPassword = "" }) {
    const handleCopyPassword = async () => {
        try {
            await navigator.clipboard.writeText(generatedPassword);
            alert("Copied to clipboard!");
        } catch (err) {
            console.error("Failed to copy text: ", err);
            alert("Failed to copy!");
        }
    };

    return (
        <div className={styles.header__container}>
            {generatedPassword.length ? (
                <>
                    <p>{generatedPassword}</p>
                    <button
                        className={styles.primary__button}
                        onClick={handleCopyPassword}
                    >
                        Copy
                    </button>
                </>
            ) : (
                <p>Generat Passsword</p>
            )}
        </div>
    );
}

export default CardHeader;
