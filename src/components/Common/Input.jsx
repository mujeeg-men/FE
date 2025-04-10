const Input = ({ value, onChange, label }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px", width: "100%" }}>
      <span>{label}</span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid gray",
          width: '100%'
        }}
      />
    </div>
  );
};

export default Input;
