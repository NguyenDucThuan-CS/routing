import React, {memo} from 'react'

 function Child() {
   
    return (
        <div>
            <h3>Child component</h3>
        </div>
    )
}

export default memo(Child);