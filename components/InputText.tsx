export default function InputText({
  placeholder,
  type,
  value,
  setValue,
}: {
  placeholder: string;
  type?: "input" | "textarea" | undefined; // undefined = input
  value: string;
  setValue: Function;
}) {
  return (
    <div>
      {type === "textarea" ? (
        <textarea
          rows={5}
          placeholder={placeholder}
          style={{
            width: "100%",
            padding: "12px 20px",
            margin: "8px 0",
            display: "inline-block",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
          }}
        ></textarea>
      ) : (
        <input
          placeholder={placeholder}
          onChange={(ev) => setValue(ev.target.value)}
          value={value}
          style={{
            width: "100%",
            padding: "12px 20px",
            margin: "8px 0",
            display: "inline-block",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
          }}
        ></input>
      )}
    </div>
  );
}
