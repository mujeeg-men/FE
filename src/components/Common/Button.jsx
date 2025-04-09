const Button = ({ children, func }) => {
  return (
    <button
      style={{ borderRadius: "5px", padding: "10px 20px", textAlign: "center", border: "1px solid gray", cursor: 'pointer' }}
      onClick={func}
    >
      {children}
    </button>
  );
};

export default Button;
