import React, { Component } from 'react'
import Mouse from './Mouse'
import Cat from './Cat'
import MouseWithCat from './MouseWithCat'
import WithMouse from './WithMouse'

const WrapperMose = WithMouse(Cat);
export default class MouseTracker extends Component {
     /*  getXY = (mouse) => {
          return <Cat mouse = {mouse}/>
      } */
    
      render() {
          return (
            <>
              {/* <Mouse render = {(mouse)=><Cat mouse={mouse} />}/> */}
              <WrapperMose />
            </>
          )
      }
       
}
