function Navbar() {
  return (
    <div className="w-full bg-[#f8feff] flex justify-between py-3 px-20 text-[#333333]">
      <h1 className="capitalize text-xl">fizzo</h1>
      <div className="links flex gap-12">
        {["Flavours", "Shop", "About Us", "Blog", "contact Us"].map(
          (i, index) => {
            return (
             <a href="#" key={index} className={`text-md capitalize ${index===4 && "ml-32"}`}>{i}</a>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Navbar;
