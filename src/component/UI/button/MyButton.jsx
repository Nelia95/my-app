import classes from "./MyButton.module.css";

export const MyButton = (props) => {
  return <button {...props} className={classes.myBtn} />;
};
