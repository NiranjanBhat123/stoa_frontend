import Graphs from './components/Graphs.jsx';
import MainContent from './components/MainComponent.jsx'
import Navbar from './components/Navbar.jsx';
import Slider from './components/Slider.jsx';
import Sidebar from './components/Sidebar.jsx';
import Cards from './components/Cards.jsx';
import FAQs from './components/FAQs.jsx';
import Footer from './components/Footer.jsx'

function App() {


  return (
    <>
      <Navbar />
      <MainContent />
      <Slider />
      <Graphs />
      <Sidebar />
      <Cards/>
      <FAQs/>
      <Footer/>
    </>
  )
}

export default App
