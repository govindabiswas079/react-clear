import React from 'react'

const Exmaple = () => {

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const keys = fruits.keys();

    let text = "";
    for (let x of keys) {
        text += x + "<br>";
    }
    console.log(text)
    return (
        <div>Exmaple</div>
    )
}

export default Exmaple