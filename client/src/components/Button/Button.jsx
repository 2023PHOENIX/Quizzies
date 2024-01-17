const Button = ({ text, color, bgColor }) => {
  const style = {
    border: "none",
    backgroundColor: bgColor,
    color: color,
    width: "17rem",
    height: "2.8rem",
    borderRadius: "10px",
    boxShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.25)",
    fontSize: "1.2rem",
  };
  return (
    <button style={style} onClick={() => console.log("clicked")}>
      {text}{" "}
    </button>
  );
};

export default Button;
