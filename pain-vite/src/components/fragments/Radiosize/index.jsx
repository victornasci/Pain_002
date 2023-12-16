import "./styles.css";

export const RadioSize = ({ name, className, type }) => {
  return <input className={className} type={type} name={name} />;
};
