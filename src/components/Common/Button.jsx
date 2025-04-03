const Button = ({ children }) => {
  return (
    <button
      style={{ borderRadius: "5px", padding: "10px 20px", textAlign: "center", border: "1px solid gray" }}
    >
      {children}
    </button>
  );
};

export default Button;
