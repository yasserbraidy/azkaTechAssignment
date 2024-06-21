import {memo,Fragment} from 'react'
import RadioBtn from '../../elements/radio-btn'
import IFooterStyle from './interface'


const FooterStyle = memo((props: IFooterStyle) => {
  
  return (
    <Fragment>
        <div className="mt-4 mb-3">
              <h6 className="d-inline-block mb-0 me-2">Footer </h6>
              <small className="badge bg-warning rounded-pill">Tip</small>
            </div>
            <div className="d-grid gap-3 grid-cols-3 mb-4">
              <RadioBtn name="footer" id="footer_Sticky" labelClassName="d-block" defaultChecked={props.footerStyle} value="sticky" >
                    Sticky
                </RadioBtn>
                <RadioBtn name="footer" id="footer_default" labelClassName="d-block" defaultChecked={props.footerStyle} value="default" >
                    Default
                </RadioBtn>
                <RadioBtn name="footer" id="footer_glass" labelClassName="d-block" defaultChecked={props.footerStyle} value="glass" >
                    Glass
                </RadioBtn>
          </div>
    </Fragment>
  )
})

FooterStyle.displayName="FooterStyle"
export default FooterStyle