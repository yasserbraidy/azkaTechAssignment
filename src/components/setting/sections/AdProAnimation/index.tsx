import { memo } from 'react'
import RadioBtn from '../../elements/radio-btn'
import IAdProAnimation from './interface';

const AdProAnimation = memo((props: IAdProAnimation) => {
  return (
    <>
      <div>
        <h6 className="d-inline-block mb-3 me-2">Page Transition </h6>
        <small className="badge bg-warning rounded-pill">Tip</small>
      </div>
      <div className="d-grid gap-3 grid-cols-2 mb-4">
        <RadioBtn name="theme_transition" id="page-animation" labelClassName="d-block" defaultChecked={props.animation} value="theme-with-animation" >
            Animation
        </RadioBtn>
        <RadioBtn name="theme_transition" id="without-page-animation" labelClassName="d-block" defaultChecked={props.animation} value="theme-without-animation" >
            No Animation
        </RadioBtn>
      </div>
    </>
  )
})

AdProAnimation.displayName="AdProAnimation"
export default AdProAnimation