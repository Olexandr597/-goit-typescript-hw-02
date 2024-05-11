import css from "./ErrorMessage.module.css";
const ErrorMessage = () => {
  return (
    <div>
      <p className={css.errorMessage}>
        something went wrong, please reload the page!
      </p>
    </div>
  );
};

export default ErrorMessage;
