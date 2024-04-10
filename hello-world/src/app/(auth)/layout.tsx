"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState } from "react";
import './style.css';

const navLinks = [
  {name: "Register", href:"/register"},
  {name: "Login", href:"/login"},
  {name: "Forget Password", href:"/forgot-password"}
];


const renderLinks = (pathname:string) => {
  
  return navLinks.map(link => {
    const isActive = pathname.startsWith(link.href);

    return <Link href={link.href} key={link.name} className={isActive? 'font-bold mr-4' : 'text-blue-500 mr-4'}>{link.name}</Link>
  })
}

function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const pathname = usePathname();
    const [input, setInput] = useState("");

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setInput(value);
    }

    return (
      <div>
        <input type="text" value={input} onChange={handleInputChange} className="block border my-2 ml-2"/>
        {renderLinks(pathname)}
        {children}
      </div>
    )
  }

  export default AuthLayout;
  