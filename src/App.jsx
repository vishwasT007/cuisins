import Header from "./component/header/Header";
import HeroSection from "./component/HeroSection/HeroSection";
import "./index.css";
import { useState, useEffect } from "react";

function App() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={isSticky ? "sticky" : ""}>
      <Header isSticky={isSticky} />
      <HeroSection />
    </div>
  );
}
export default App;
