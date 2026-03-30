import './App.css'
import Banner from './components/Banner/Banner'
import ExploreProduct from './components/ExploreProduct/ExploreProduct'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Pricing from './components/Pricing/Pricing'
import Statistic from './components/Statistic/Statistic'
import StepSection from './components/StepSection/StepSection'

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Statistic/>
      <StepSection />
      <Pricing />
      <ExploreProduct />
      <Footer />
    </>
  )
}

export default App
