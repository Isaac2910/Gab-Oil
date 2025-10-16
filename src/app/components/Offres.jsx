export default function Offres() {
  return (
    <section className="bg-black text-white py-16 px-6 text-center">
      <h2 className="text-2xl font-bold mb-10">OFFRES & PROMOTIONS</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-[url('/promo1.jpg')] bg-cover bg-center rounded-xl h-64 relative">
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold mb-2">PROMO STATIONS-SERVICE</h3>
            <p className="text-lg">10% de remise sur le super & gasoil !</p>
          </div>
        </div>

        <div className="bg-[url('/promo2.jpg')] bg-cover bg-center rounded-xl h-64 relative">
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold mb-2">PROMO BOUTIQUES</h3>
            <p className="text-lg">5.000 FCFA de remise sur les huiles !</p>
          </div>
        </div>
      </div>
    </section>
  );
}
