import Image from "next/image";
import headerImage from "@/app/components/Images/headerback.png";
import LogoImage from "@/app/components/Images/Meubel House_Logos-05.png";
import iconsImage from "@/app/components/Images/icons8-arrow-right-50.png";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import SlytherineImage from "@/app/components/Images/syltherine.png";
import LeviosaImage from "@/app/components/Images/leviosa.png";
import LolitoImage from "@/app/components/Images/lolito.png";
import RespiraImage from "@/app/components/Images/respira.png";
//overlay image product 2
import OverlayImage from "@/app/components/Images/Overlay.png"


export default function Contact(){
    return(
    <div className="w-[1440px] h-[2365px]">
         <section id="shop" className="shop">
                <Header />
            <div className="container w-1440 h-316 flex">
            <div className="main">
{/*--------------------------- title image --------------------------- */}
        <div className="header-image w-[1440px] h-[316px]">
           <Image src={headerImage} alt="" width={1440} height={316} objectFit="cover"></Image>
        </div>
         <div className="card-s1 w-196 h-133 flex">
            <div className="s1-logo">
           <Image src={LogoImage} alt="" width={77} height={77}></Image>
            </div>
            <h2 className="card-s1-h2"> Shop </h2>
            </div>

            <div className="card-s2">
            <p className="card-s2-p"><b>Home</b></p> 
            <p className="card-s2-p2"> Shop </p>
            </div>
            <div className="card-s3-icon">
            <Image src={iconsImage} alt="" width={20} height={16}></Image>
            </div>
            </div>
  {/* /*--------------------------- filter ------------------------------ */}
  <div className="filter-section w-1440 h-100">
    <div className="filter w-85 h-30">
    <i className="bi bi-filter"></i>
    <p className="filter-p">Filter</p>
    <i className="bi bi-grid-fill"></i>
    <i className="bi bi-phone-landscape"></i>
    |
    <p className="phrase">Showing 1–16 of 32 results</p>
    <p className="show">Show</p>
    <input className="input-16" name="16" id="16" 
            required placeholder="16"></input>
    <p className="sort">Sort by</p>
    <input className="input-default" name="default" id="default" 
            required placeholder="Default"></input>
    </div>
</div>
<br />
<br />
<br />
    { /*--------------------------- products ---------------------------*/}
<div className="w-1440 h-2051">
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


  </div>
{/* ------------------------products again-------------------------------- */}
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
                <div className="child-card2-new">
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
{/* ------------------------products again-------------------------------- */}
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
                <div className="child-card2-new">
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
{/* ------------------------products again-------------------------------- */}
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
                <div className="child-card2-new">
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
 { /*--------------------------- pages ---------------------------*/}        
<div className="btns-4">
    <button className="btns-1"> 1 </button>
    <button className="btns"> 2 </button>
    <button className="btns"> 3 </button>
    <button className="nextbtn"> Next </button>

</div>
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
 



  <Footer />
            </div>
            </section>
            </div>
            );
            }
