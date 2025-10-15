import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <Header />

      <main>
        {/* Hero Section */}
        <section
          className="relative h-[60vh] md:h-[75vh] flex items-center justify-center text-center text-white bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(18, 32, 23, 0.6), rgba(18, 32, 23, 0.8)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDkDmhEWdRnrM-NadSyHCSNp-C1IcB4tPXUW1Kf8TMa3nwxKCdUOzQ94vp0dOM83tS5Ndes8g4NurfD80xGzGGCrJbae3oRIZIPIu7IFMPFLRFrgxstOHOZWvaQab04oCEK-j14ozvaCXqlyHhTX5tinEWiOd2dL6MUeUxZcxlio_-Q7QDFkGynuKIucgd4n-na8j55LE1PVyzKUlE7GYCYrgAev6AxqUUz7ZfGAWIGbjbxrI_mFZoz3SIiPZxxCZCXLw0OZvN-n7IL")`
          }}
        >
          <div className="px-4">
            <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight">
              Explora la Ciudad con BikeShare
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
              Alquila una bicicleta o únete a nuestros emocionantes eventos de "ciclopaseo".
              Descubre la ciudad de una manera nueva.
            </p>
            <button className="mt-8 bg-primary text-background-dark font-bold py-3 px-6 rounded-lg text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
              Comenzar
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-24 bg-background-light dark:bg-background-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                ¿Por qué elegir BikeShare?
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                BikeShare ofrece una experiencia perfecta tanto para el alquiler de bicicletas como para la gestión de eventos.
              </p>
            </div>

            {/* Cards */}
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Alquiler Fácil de Bicicletas",
                  text: "Alquila una bicicleta con solo unos clics y comienza tu aventura.",
                  icon: (
                    <svg fill="currentColor" height="28" width="28" viewBox="0 0 256 256">
                      <path d="M208,112a47.81,47.81,0,0,0-16.93,3.09L165.93,72H192a8,8,0,0,1,8,8,8,8,0,0,0,16,0,24,24,0,0,0-24-24H152a8,8,0,0,0-6.91,12l11.65,20H99.26L82.91,60A8,8,0,0,0,76,56H48a8,8,0,0,0,0,16H71.41L85.12,95.51,69.41,117.06a48.13,48.13,0,1,0,12.92,9.44l11.59-15.9L125.09,164A8,8,0,1,0,138.91,156l-30.32-52h57.48l11.19,19.17A48,48,0,1,0,208,112Z" />
                    </svg>
                  ),
                },
                {
                  title: "Eventos Emocionantes",
                  text: "Únete a nuestros eventos de ciclopaseo y conoce a otros entusiastas.",
                  icon: (
                    <svg fill="currentColor" height="28" width="28" viewBox="0 0 256 256">
                      <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z" />
                    </svg>
                  ),
                },
                {
                  title: "Explora Nuevas Rutas",
                  text: "Descubre nuevas rutas y joyas ocultas en tu ciudad.",
                  icon: (
                    <svg fill="currentColor" height="28" width="28" viewBox="0 0 256 256">
                      <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Z" />
                    </svg>
                  ),
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/20 text-primary mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{card.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
