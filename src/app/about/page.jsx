import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="text-gray-800">
      {/* === HERO SECTION === */}
      <section
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center"
        style={{ backgroundImage: "url('/station.png')" }}
      >
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Contenu du Hero */}
        <div className="relative z-10 text-center text-white max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight">
            Notre Histoire & <br /> Engagement
          </h1>
          <p className="mt-4 text-lg">
            Fournir au Gabon des produits pétroliers et gaziers de haute qualité.
          </p>
          <button className="mt-8 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition">
            DÉCOUVRIR NOS VALEURS |
          </button>
        </div>
      </section>

      {/* === QUI SOMMES-NOUS === */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold uppercase mb-4 text-black">
            Qui sommes-nous ?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            GABOIL est une société gabonaise spécialisée dans la distribution
            et la commercialisation des produits pétroliers et gaziers.
            Présente depuis plusieurs années, elle s’est imposée comme un acteur
            majeur du secteur énergétique grâce à son engagement pour la qualité,
            la sécurité et la satisfaction de sa clientèle.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold uppercase mb-4 text-black">
            Nos valeurs fondamentales
          </h2>

          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <Image src="/icons/integrity.svg" alt="Intégrité" width={32} height={32} />
              <div>
                <h3 className="font-semibold text-lg">Intégrité</h3>
                <p className="text-gray-700">
                  Nous plaçons l’éthique et la transparence au cœur de toutes nos actions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Image src="/icons/confiance.svg" alt="Confiance" width={32} height={32} />
              <div>
                <h3 className="font-semibold text-lg">Confiance</h3>
                <p className="text-gray-700">
                  Nos relations reposent sur la fiabilité, la proximité et le respect mutuel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === TIMELINE === */}
      <section className="bg-white py-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="border-t-2 border-red-600 relative my-10">
            <div className="flex justify-between text-sm text-gray-600 mt-2 px-4">
              <span>2013</span>
              <span>2015</span>
              <span>2017</span>
              <span>2019</span>
              <span>2021</span>
              <span>2023</span>
            </div>
            {/* Points de la timeline */}
            <div className="absolute top-[-6px] left-4 right-4 flex justify-between">
              {Array(6)
                .fill()
                .map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 bg-red-600 rounded-full shadow-md"
                  ></div>
                ))}
            </div>
          </div>
          <p className="text-gray-700">
            Une progression constante vers l’excellence et l’innovation au service du Gabon.
          </p>
        </div>
      </section>

     
    </main>
  );
}
