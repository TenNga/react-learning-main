import styles from "styled-components";

export const CardContainer = styles.article`
    padding: 4px;
    max-width: 400px;
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
export const CardImage = styles.img`
    width: 100%;
    object-fit: cover;
`;

export const AddToCardBtn = styles.button`
    width: 100%;
    padding: 8px 0px;
    border: none;
    font-weight: bold;
    transition: background-color 0.1s ease-in-out;

    &:hover {
        background-color: black;
        color: white;
        cursor: pointer;
    }
`;

export const CardControllers = styles.div`
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;

    & button {
        width: 100%;
        flex-grow: 1;
        padding: 8px 0;
        border:none;
        cursor: pointer;

        &:hover {
            background-color: black;
            color: white;
        }
    }

    & input {
        background-color: white;
        flex-grow: 2;
        text-align: center;
        padding: 8px 0;
        border: none;
    }
`;
