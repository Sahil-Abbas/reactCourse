import React, { useEffect } from 'react'

const BookComponent = (props) => {
    useEffect(() => {
      console.log('ComponentDidMount')
      return () => {
        console.log('ComponentWillUnMount')
      }
    }, [])
    
    return (
        <>
            <div>{props.book}</div>
        </>
    )
}

export default BookComponent