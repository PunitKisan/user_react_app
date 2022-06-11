import styles from './Input.module.css';

const Input = (props) => {
    return (
        <input
            type={props.type}
            value={props.value}
            className={styles.input}
            name={props.name}
            placeholder={props.placeholder}
            {...props.Event}
        />
    );
}

export default Input;