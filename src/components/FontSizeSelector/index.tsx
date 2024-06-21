import RadioBtn from "../setting/elements/radio-btn";

interface FontSizeSelectorProps {
  themeFontSize: string;
}

const FontSizeSelector: React.FC<FontSizeSelectorProps> = ({
    themeFontSize,
}) => {

    return (
        <div
          className="align-items-center mr-2 iq-font-style mb-4 d-flex"
          role="group"
          aria-label="First group"
          style={{width: "fit-content" }}
        >
          <RadioBtn
            name="theme_font_size"
            labelClassName="  border-0 btn-icon btn-sm"
            id="font-size-sm"
            defaultChecked={themeFontSize}
            value="theme-fs-sm"
          >
            <span className="mb-0 h6" style={{ color: "inherit" }}>
              A
            </span>
          </RadioBtn>
          <RadioBtn
            name="theme_font_size"
            labelClassName="  border-0 btn-icon"
            id="theme-fs-md"
            defaultChecked={themeFontSize}
            value="theme-fs-md"
          >
            <span className="mb-0 h4" style={{ color: "inherit" }}>
              A
            </span>
          </RadioBtn>
          <RadioBtn
            name="theme_font_size"
            labelClassName="  border-0 btn-icon"
            id="theme-fs-lg"
            defaultChecked={themeFontSize}
            value="theme-fs-lg"
          >
            <span className="mb-0 h2" style={{ color: "inherit" }}>
              A
            </span>
          </RadioBtn>
        </div>
    );
};

export default FontSizeSelector;
