import styles from "./Container.module.css";
const Container = (props) => {
  return (
    <div
      className={
        props.type === true
          ? `${styles.container} ${styles.box}`
          : styles.container
      }
    >
      {props.children}
    </div>
  );
};
export default Container;
