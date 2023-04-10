import img from "../src/img/Group 40.png";
import "./App.css"

function App() {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar_ison">
                    <img src={img} alt="" />
                </div>
                <div className="navbar_link">
                    <a href="#" className="">Home</a>
                    <a href="#" className="">Pricing</a>
                    <a href="#" className="">Templates</a>
                    <a href="#" className="">Blog</a>
                    <a href="#" className="">Cases</a>
                </div>
                <div className="navbar_btn">
                    <button className="navbar_btn__Up">Sing Up</button>
                    <button className="navbar_btn__In">Log in</button>
                </div>
            </nav>
        </header>
    )
}

export default App;