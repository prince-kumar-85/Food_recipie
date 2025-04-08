import React from 'react'

function Model({children,onClose}) {
  return (
    <>
    <div className='backdrop' onClick={onClose}>
        <dialog className='modal'  open>
            {children}

            </dialog>

    </div>
      
    </>
  )
}

export default Model
