import React from "react";
import clsx from "clsx";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='h-auto' style={{ width: "calc(100vw - (100vw - 100%)" }}>
      <Header />
      <div className='w-full h-auto'>{children}</div>
      {/* remember to change to `h-auto` */}
    </div>
  );
};

const headerItems = ["about", "projects"];

const Header: React.FC<any> = () => {
  return (
    <div className='flex flex-row justify-center w-full mt-1 h-headerh mobile:h-headerhm'>
      <div className='h-full p-10 mobile:p-5 mobile:w-full w-navw'>
        <div className='flex flex-row justify-between w-full big:w-navcontentw h-navcontenth'>
          <div className='flex flex-row items-center justify-center w-auto h-full font-bold text-header'>
            <Link href='/'>
              <a className='transition duration-100 ease-in hover:opacity-75'>
                @robertzhang
              </a>
            </Link>
          </div>
          <div className='flex flex-row w-auto h-full mobile:hidden'>
            {headerItems.map((item, index) => (
              <div
                key={index}
                className={clsx(
                  "flex flex-row items-center justify-center w-auto h-full text-gray-headeritem text-header",
                  {
                    "ml-6": index !== 0,
                  }
                )}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
