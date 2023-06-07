import React, { useState } from 'react'

const AppTask = () => {
    const [isColor, setIsColor] = useState('#343446');

    const onChangeColors = () => {
        var val = Math.floor(1000 + Math.random() * 9000);
        setIsColor(`#${val}`)
    }

    return (
        <div style={{ height: '100vh', backgroundColor: isColor, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button style={{ cursor: 'pointer' }} onClick={() => onChangeColors()}>Change Color</button>
        </div>
    )
}

export default AppTask