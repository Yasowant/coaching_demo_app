
import { useState } from "react";
import { ThemeToggle } from "../theme/ThemeToggle";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Courses", href: "#courses" },
    { title: "Gallery", href: "#gallery" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-coach-purple to-coach-blue bg-clip-text text-transparent">
              EduCoach
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors"
            >
              {item.title}
            </a>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
          <Button className="ml-4 bg-gradient-to-r from-coach-purple to-coach-blue hover:opacity-90 transition-opacity">
            Enroll Now
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="ml-2 p-2 rounded-md hover:bg-accent"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-[65px] bg-background/95 backdrop-blur-sm z-40 transition-transform duration-300 transform",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col items-center space-y-4">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="block px-4 py-2 text-lg w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </a>
          ))}
          <Button className="w-full mt-4 bg-gradient-to-r from-coach-purple to-coach-blue hover:opacity-90 transition-opacity">
            Enroll Now
          </Button>
        </div>
      </div>
    </header>
  );
}
