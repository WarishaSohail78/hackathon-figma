import Link from "next/link";

export default function footer() {
    return (
        <footer>
      <div>
        <div className="w-[1440px] h-[505px] bg-[#FFFFFF] flex ">
        <div className="w-[1240.01px] h-[419px] flex">
<hr />
{/* footer content */}
    <div className="container-footer w-[1133.01px] h-[312px] flex">
        
        <div className="footer">
        <h2>Funiro.</h2>
          <p className="text">400 University Drive Suite 200 Coral <br />
            Gables,<br />
          FL 33134 USA</p>
      </div>

{/* links */}
      <div className="column1">
          <h4 className="links">Links</h4>
          <ul className="links-names">
              <li className="link w-[48px]"><Link href="Home">Home </Link></li>
              <li className="link w-[48px]"><Link href="Shop">Shop</Link></li>
              <li className="link w-[48px]"><Link href="About">About</Link></li>
              <li className="link w-[48px]"><Link href="Contact">Contact</Link></li>
          </ul>
      </div>

{/* help section */}
      <div className="column2">
          <h4 className="help">Help</h4>
          <ul className="options">
              <li>Payment Option</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
          </ul>
      </div>
{/* newsletter section */}
      <div>
          <h4 className="newsletter">Newsletter</h4>
      <input type="text" placeholder="Your Email" />
      <button className="submit-btn" type="submit" >SUBSCRIBE</button>
      <hr />
      </div>
    
  </div>

  {/* ending text */}
  <div  className="para">
      <hr />
      <br />
      <p>2023 furino. All rights reverved</p>
        </div>

 </div>
 </div>
 </div>
        </footer>
    );
}