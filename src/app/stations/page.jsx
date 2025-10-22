import Image from "next/image";
import StationCard from "../components/StationCard";

export default function StationsPage() {
  const stations = [
    {
      id: 1,
      name: "Station Libreville Sud",
      address: "Quartier Lalala, RN1",
      open: "Ouvert 24/24",
      image: "icons/station1.svg",
      type: "Carburant",
    },
    {
      id: 2,
      name: "Station Libreville Sud",
      address: "Quartier Lalala, RN1",
      image: "icons/station2.svg",
      type: "Électricité",
    },
    {
      id: 3,
      name: "Station Énergies Durables",
      address: "Quartier Lalala, RN1",
      image: "icons/station3.svg",
      type: "Lavage",
    },
    {
      id: 4,
      name: "Station Uveten",
      address: "Quartier Lalala, RN1",
      image: "icons/station4.svg",
      type: "Entretien",
    },
  ];

  return (
    <main className="bg-neutral-800 text-white min-h-screen">
      {/* HERO */}
      <section className="relative text-center py-20 bg-[url('/city-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">NOS STATIONS AU GABON</h1>
          <p className="text-gray-300 mb-8">
            Localités, conseils et insights proches de vous pour la mobilité au Gabon
          </p>
          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded font-semibold">
            EXPLORER LA CARTE
          </button>
        </div>
      </section>

      {/* SECTION LISTE DE STATIONS */}
      <section className="flex flex-col lg:flex-row justify-center gap-10 px-6 py-16 max-w-7xl mx-auto">
        {/* Carte du Gabon */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/map-gabon.png"
            alt="Carte du Gabon"
            width={500}
            height={500}
            className="drop-shadow-lg"
          />
        </div>

        {/* Liste de stations */}
        <div className="flex-1 space-y-6">
          <h2 className="text-2xl font-bold mb-6">LISTE DE STATIONS</h2>
          {stations.map((station) => (
            <StationCard key={station.id} station={station} />
          ))}
        </div>
      </section>


    </main>
  );
}
