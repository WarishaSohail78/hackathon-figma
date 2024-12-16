import Image from "next/image";
import headerImage from "@/app/components/Images/headerback.png";
import LogoImage from "@/app/components/Images/Meubel House_Logos-05.png";
import iconsImage from "@/app/components/Images/icons8-arrow-right-50.png";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import blogImage from "@/app/components/Images/blog-material.png";
import blogImages from "@/app/components/Images/blog-material-2.png";
import blogImages3 from "@/app/components/Images/blog-material-3.png";

export default function Home() {
    return (
<div className="w-1440 h-3981">
         <section id="blog" className="blog">
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
            <h2 className="card-s1-h2"> Blog </h2>
            </div>

            <div className="card-s2">
            <p className="card-s2-p"><b>Home</b></p> 
            <p className="card-s2-p2"> Blog </p>
            </div>
            <div className="card-s3-icon">
            <Image src={iconsImage} alt="" width={20} height={16}></Image>
            </div>
            </div>
{ /*--------------------------- blogs ---------------------------*/}        
<div className="blog-image">
<Image src={blogImage} alt="" width={760} height={2490}></Image>  
</div>         
{ /*--------------------------- blogs ---------------------------*/}        
<div className="search w-120 h-40">
    <input className="input-b" id="Name"
             required placeholder=""></input>
             </div>
             <div className="search-i">
             <i className="bi bi-search"></i>
             </div>
             <div className="blog-img-3">
                <Image src={blogImages3} alt=""></Image>
             </div>
{ /*--------------------------- recent posts ---------------------------*/}        
<div className="blog-images">
<Image src={blogImages} alt="" width={370} height={650}></Image>  
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