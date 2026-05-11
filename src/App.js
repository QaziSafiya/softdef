import logo from './logo.svg';
import './App.css';
import bgImage from './assets/images/bg-tree.png'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Trendyplants from './Components/Trendyplants';
import TopPlants from './Components/TopPlants';
import CustomerReview from './Components/CustomerReview';
import Best from './Components/Best';
import Footer from './Components/Footer';
function App() {
  return (
    <div style={{
      backgroundColor: "#1B2316",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}

    >
      <Navbar />
      <Home />
      <TopPlants />
      <CustomerReview />
      <Best />
      <Footer />
    </div>
  );
}

export default App;
