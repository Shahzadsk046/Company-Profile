import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage2Opsi2 from "./pages/LandingPage2Opsi2";
import Career from "./pages/Career";
import LandingPage2Opsi1 from "./pages/LandingPage2Opsi1";
import LandingPage2Opsi3 from "./pages/LandingPage2Opsi3";
import DetailCareer from "./pages/DetailCareer";
import ContactMe from "./pages/ContactMe";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/career":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page-2-opsi-1":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page-2-opsi-3":
        title = "";
        metaDescription = "";
        break;
      case "/detail-career":
        title = "";
        metaDescription = "";
        break;
      case "/contact-me":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage2Opsi2 />} />
      <Route path="/career" element={<Career />} />
      <Route path="/landing-page-2-opsi-1" element={<LandingPage2Opsi1 />} />
      <Route path="/landing-page-2-opsi-3" element={<LandingPage2Opsi3 />} />
      <Route path="/detail-career" element={<DetailCareer />} />
      <Route path="/contact-me" element={<ContactMe />} />
    </Routes>
  );
}
export default App;
