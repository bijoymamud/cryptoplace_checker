import { Link } from 'react-router-dom';
import { CoinContext } from '../../../Context/CoinContext';
import { useContext } from 'react';

const Navbar = () => {

    const { setCurrency } = useContext(CoinContext);

    const handleCurrency = (e) => {
        switch (event.target.value) {
            case "usd": {
                setCurrency({ name: "usd", symbol: "$" })
                break;
            }
            case "eur": {
                setCurrency({ name: "eur", symbol: "€" })
                break;
            }
            case "bdt": {
                setCurrency({ name: "bdt", symbol: "৳" })
                break;
            }
            default : {
                setCurrency({ name: "bdt", symbol: "৳" })
                break;
            }
        }
    }
    

  return (
    <nav className="bg-[#0B0033] pb-3 border-b-2 border-gray-600">
      <div className="container mx-auto flex justify-between items-center px-24">
        {/* Logo */}
        <Link className="flex items-center gap-2">
          
          <img
            src="https://cdn4.iconfinder.com/data/icons/bitcoin-mining-and-more/405/Asset_1240-512.png"
            alt="Logo"
            className="w-20" // Change to your logo path
          />
          
          <h1 className="text-white font-bold text-xl mt-4">CryptoSpace</h1>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:opacity-75">
            Home
          </Link>
          <Link to="/features" className="text-white hover:opacity-75">
            Features
          </Link>
          <Link to="/pricing" className="text-white hover:opacity-75">
            Pricing
          </Link>
          <Link to="/blog" className="text-white hover:opacity-75">
            Blog
          </Link>
        </div>

        {/* Currency Selector and Sign up */}
        <div className="flex space-x-4 items-center">
          {/* Currency Selector */}
          <div className="relative">
             <select
                    onChange={handleCurrency}
                    className="bg-transparent text-white border border-white rounded px-4 py-2 focus:outline-none focus:ring-2">
                    <option value="usd" className='bg-[#211258]'>USD</option>
                    <option value="eur" className='bg-[#211258]'>EUR</option>
                    <option value="bdt" className='bg-[#211258]'>BDT</option>
        </select>
          </div>

          {/* Sign up Button */}
          <Link
            to="/signup"
            className="bg-white text-[#0B0033] font-semibold px-6 py-2 rounded-full flex items-center space-x-1"
          >
            <span>Sign up</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
