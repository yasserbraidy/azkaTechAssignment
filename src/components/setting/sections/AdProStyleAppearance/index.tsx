import {memo}from 'react'
import CheckboxBtn from '../../elements/CheckBox'
import IAdProStyleAppearance from './interface'


const AdProStyleAppearance = memo((props: IAdProStyleAppearance) => {
    return (
        <>
            <div>
                <h6 className="d-inline-block mb-3 me-2">Style Appearance </h6>
                <small className="badge bg-warning rounded-pill">Tip</small>
            </div>
            <div className="d-grid gap-3 grid-cols-3 mb-4">
                <CheckboxBtn btnName="theme_style_appearance" id="theme-style-appearance-flat" defaultChecked={props.themeStyleAppearance} value="theme-flat" >
                    Flat                    
                </CheckboxBtn>
                <CheckboxBtn btnName="theme_style_appearance" id="theme-style-appearance-bordered" defaultChecked={props.themeStyleAppearance} value="theme-bordered" >
                    Bordered                    
                </CheckboxBtn>
                <CheckboxBtn btnName="theme_style_appearance" id="theme-style-appearance-sharp" defaultChecked={props.themeStyleAppearance} value="theme-sharp" >
                    Sharp                    
                </CheckboxBtn>
            </div>
        </>
    )
}
)

AdProStyleAppearance.displayName="AdProStyleAppearance"
export default AdProStyleAppearance