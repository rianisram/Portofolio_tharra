
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Skillss from "./component/Skillss";
import MyProjects from "./component/MyProject";
import Footers from "./component/Footers";
export default function Home() {
  return (
    <div className="bg-white">
     <Navbar />
     <Hero />
     <About />
     <Skillss />
     <MyProjects />
     <Footers />
    </div>
  );
}
