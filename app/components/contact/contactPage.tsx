import Image from "next/image";
import headerImage from "@/app/components/Images/headerback.png";
import LogoImage from "@/app/components/Images/Meubel House_Logos-05.png";
import iconsImage from "@/app/components/Images/icons8-arrow-right-50.png";
import Header from "@/app/components/header";

export default function Contact(){
    return(
    <div className="w-[1440px] h-[2365px] mx-auto">
         <section id="contact" className="contact">
          <Header />
            <div className="container w-1440 h-316 flex">
            <div className="main">
{/*--------------------------- title image --------------------------- */}
        <div className="header-image w-[1440px] h-[316px] mx-auto">
           <Image src={headerImage} alt="" width={1440} height={316} objectFit="cover"></Image>
        </div>
         <div className="card-c1 w-196 h-133 flex">
            <div className="c1-logo">
           <Image src={LogoImage} alt="" width={77} height={77}></Image>
            </div>
            <h2 className="card-c1-h2"> Contact </h2>
            </div>

            <div className="card-c2">
            <p className="card-c2-p"><b>Home</b></p> 
            <p className="card-c2-p2"> Contact</p>
            </div>
            <div className="card-c3-icon">
            <Image src={iconsImage} alt="" width={20} height={16}></Image>
            </div>
            </div>
 {/*--------------------------- contact section --------------------------- */}
           <div className="w-1440 h-1144 flex">
           <div className="contact-info">
            <h2 className="c-title">Get In Touch With Us</h2><br />
            <p className="c-detail">For More Information About Our Product & Services. Please Feel Free To Drop Us <br />    An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
           </div>
{/*-------------------------contact-info----------------------------------------*/}  
           <div className="w-[1058px] h-[923px] bg-[#FFFFFF] flex" >
      <div className="w-[635px] h-[923px] bg-[#FFFFFF] flex" >
        <div className="w-[531px] h-[741px] bg-[#FFFFFF] flex" >
       
        <div className="w-[393px] h-[537px] flex">
          <div className="contact-section">
            <div className="contact-item">
              <div className="c-icon">
              <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div className="details">
                <h4>Address</h4>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="c-icon">
              <i className="icon-c bi bi-telephone"></i>
              </div>
              <div className="details">
                <h4>Phone</h4>
                <p>Mobile: +(84) 546-6789
                Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="c-icon">
              <i className="bi bi-clock-fill"></i>
              </div>
              <div className="details">
                <h4>Working Time</h4>
                <p>Monday–Friday: 9:00 - 22:00 <br />
                Saturday–Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
{/*-------------------------contact-form----------------------------------------*/}        
        <form id="form">
          <div className="contact-form w-[530px] h-[121px] gap-[22]">         
             <fieldset>
             <label className="Name">Your name </label>
             <br />
             <input className="input-c" id="Name"
             required placeholder="Abc"></input>
             </fieldset>

          <fieldset>
            <label className="Name">Email address </label>
             <br />
            <input className="input-c" id="Email address" 
            required placeholder="Abc@def.com"></input>
          </fieldset>

          <fieldset>
            <label className="Name">Subject </label>
             <br />
           <input className="input-c" name="Subject" id="Subject" 
            required placeholder="This is an optional"></input>
          </fieldset>

      <fieldset>
        <label className="Name">Message </label>
        <br />
            <input className="input-c" name="Message" id="Message"  
            required placeholder="Hi! I would like to ask about"></input>
       </fieldset>
       <div className="container text-center mt=3">
        <button className="btn-c-submit"> Submit </button>
</div>
</div>
        </form>
{/*--------------------------- featured items ------------------------------ */}
        <div className="w-[1440px] h-[270px] bg-[#FFFFFF] flex" >
        <div className="w-[1334px] h-[70px] bg-[#FFFFFF] flex" >
        <div className="features">
         <div className="feature-item">
    <div className="feature-item-1 w-337 h-70 ">
    <i className="icon-c bi bi-trophy"></i>
      <h3>High Quality</h3>
      <p>crafted from top materials</p>
</div>
    <div className="feature-item-2 w-328 h-70 ">
    <i className="icon-c bi bi-check-circle"></i>
      <h3>Warranty Protection</h3>
      <p>Over 2 years</p>
</div>
    <div className="feature-item-3 w-244 h-70 ">
    <i className="icon-c bi bi-box2"></i>
      <h3>Free Shipping</h3>
      <p>Order over 150 $</p>
</div>
    <div className="feature-item-4 w-259 h-70 ">
    <i className="icon-c bi bi-telephone"></i>
      <h3>24 / 7 Support</h3>
      <p>Dedicated support</p>
                </div>
                </div>
              </div>
            </div>
           </div>
           {/*-------------------------contact-section----------------------------------------*/}  

         </div>
       </div>
     </div>
 </div>  
</div>

        </div>
        </section>
    </div> 
    );
}