import { images } from "@/app/constants/images";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex items-center justify-between px-8 py-4">
        <div>
          <Image
            width={200}
            height={40}
            alt="company logo"
            src={images.company_logo_grey}
          />
        </div>
        <div className="flex items-center justify-around w-[200px]  ">
          <Instagram className="cursor-pointer text-[grey]" />
          <span className="rounded-full border-2 border-[grey] p-1 cursor-pointer text-[grey]">
            <Linkedin className="w-[14px] h-[14px]" />
          </span>
          <span className="rounded-full border-2 border-[grey] p-1 cursor-pointer text-[grey]">
            <Facebook className="w-[14px] h-[14px]" />
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-youtube cursor-pointer text-[grey]"
          >
            <path
              fill="grey"
              d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
            />
            <path
              fill="white"
              stroke="white"
              strokeWidth={1}
              d="m10 15 5-3-5-3z"
            />
          </svg>
        </div>
      </div>
      <div className="flex items-center justify-between px-8 py-4">
        <div>
          <p className="text-[grey] text-[12px] font-semibold">
            daikin-domain-goes-here.com
          </p>
          <p className="text-[grey] text-[12px] font-semibold">@ 2022 Daikin</p>
        </div>
        <div className="w-[400px] flex items-center justify-around font-bold primary-color">
          <span>Release Notes</span>
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
