import { FaLinkedinIn, FaGithub, FaReddit, FaRegCopyright } from "react-icons/fa";
import BuyMeACoffeeButton from "./ui/buymeacoffeebtn";

const Footer = () => {
  return (
    <footer className="max-w-[1000px] w-full flex justify-between items-center">
      <div className="text-sm text-gray-500 tracking-tighter sm:text-xs"><FaRegCopyright className="inline mr-1"/> 2024 - Charles Acosta</div>
      <div className="flex gap-4 items-center text-xl">
        <FaLinkedinIn />
        <FaGithub />
        <FaReddit />
        <BuyMeACoffeeButton />
      </div>
    </footer>
  );
};

export default Footer;
