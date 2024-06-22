import { InputGroup } from "react-bootstrap";
import ITextArea from "./interface";

export default function TextAriaInput(props: ITextArea) {
    const {
        label,
        className,
        value,
        id,
        rows = 2,
        name,
        onChange,
        placeholder
    } = props;
    return (
        <InputGroup className="mb-3">
                {label && <span className="input-group-text">{props.label}</span>}
                <textarea
                    id={id}
                    className={`form-control ${className}`}
                    value={value}
                    rows={rows}
                    onChange={onChange}
                    name={name}
                    placeholder={placeholder}
                    aria-label="With textarea"
                ></textarea>
        </InputGroup>
    );
}