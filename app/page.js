import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Portfolio from "@/components/Portfolio";
import Revealer from "@/layouts/Revealer";
import PortfolioLayout from "@/layouts/PortfolioLayout";
import Skills from "@/components/Skills";

const Page = () => {
  return (
    <PortfolioLayout>
      {/* Main Content Starts */}
      <div className="w-full h-full pages overflow-hidden">
        {/* Home Starts */}
        <Home />
        {/* Home Ends */}
        {/* About Starts */}
        <About />
        {/* About Ends */}
         {/* Skills Starts */}
         <Skills />
        {/* Skills Ends */}
        {/* Portfolio Starts */}
        <Portfolio />
        {/* Portfolio Ends */}
        {/* Contact Starts */}
        <Contact />
        {/* Contact Ends */}
        {/* Blog Starts */}
        
      </div>
      <Revealer />
    </PortfolioLayout>
  );
};
export default Page;
