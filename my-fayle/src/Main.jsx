import "./Main.css"
import img1 from "../src/img/Coder.png";

function Main() {
    return (
        <main>
            <div className="main_text">
                <div className="main_text__name">
                    <h1 className="main_text__h1">We help sales managers <br />
                        with no experience sell <br />
                        more and faster</h1>
                </div>
                <div className="main_text__mini">
                    <p className="main_text__p">Sed ut perspiciatis unde omnis iste natus error sit <br />
                        voluptatem accusantium doloremque laudantium, totam <br />
                        rem aperiam, eaque ipsa quae ab illo inventore veritatis et <br />
                        quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
                <div className="main_text__btn">
                    <button className="main_text__btn-blue">Get Started</button>
                </div>
            </div>
            <div className="main_img">
                <img src={img1} alt="" />
            </div>
        </main>

    )
}
export default Main 