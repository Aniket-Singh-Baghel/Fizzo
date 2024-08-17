import logo from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"

function Navbar() {
  return (
    <div className="w-full bg-[#f8feff] flex justify-between py-3 px-16 text-[#333333] fixed z-[999]">
      <img src={logo} alt="logo" className="h-10"/>
      <div className="links flex gap-12">
        {["Flavours", "Shop", "About Us", "Blog", "contact Us"].map(
          (i, index) => {
            return (
             <a href="#" key={index} className={`text-md capitalize font-medium outline-none ${index===4 && "ml-32"}`}>{i}</a>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Navbar;
