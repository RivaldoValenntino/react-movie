import Navbar from "../components/navbar"
import '../styles/home.css'
import Footer from "../components/footer";

const Intro = () => {
    return (
        <>
            <Navbar title="MovieApp" />
            <div className="search-page w-full flex flex-col justify-center items-center z-[999]">
                <section className="mt-5">
                    <div className="pt-10">
                        <h1 className="text-white lg:text-5xl text-center text-3xl font-bold" style={{ fontFamily: 'Poppins', textShadow: '2px 2px 3px #000000', letterSpacing: '2px' }}>Welcome to MovieApp</h1>
                        <p className="text-white text-center lg:text-4xl text-xl font-semibold" style={{ fontFamily: 'Poppins', textShadow: '2px 2px 3px #000000', letterSpacing: '2px' }}>Discover every Movie and TV Show</p>
                        <p className="text-white text-center lg:text-4xl font-semibold" style={{ fontFamily: 'Poppins', textShadow: '2px 2px 3px #000000', letterSpacing: '2px' }}>From Trending and Popular</p>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    )
}


export default Intro