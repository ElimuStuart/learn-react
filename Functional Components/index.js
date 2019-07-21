
// const MyApp = () => {
//     return (
//         <ul>
//             <li>1</li>
//             <li>2</li>
//             <li>3</li>
//         </ul>
//     );
// }

// ReactDOM.render(<MyApp />, document.querySelector("#root"))

const MyInfo = () => {
    return (
        <div>
            <p>My name is Stuart Elimu</p>
            <p>I like soccer + music, I'd like to have my vaccations in the following cities:</p>
            <ul>
                <li>Jinja</li>
                <li>Kigali</li>
                <li>Nairobi</li>
            </ul>
        </div>
    )
};

ReactDOM.render(<MyInfo />, document.querySelector("#root"));