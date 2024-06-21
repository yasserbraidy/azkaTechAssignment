import { memo } from "react";
import { useDispatch } from "react-redux";
import SettingAction from "../../../../store/setting/actions";
import IRadio from "./interface";

const RadioBtn = memo((props: IRadio) => {
  const dispatch = useDispatch();
  const radioCheckValue = (selector: string, value: string) => {
    if (selector === value) {
      return true;
    }
    return false;
  };
  return (
    <div className={`${props.className}`}>
      <input
        type="radio"
        value={props.value}
        className="btn-check"
        name={props.name}
        id={props.id}
        autoComplete="off"
        defaultChecked={radioCheckValue(props.defaultChecked, props.value)}
        onClick={() =>
          dispatch((SettingAction as any)[props.name](props.value))
        }
      />
      <label
        className={`btn btn-border  ${props.labelClassName}`}
        htmlFor={props.id}
      >
        {props.children}
      </label>
      {props.imgComponent ? (
        <span className="mt-2"> {props.label || ""} </span>
      ) : (
        ""
      )}
    </div>
  );
});

RadioBtn.displayName = "RadioBtn";
export default RadioBtn;
