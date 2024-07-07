'use client'
import { useEffect } from "react"

const BuyMeACoffeeButton = () => {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js';
      script.setAttribute('data-name', 'bmc-button');
      script.setAttribute('data-slug', 'charlesacosta163');
      script.setAttribute('data-color', '#40DCA5');
      script.setAttribute('data-emoji', '');
      script.setAttribute('data-font', 'Bree');
      script.setAttribute('data-text', 'Buy me a coffee');
      script.setAttribute('data-outline-color', '#000000');
      script.setAttribute('data-font-color', '#ffffff');
      script.setAttribute('data-coffee-color', '#FFDD00');
      script.async = true;
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    return (
      <button className="bg-yellow-400 text-black tracking-tighter font-bold px-4 py-2 sm:py-2 sm:px-2 rounded-full text-sm shadow">
        <a
          href="https://www.buymeacoffee.com/charlesacosta163"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
        <span>☕</span>
          <span className="sm:hidden">Buy me a coffee</span>
        </a>
      </button>
    );
  };
  
  export default BuyMeACoffeeButton;