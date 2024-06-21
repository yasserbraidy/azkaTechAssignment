import { memo } from 'react'
import CheckboxBtn from '../../elements/CheckBox'
import INavBar from './interface';



const NavbarHide = memo((props: INavBar) => {
  return (
    <>
        <div className="d-flex justify-content-between align-items-center">
            <h5 className="mt-4 mb-3">Navbar Hide</h5>
            <div className="form-check form-switch">
                <CheckboxBtn
                    btnName="navbar_show"
                    type="switch"
                    className="text-center"
                    label="Mini"
                    labelClassName="overflow-hidden p-0"
                    id="navbar-hide"
                    defaultChecked={props.navbarHide}
                    value="iq-navbar-none"
                >
                    
                </CheckboxBtn>
            </div>
        </div>
    </>
  );
});

NavbarHide.displayName = 'NavbarHide'
export default NavbarHide