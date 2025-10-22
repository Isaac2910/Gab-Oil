export default function StationCard({ station }) {
  return (
    <div className="bg-neutral-900 rounded-xl overflow-hidden flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-4 p-4">
        <img
          src={station.image}
          alt={station.name}
          className="w-24 h-24 object-cover rounded-lg"
        />
        <div>
          <h3 className="font-semibold text-lg">{station.name}</h3>
          <p className="text-gray-400 text-sm">{station.address}</p>
          {station.open && (
            <p className="text-green-400 text-sm">{station.open}</p>
          )}
        </div>
      </div>
      <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-r-lg">
        VOIR LES DÉTAILS
      </button>
    </div>
  );
}
