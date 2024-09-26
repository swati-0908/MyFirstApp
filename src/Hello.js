import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1>hello shubham</h1>
    //     </div>
    // )
return React.createElement(
	'div',
	null,
	React.createElement('div', 'h2', 'Hello Swati')
    )
}

export default Hello

