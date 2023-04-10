import "./Aside.css"
import img3 from "../src/img/Group 42.png";
import img4 from "../src/img/Group 43.png";
function Aside() {
    return(
        <aside>
            <div className="aside_block1">
                <div className="aside_block1__text">
                    <h1 className="aside_block1__name">Easy to use, advanced <br /> Estimates editor</h1>
                    <p className="aside_block1__name1">Our easy to use, advenced editor will help you create <br />
                     estimates faster, confident and without any errors.</p>
                </div>
                <div className="aside_block1__img">
                    <img src={img3} alt="" />
                </div>
            </div>
            <div className="aside_block2">
                <div className="aside_block2__img">
               <img src={img4} alt="" />
                </div>
                <div className="aside_block2__text">
                    <h1 className="aside_block2__name">Hourly rates, item <br />
                     and services lists</h1>
                    <p className="aside_block2__name1">Our easy to use, advenced editor will help you create <br />
                     estimates faster, confident and without any errors.</p>
                </div>
            </div>
        </aside>
    )
}
export default Aside 