const Input = ({ value, onChange, label, isValidation=false, validationText, type="text" }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px", width: "100%" }}>
      <span>{label}</span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid gray",
          width: '100%'
        }}
      />
      <span style={{height: 16, color: 'red'}}>{isValidation && validationText }</span>
    </div>
  );
};

export default Input;
