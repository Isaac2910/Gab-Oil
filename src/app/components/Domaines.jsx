import Image from "next/image";

export default function Domaines() {
  const domaines = [
    { icon: "/icons/dis.svg", titre: "Distribution Pétrolière" },
    { icon: "/icons/gaz.svg", titre: "Vente de Gaz Butane" },
    { icon: "/icons/bato.svg", titre: "Bunkering" },
    { icon: "/icons/logis.svg", titre: "Logistique & Transport" },
  ];

  return (
    <section id="domaines" className="py-16 text-center bg-gray-50">
      <h2 className="text-2xl font-bold mb-10 uppercase text-gray-900">Domaine d’Activité</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {domaines.map((d, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-3 bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
          >
            <Image src={d.icon} alt={d.titre} width={60} height={60} />
            <p className="font-semibold text-gray-900">{d.titre}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
