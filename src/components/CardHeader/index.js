import React from "react";
import styles from "../styles/components/cardHeader.module.css";
function CardHeader({ generatedPassword = "" }) {
    return (
        <div className={styles.header__container}>
            {generatedPassword.length ? (
                <>
                    <p>{generatedPassword}</p>
                    <button>Copy</button>
                </>
            ) : (
                <p>Generated Passsword</p>
            )}
        </div>
    );
}

export default CardHeader;
