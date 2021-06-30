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
      <div className='w-full h-screen'>{children}</div>
      {/* remember to change to `h-auto` */}
    </div>
  );
};

const headerItems = ["about", "blog", "talks", "projects", "podcast"];

const Header: React.FC<any> = () => {
  return (
    <div className='flex flex-row justify-center mt-1 w-full h-headerh mobile:h-headerhm'>
      <div className='p-10 mobile:p-5 mobile:w-full w-navw h-full'>
        <div className='flex flex-row justify-between w-full big:w-navcontentw h-navcontenth'>
          <div className='flex flex-row items-center justify-center w-auto h-full text-header font-bold'>
            <Link href='/'>
              <a className='hover:opacity-75 transition duration-100 ease-in'>
                @robertzhang
              </a>
            </Link>
          </div>
          <div className='flex mobile:hidden flex-row w-auto h-full'>
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
