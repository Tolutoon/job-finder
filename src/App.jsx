import Footer from "./Components/FooterDiv/Footer"
import Jobs from "./Components/JobDiv/Jobs"
import NavBar from "./Components/NavBar/NavBar"
import Search from "./Components/SearchDiv/Search"
import Value from "./Components/ValueDiv/Value"


function App() {

  return (
    <div className="w-[85%] m-auto bg-white">
    <NavBar />
    <Search />
    <Jobs />
    <Value />
    <Footer />
    </div>
  )
}

export default App
