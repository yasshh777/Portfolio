// export default function Header(){

//     return (
//         <div className="flex justify-around p-3 text-foreground font-sans border backdrop-blur-md border-border sticky top-0 z-50 shadow-md ">
//             <h1 className="text-3xl font-bold ">yash lokhande</h1>
//             <div className="flex gap-5">
//                 <button>Home</button>
//                 <button>About</button>
//                 <button>Projects</button>
//                 <button>Contacts</button>
//                 <button>Resume</button>
//             </div>
//         </div>
//     )
// }

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-md border-b border-border shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo / Brand */}
        <h1 className="text-xl sm:text-2xl font-bold text-foreground">yash lokhande</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-foreground font-medium">
          <button>Home</button>
          <button>About</button>
          <button>Projects</button>
          <button>Contacts</button>
          <button>Resume</button>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-2xl text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 border-t border-border text-foreground font-medium bg-background/80">
          <button onClick={() => setIsOpen(false)}>Home</button>
          <button onClick={() => setIsOpen(false)}>About</button>
          <button onClick={() => setIsOpen(false)}>Projects</button>
          <button onClick={() => setIsOpen(false)}>Contacts</button>
          <button onClick={() => setIsOpen(false)}>Resume</button>
        </div>
      )}
    </header>
  );
}
