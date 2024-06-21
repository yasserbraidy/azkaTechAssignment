import {memo} from 'react'

import RadioBtn from '../../elements/radio-btn'
import ICardStyle from './interface'

const CardStyle = memo((props: ICardStyle) => {
   return (
      <>
         <h6 className="mt-4 mb-3">Card Style</h6>
         <div className="d-grid gap-3 grid-cols-2 mb-3">
               <RadioBtn name="card_style" id="card_default" labelClassName="d-block" defaultChecked={props.cardStyle} value="card-default" >
                  Default
               </RadioBtn>
               <RadioBtn name="card_style" id="card_glass" labelClassName="d-block" defaultChecked={props.cardStyle} value="card-glass" >
                  Glass
               </RadioBtn>
         </div>
         <RadioBtn name="card_style" id="card_transperant" labelClassName="d-block" defaultChecked={props.cardStyle} value="card-transparent" >
                  Transparent Style
               </RadioBtn>
      </>
   )
})

CardStyle.displayName="CardStyle"
export default CardStyle