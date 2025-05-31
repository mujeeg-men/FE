const Button = ({ children, type = "button", func, onKeyDown }) => {
  return (
    <button
      type={type}
      style={{
        borderRadius: "5px",
        padding: "10px 20px",
        textAlign: "center",
        border: "1px solid gray",
        cursor: "pointer",
      }}
      onClick={func}
      onKeyDown={onKeyDown}
    >
      {children}
    </button>
  );
};

export default Button;
