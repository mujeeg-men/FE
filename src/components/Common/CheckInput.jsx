import Button from "./Button";
const CheckInput = ({
  value,
  onChange,
  label,
  isValidation = false,
  validationText,
  type = "text",
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        width: "100%",
      }}
    >
      <span>{label}</span>
      <div style={{display: 'flex'}}>
        <input
          type={type}
          value={value}
          onChange={onChange}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid gray",
            width: "100%",
          }}
        />
        <button style={{padding: '10px 10px', whiteSpace: 'nowrap', borderRadius: 5, border: '1px solid gray'}}>중복확인</button>
      </div>
      <span style={{ height: 16, color: "red" }}>
        {isValidation && validationText}
      </span>
    </div>
  );
};

export default CheckInput;
