import "./Section.css"
import img2 from "../src/img/Vector (2).png";

function Section() {
    return(
        <section>
         <div className="section_text">
     <div className="section_text__name">
   <h1 className="text-name__h1">For Your Business</h1>
     </div>
     <div className="section_text__mini-text">
    <p className="text-name__p">Вы сможете с легкостью подготовить коммерческое предложение или сделать смету онлайн </p>
    <p className="p_jt">учитывающие потребности клинета</p>
     </div>
         </div>

        

       
         <div className="section_block">

         <div className="block">
        <img className="block_img" src={img2} alt="" />
        <h1 className="block_h1">Эффект видно сразу</h1>
        <p className="block_p">Сервис не нужно долго изучать — <br />
         отдел продаж сможет тут же в нём <br /> работать. </p>
         </div>


         <div className="block1">
         <img className="block_img" src={img2} alt="" />
        <h1 className="block_h1">Эффект видно сразу</h1>
        <p className="block_p">Сервис не нужно долго изучать — <br />
         отдел продаж сможет тут же в нём <br /> работать. </p>
         </div>
         <div className="block2">
         <img className="block_img" src={img2} alt="" />
        <h1 className="block_h1">Эффект видно сразу</h1>
        <p className="block_p">Сервис не нужно долго изучать — <br />
         отдел продаж сможет тут же в нём <br /> работать. </p>
         </div>
       
        
         
         
         <div className="block3">
         <img className="block_img" src={img2} alt="" />
        <h1 className="block_h1">Эффект видно сразу</h1>
        <p className="block_p">Сервис не нужно долго изучать — <br />
         отдел продаж сможет тут же в нём <br /> работать. </p>
         </div>
         <div className="block4">
         <img className="block_img" src={img2} alt="" />
        <h1 className="block_h1">Эффект видно сразу</h1>
        <p className="block_p">Сервис не нужно долго изучать — <br />
         отдел продаж сможет тут же в нём <br /> работать. </p>
         </div>
         <div className="block5">
         <img className="block_img" src={img2} alt="" />
        <h1 className="block_h1">Эффект видно сразу</h1>
        <p className="block_p">Сервис не нужно долго изучать — <br />
         отдел продаж сможет тут же в нём <br /> работать. </p>
         </div>
       
         </div>
         
        </section>
    )
}
export default Section 