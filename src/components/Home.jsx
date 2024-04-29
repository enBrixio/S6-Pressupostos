import React from 'react';

function Home() {
  return (
<body className="bg-gray-100 font-sans leading-normal tracking-normal mt-14">
    <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="imagen" className="w-full h-96 object-cover object-center" />
    <section className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">SEO</h2>
                <p className="text-gray-600 mb-4">Mejora tu ranking en los motores de búsqueda y aumenta el tráfico orgánico con nuestras estrategias de optimización de motores de búsqueda personalizadas.</p>
                <a href="#" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Más información</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">ADS</h2>
                <p className="text-gray-600 mb-4">Incrementa tus ventas y la visibilidad de tu marca con campañas publicitarias efectivas en diversas plataformas digitales.</p>
                <a href="#" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Más información</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Desarrollo Web</h2>
                <p className="text-gray-600 mb-4">Crea o mejora tu sitio web con diseños innovadores y adaptativos que captan la atención de tus visitantes.</p>
                <a href="#" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Más información</a>
            </div>
        </div>
    </section>

    <footer className="bg-gray-800 text-white text-center p-4">
        © 2024 Empresa MKT Digital - Todos los derechos reservados.
    </footer>
</body>

  );

}

export default Home;