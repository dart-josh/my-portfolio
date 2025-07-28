import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import PageTransition from "./components/PageTransition";
import StairTransition from "./components/StairTransition";

function App() {
  return (
    <>
      <div style={{ fontFamily: '"JetBrains Mono"' }}>
        <div className="min-h-screen relative">
          <div className="fixed right-0 left-0 top-0 z-30">
            <Header />
          </div>

          <StairTransition />

          <PageTransition>
            <div className="bg-slate-900 px-3 sm:px-6 mx-0 sm:mx-auto max-w-[1200px] absolute top-0 left-0 right-0 z-10">
              <div className="min-h-screen pt-25 pb-10 justify-center flex flex-col w-full items-center">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/hire" element={<Contact />} />

                  <Route path="*" element={<Home />} />
                </Routes>
              </div>
            </div>
          </PageTransition>
        </div>
      </div>
    </>
  );
}

export default App;
