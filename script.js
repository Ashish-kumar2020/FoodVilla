import React from 'react';
import ReactDOM from 'react-dom/client';
import '/style.css';
// import HeaderComponent from './HeaderComponent';
// const heading = React.createElement('h1',
// {
//     id: 'title',
//     key:"head1"
// },
// "heading 1s"
// );

// const heading2 = React.createElement('h1',{
//     id: "title",
//     key:"head2"
// },"heading 2");

// const container = React.createElement('div',{
//     id: "container",
// },[heading,heading2]);
// const att = (
//     <p>Functional Component</p>
// )
const HeaderComp = ()=>{
    return (
        // <div><h1>React from Functional</h1></div>
        <div className="container">
            <h1>Logo</h1>
            <input type="text" placeholder='Search Here...' id="search-bar"/>
            <div className="side-nav">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
            </div>
        </div>
    )
}

// console.log(container);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComp />);