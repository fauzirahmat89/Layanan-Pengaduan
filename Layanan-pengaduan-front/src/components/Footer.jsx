function Footer() {
    return (
      <footer className="bg-blue-600 text-white mt-10">
        <div className="max-w-6xl mx-auto py-8 px-4 flex flex-wrap justify-between items-center">
          <div className="p-5">
            <h3 className="text-lg font-bold">Tentang Kami</h3>
            <p className=" text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="p-5">
            <h3 className="text-lg font-bold">Kontak</h3>
            <ul className=" text-sm mt-2">
              <li>+62 123 4567 8901</li>
              <li>info@contoh.com</li>
            </ul>
          </div>
          <div className="p-5">
            <h3 className="text-lg font-bold">Ikuti Kami</h3>
            <ul className="flex space-x-4 mt-2">
              <li><a href="https://facebook.com" className="hover:text-blue-500">Facebook</a></li>
              <li><a href="https://twitter.com" className="hover:text-blue-300">Twitter</a></li>
              <li><a href="https://instagram.com" className="hover:text-pink-500">Instagram</a></li>
            </ul>
          </div>
          <div className="p-5 w-full md:w-auto text-center md:text-left">
            <p className=" text-sm">&copy; {new Date().getFullYear()} Contoh Perusahaan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  