export default function Domaines() {
  const domaines = [
    { icon: "🛢️", titre: "DISTRIBUTION PETROLIÈRE" },
    { icon: "🔥", titre: "VENTE DE GAZ BUTANE" },
    { icon: "🚢", titre: "BUNKERING" },
    { icon: "🚚", titre: "LOGISTIQUE ET TRANSPORT" },
  ];

  return (
    <section className="py-16 text-center">
      <h2 className="text-2xl font-bold mb-10">DOMAINE D’ACTIVITÉ</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {domaines.map((d, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <div className="text-4xl">{d.icon}</div>
            <p className="font-semibold">{d.titre}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
