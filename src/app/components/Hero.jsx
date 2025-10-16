export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-[500px] flex flex-col justify-center px-8 text-white"
      style={{ backgroundImage: "url('/station.jpg')" }}
    >
      <div className="bg-black/50 absolute inset-0"></div>
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">ASSURER L’ÉNERGIE</h1>
        <p className="mb-6 text-lg">
          Fournir au Gabon des produits pétroliers et gaziers de haute qualité.
        </p>
        <button className="bg-primary px-6 py-3 font-semibold rounded-lg">
          EXPLORER NOS SERVICES
        </button>
      </div>
    </section>
  );
}
