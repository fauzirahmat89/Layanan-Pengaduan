import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Router from "./components/Router";

function App() {

    return (
        <>
            <Navbar />
            <main className="flex justify-center min-h-screen pt-8">
                <Router />
            </main>
            <Footer/>
        </>
    );
}

export default App;
