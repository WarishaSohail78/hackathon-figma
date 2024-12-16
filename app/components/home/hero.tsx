import Image from "next/image";
import BackgroundImage from "@/app/components/Images/background.png";
import Footer from "@/app/components/footer";
// browsing images
import DiningImage from"@/app/components/Images/image 106.png";
import LivingImage from "@/app/components/Images/image 100.png";
import BedroomImage from"@/app/components/Images/image 101.png";
// product images
import SlytherineImage from "@/app/components/Images/syltherine.png";
import LeviosaImage from "@/app/components/Images/leviosa.png";
import LolitoImage from "@/app/components/Images/lolito.png";
import RespiraImage from "@/app/components/Images/respira.png";
import GrifoImage from "@/app/components/Images/grifo.png";
import MuggoImage from "@/app/components/Images/muggo.png";
import PingkyImage from "@/app/components/Images/pingky.png";
import PottyImage from "@/app/components/Images/potty.png";
//overlay image product 2
import OverlayImage from "@/app/components/Images/Overlay.png";
//inspiration images
import inspiration1Image from "@/app/components/Images/inspiration-bedroom.png";
import inspiration2Image from "@/app/components/Images/inspiration.png";
import indicatorImage from "@/app/components/Images/Indicator.png";
//setup sharing images
import image2 from "@/app/components/Images/Rectangle 36.png";
import image3 from "@/app/components/Images/Rectangle 38.png";
import image4 from "@/app/components/Images/Rectangle 40.png";
import image7 from "@/app/components/Images/Rectangle 43.png";
import image8 from "@/app/components/Images/Rectangle 45.png";

import image9 from "@/app/components/Images/Rectangle 37.png";
import image10 from "@/app/components/Images/Rectangle 39.png";
import image5 from "@/app/components/Images/Rectangle 41.png";
import image6 from "@/app/components/Images/Rectangle 44.png";
export default function Home() {
    return (
        // hero-section
        <div className="w-[1440px] h-[716px] mx-auto">
                <section id="home" className="home">
            <div className="container w-1440 h-716 flex">
                <div className="main">
{/*--------------------------- background image --------------------------- */}
            <div className="background">
                <Image src={BackgroundImage} alt="" width={1440} height={716} objectFit="cover" className="object-cover"></Image>
            </div>
{/*--------------------------- overlay text ---------------------------*/}
            <div className="card">
                <p className="updates">New Arrival</p>
                <h2 className="heading">Discover Our
                    <br /> New Collection</h2>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />elit tellus, luctus nec ullamcorper mattis.</p>
                <button className="buy">Buy Now</button>
            </div>
            </div>
    
{/*--------------------------- Browse ranges ---------------------------*/}
         <div className="ranges">
            <h2 className="h2">Browse The Range</h2>
            <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         </div>
         <div className="images">
                <Image src={DiningImage} alt="" width={381} height={480} objectFit="cover" className="object-cover"></Image>
                <Image src={LivingImage} alt="" width={381} height={480} objectFit="cover" className="object-cover"></Image>
                <Image src={BedroomImage} alt="" width={381} height={480} objectFit="cover" className="object-cover"></Image>
            </div>
            <div className="images-label">
            <p>Dining</p>
            <p>Living</p>
            <p>Bedroom</p>
            </div>
{/*--------------------------- our products ---------------------------*/}
            <div className="products">
            <h2 className="h2">Our Products</h2>
            </div>
         <div className="images">
        { /*--------------------------- product 1 ---------------------------*/}
              <div className="card-image">
              <Image src={SlytherineImage} alt="" width={285} height={301} objectFit="cover" className="object-cover"></Image>
              <div className="card-info">
                <p className="p-info">-30%</p>
                </div>
              <div className="child-card">
                <h3 className="product-name">Syltherine</h3>
                <p className="p-description">Stylish cafe chair</p>
                <p className="p-price">Rp 2.500.000 <s className="s">Rp 3.500.000</s></p>
                <br />
                </div>  
                </div>
        { /*--------------------------- product 2 ---------------------------*/}
                <div className="card-image">  
                <Image src={LeviosaImage} alt="" width={285} height={301} objectFit="cover" className="object-cover"></Image>
                <div className="overlay-image">
                <Image src={OverlayImage} alt="" width={285} height={301} objectFit="cover"></Image>
                </div>
                <div className="child-card2">
                <h3 className="product-name2">Leviosa</h3>
                <p className="p-description2">Stylish cafe chair</p>
                <p className="p-price2">Rp 2.500.000 </p>
                  <br />
                </div>
                </div>
        { /*--------------------------- product 3 ---------------------------*/}
                <div className="card-image">
                <Image src={LolitoImage} alt="" width={285} height={301} objectFit="cover" className="object-cover"></Image>
                <div className="card-info">
                <p className="p-info">-50%</p>
                </div>
                <div className="child-card">
                <h3 className="product-name">Lolito</h3>
                <p className="p-description">Luxury big sofa</p>
                <p className="p-price">Rp .000.000 <s className="s">Rp 14.000.000</s></p>
                <br />
                </div>  
                </div>
        { /*--------------------------- product 4 ---------------------------*/}        
                <div className="card-image">
                <Image src={RespiraImage} alt="" width={285} height={301} objectFit="cover" className="object-cover"></Image>
                <div className="card-new">
                <p className="p-info">New</p>
                </div>
                <div className="child-card">
                <h3 className="product-name">Respira</h3>
                <p className="p-description">Outdoor bar table and stool</p>
                <p className="p-price">Rp 500.000</p>
                <br />
                </div>  
                </div>
                
        </div>
        <br />
        <div className="images">

        { /*--------------------------- product 5 ---------------------------*/}
                <div className="card-image">
                <Image src={GrifoImage} alt="" width={285} height={301} objectFit="cover" className="object-cover"></Image>
                <div className="child-card">
                <h3 className="product-name">Grifo</h3>
                <p className="p-description">Night lamp</p>
                <p className="p-price">Rp 1.500.000</p>
                 <br />
                </div>  
                </div>
        { /*--------------------------- product 6 ---------------------------*/}
                <div className="card-image">
                <Image src={MuggoImage} alt="" width={285} height={301} objectFit="cover" className="object-cover"></Image>
                <div className="card-new">
                <p className="p-info">New</p>
                </div>
                <div className="child-card">
                <h3 className="product-name">Muggo</h3>
                <p className="p-description">Small mug</p>
                <p className="p-price">Rp 150.000</p>
                <br />
                </div>
                </div>
        { /*--------------------------- product 7 ---------------------------*/}        
                <div className="card-image">
                <Image src={PingkyImage} alt="" width={285} height={301} objectFit="cover" className="object-cover"></Image>
                <div className="card-info">
                <p className="p-info">-50%</p>
                </div>
                <div className="child-card">
                <h3 className="product-name">Pingky</h3>
                <p className="p-description">Cute bed set</p>
                <p className="p-price">Rp 7.000.000 <s className="s">Rp 14.000.000</s></p>
                 <br />
                </div>
                </div>
        { /*--------------------------- product 8 ---------------------------*/}        
                <div className="card-image">
                <Image src={PottyImage} alt="" width={285} height={301} objectFit="cover" className="object-cover"></Image>
                <div className="card-new">
                <p className="p-info">New</p>
                </div>
                <div className="child-card">
                <h3 className="product-name">Potty</h3>
                <p className="p-description">Minimalist flower pot</p>
                <p className="p-price">Rp 500.000</p>
                <br />
                </div>  
                </div>  
        { /*--------------------------- show more button ---------------------------*/}       
            </div>
            <div className="btn-more">
            <button className="more">Show More</button>
            </div>
        </div>
       { /*--------------------------- Inspirations ------------------------------ */}

<div className="container-2 w-1760 h-670 flex">
  <div className="main">
    <div className="card-parent">
    { /*--------------------------- card--1 ------------------------------ */}
          <div className="card--1">
          <h2 className="i-h2">50+ Beautiful rooms <br /> inspiration</h2>
          <p className="i-subtitle">Our designer already made a lot of beautiful <br />prototipe of rooms that inspire you</p>
          <div className="btn-i">
                <button className="explore">Explore More</button>
          </div>
          </div>
    { /*--------------------------- card--2 ------------------------------ */}
          <div className="card--2">
                <Image src={inspiration1Image} alt="" width={404} height={582} objectFit="cover"></Image>
          </div>
    { /*--------------------------- card--3 ------------------------------ */}
          <div className="card--3">
                <Image src={inspiration2Image} alt="" width={372} height={486} objectFit="cover"></Image>
                <Image src={indicatorImage} alt="" width={120} height={27}  objectFit="cover"></Image>
          </div>
    </div>
  </div>
</div>
{ /*--------------------------- setup sharing ------------------------------ */}
<div className="share w-1799 h-780 flex">
         <p className="s-p">share your setup with</p>
         <h1 className="s-h1">#FuniroFurniture</h1>
</div>
<div className="s-images w-1799 h-721">
        <div className="container-images ">      
        <Image src={image2} alt="" width={274} height={382} className="img2" objectFit="cover"></Image>
        <Image src={image3} alt="" width={451} height={312} className="img3" objectFit="cover"></Image>
        <Image src={image4} alt="" width={295} height={392} className="img4" objectFit="cover"></Image>
        <Image src={image7} alt="" width={258} height={196} className="img7" objectFit="cover"></Image>
        <Image src={image8} alt="" width={425} height={433} className="img8" objectFit="cover"></Image>
        </div>
        <div className="container-images2">
        <Image src={image9} alt="" width={381} height={323} className="img9" objectFit="cover"></Image>
        <Image src={image10} alt="" width={344} height={242} className="img10" objectFit="cover"></Image>
        <Image src={image5} alt="" width={178} height={242} className="img5" objectFit="cover"></Image>
        <Image src={image6} alt="" width={248} height={196} className="img6" objectFit="cover"></Image>
        </div>
        </div>
    <Footer />    
        </section>
        </div>

    );
}