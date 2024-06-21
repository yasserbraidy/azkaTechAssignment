import {memo } from 'react'
import CheckboxBtn from '../../elements/CheckBox'
import IMenuHide from './interface'


const MenuHide = memo((props: IMenuHide) => {

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
            <h5 className="mt-4 mb-3">Menu Hide</h5>
                <div className="form-check form-switch">
                <CheckboxBtn btnName="sidebar_show" type="switch" className="text-center" label="Mini"  labelClassName="overflow-hidden p-0" id="sidebar-hide" defaultChecked={props.sidebarHide} value="sidebar-none" >
                </CheckboxBtn>
                </div>
            </div>
        </>
    )
}
)

MenuHide.displayName = 'MenuHide'
export default MenuHide