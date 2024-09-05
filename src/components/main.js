import React from 'react';
import heroImage from '../assets/slider1.jpg'; // Ajusta la ruta según la ubicación de tu archivo

function Main() {
  return (
    <main className="flex flex-col mt-20 p-6 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-24 sm:py-32 rounded-sm bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl relative">
              Pedi tu tarjeta
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 relative">
              ¡Con tu tarjeta aprovecha al máximo tus compras semanales y
              obtén increíbles recompensas!
              <br />
              <br />
              ¿Sabías que al realizar compras semanales por un monto
              superior a $15,000 no solo te llevas a casa todo lo que
              necesitas, sino que también acumulas valiosos puntos que
              puedes canjear por fabulosos premios? Con cada compra, estarás
              un paso más cerca de disfrutar de beneficios exclusivos
              diseñados especialmente para ti.
            </p>
            <div className="mt-12">
              <a
                href="https://www.naranjax.com/tarjetas-de-credito"
                className="flex w-36 justify-center rounded-2xl bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500"
              >
                Saca tu tarjeta
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-800 text-gray-200 rounded-sm shadow-md p-4 mt-8">
        <h2 className="text-2xl font-semibold text-center text-white">
          Nosotros
        </h2>
        <p className="mt-6 text-lg">
          Horizon Bank fue fundado en 1973, en Michigan City, Indiana,
          Estados Unidos. Comenzó como un banco local con un enfoque en
          servir a la comunidad y ayudar al crecimiento económico de la
          región. A lo largo de los años, ha expandido sus operaciones,
          manteniendo siempre su compromiso de proporcionar un servicio
          personalizado y de alta calidad a sus clientes. <br />
          Desde su fundación, ha evolucionado de ser una pequeña institución
          financiera comunitaria a un banco con presencia en varios estados,
          adaptándose a los cambios en la industria bancaria mientras sigue
          arraigado en los valores que lo han caracterizado desde sus
          inicios. <br />
          <br />
          Nos distinguimos por ofrecer un servicio cercano y personalizado.
          Esforzandonos por entender las necesidades individuales de
          nuestros clientes y adaptar soluciones a las mismas. <br />
          Aunque es un banco con una tradición sólida, Horizon Bank también
          invierte en tecnología moderna para ofrecer servicios digitales
          convenientes, como la banca en línea y aplicaciones móviles,
          facilitando la gestión de las finanzas desde cualquier lugar.
          <br />
          Contamos con un fuerte enfoque en el apoyo a la comunidad local,
          participando en proyectos y ofreciendo productos que benefician a
          los negocios locales y a las personas en su área de influencia.
          <br />
          Nos enorgullece operar con altos estándares éticos, siendo
          transparentes en nuestras políticas y tarifas, lo que permite a
          los clientes tomar decisiones informadas sobre sus finanzas.
        </p>
      </section>
    </main>
  );
}

export default Main;
