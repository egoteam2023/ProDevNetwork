import About from './layouts/About';
import Feetback from './layouts/Feetback';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Home from './layouts/Home';
import Services from './layouts/Services';
import Team from './layouts/Team';
import './global.scss';
import Cases from './layouts/Cases/Cases';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Home />
        <div className="br"></div>
        <About />
        <div className="br"></div>
        <Team />
        <div className="br"></div>
        <Services />
        <div className="br"></div>
        <Cases />
        <div className="br"></div>
        <Feetback />
        <div className="br"></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
