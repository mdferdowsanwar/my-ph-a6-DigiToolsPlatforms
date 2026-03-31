import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import ExploreProduct from './components/ExploreProduct/ExploreProduct'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Pricing from './components/Pricing/Pricing'
import Statistic from './components/Statistic/Statistic'
import StepSection from './components/StepSection/StepSection'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'


const getData = async () => {
  const response = await fetch("/data.json");
  return response.json();
}
function App() {
  const dataPromise = getData();
  //console.log(dataPromise);
  const [activeTab, setActiveTab] = useState("product");
  //console.log(activeTab);
  const [carts, setCarts] = useState([]);
  //console.log(carts);

  const handleToggleBtn = (tab) => { setActiveTab(tab); }


  return (
    <>
      <Navbar carts={carts} />

      <Banner />

      <Statistic />
      <div className='w-10/12 sm:w-6/12 m-auto text-center my-10'>
        <h2 className='text-3xl font-bold mb-3'>Premium Digital Tools</h2>
        <p className='text-zinc-600'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
      </div>

      <div className="tabs tabs-box justify-center bg-transparent shadow-none mb-5 gap-3 sm:gap-0">
        <input onClick={() => handleToggleBtn("product")} type="radio" className={`tab rounded-full w-40 mr-5 ${activeTab === 'product' && 'bg-[#9c88ff]'}`} aria-label="Products" defaultChecked />
        <input onClick={() => handleToggleBtn("cart")} type="radio" className={`tab rounded-full w-40 mr-5 ${activeTab === 'cart' && 'bg-[#9c88ff]'}`} aria-label={`Cart (${carts.length})`} />
      </div>

      {
        activeTab === "product" &&
        <Suspense fallback={<div className='text-center my-10'><span className="loading loading-ring loading-xl"></span></div>}>
          <Products dataPromise={dataPromise} carts={carts} setCarts={setCarts} />
        </Suspense>
      }

      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts} />}


      <StepSection />

      <Pricing />

      <ExploreProduct />

      <Footer />
    </>
  )
}

export default App
