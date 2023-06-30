import React from 'react'

const onClick = (ev,id,color) =>{
    alert('on click ' + id);
}


const GameCircle = ({id,color,children}) => {
    console.log(id);
  return (
    <div style={{backgroundColor:color, width:100, height:100}} onClick={(ev) => onClick(ev,id,color)}>
        {children}
    </div>
  )
}

export default GameCircle