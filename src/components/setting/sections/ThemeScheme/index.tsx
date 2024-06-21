import {memo} from 'react'
import RadioBtn from '../../elements/radio-btn'

// Images
import image1 from '../../../../assets/images/settings/dark/01.png'
import image2 from '../../../../assets/images/settings/light/01.png'
import image3 from '../../../../assets/images/settings/dark/02.png'
import image4 from '../../../../assets/images/settings/light/02.png'
import IThemeScheme from './interface'
import FontSizeSelector from '../../../FontSizeSelector'
import { useSelector } from 'react-redux'
import { theme_font_size } from '../../../../store/setting/selectors'

const ThemeScheme = memo((props: IThemeScheme) => {
    const themeFontSize = useSelector(theme_font_size);

    return (
      <>
        {/* <h6 className="mb-3">Theme</h6> */}
        <div className="d-grid gap-2 grid-cols-2 mb-4">
          {/* <RadioBtn
            name="theme_scheme"
            id="color-mode-auto"
            labelClassName="d-block"
            defaultChecked={props.themeScheme}
            value="auto"
          >
            <svg
              width="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="currentColor" d="M7,2V13H10V22L17,10H13L17,2H7Z" />
            </svg>
            Auto
          </RadioBtn> */}
          <RadioBtn
            name="theme_scheme"
            id="color-mode-dark"
            labelClassName="d-block"
            defaultChecked={props.themeScheme}
            value="dark"
          >
            <svg
              width="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M9,2C7.95,2 6.95,2.16 6,2.46C10.06,3.73 13,7.5 13,12C13,16.5 10.06,20.27 6,21.54C6.95,21.84 7.95,22 9,22A10,10 0 0,0 19,12A10,10 0 0,0 9,2Z"
              />
            </svg>
            Dark
          </RadioBtn>
          <RadioBtn
            name="theme_scheme"
            imgComponent
            id="color-mode-light"
            labelClassName="d-block"
            defaultChecked={props.themeScheme}
            value="light"
          >
            <svg
              width="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"
              ></path>
            </svg>
            Light
          </RadioBtn>
        </div>
        <div className="d-grid gap-3 grid-cols-2 mb-4">
          <RadioBtn
            name="theme_scheme_direction"
            imgComponent={true}
            label="English"
            className="text-center"
            labelClassName="p-0"
            id="theme-scheme-direction-ltr"
            defaultChecked={props.themeSchemeDirection}
            value="ltr"
          >
            <img
              src={image1}
              alt="ltr"
              className={`mode dark-img img-fluid`}
              data-setting="dir-mode"
              data-name="dir"
              data-value="ltr"
              loading="lazy"
            />
            <img
              src={image2}
              alt="ltr"
              className={`mode light-img img-fluid`}
              data-setting="dir-mode"
              data-name="dir"
              data-value="ltr"
              loading="lazy"
            />
          </RadioBtn>
          <RadioBtn
            name="theme_scheme_direction"
            imgComponent={true}
            label="Arabic"
            className="text-center"
            labelClassName="p-0"
            id="theme-scheme-direction-rtl"
            defaultChecked={props.themeSchemeDirection}
            value="rtl"
          >
            <img
              src={image3}
              alt="rtl"
              className={` mode dark-img img-fluid`}
              data-setting="dir-mode"
              data-name="dir"
              data-value="rtl"
              loading="lazy"
            />
            <img
              src={image4}
              alt="rtl"
              className={` mode light-img img-fluid`}
              data-setting="dir-mode"
              data-name="dir"
              data-value="rtl"
              loading="lazy"
            />
          </RadioBtn>
        </div>
        {/* <div
          style={{
            display: "block",
            margin: "auto",
            width: 'fit-content'
          }}
        >
          <FontSizeSelector themeFontSize={themeFontSize} />
        </div> */}
      </>
    );
}
)
ThemeScheme.displayName = 'ThemeScheme'
export default ThemeScheme