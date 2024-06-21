import ISelectInput from "./interface";

const SelectInput: React.FC<ISelectInput> = ({
    name,
    className,
    value,
    onChange,
    id,
    label,
    options,
    disabled = false
}) => {
  return (
    <select
      className={`form-select ${className}`}
      name={name}
      value={value}
      onChange={onChange}
      id={id}
      role="button"
      disabled = {disabled}
    >
      {label && <option value={""}>{label}</option>}
      {options && Array.isArray(options) && options.length > 0
        ? options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))
        : null}
    </select>
  );
};

export default SelectInput;
