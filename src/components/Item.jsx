function Item({ prod }) {
  return (
    <div key={prod.id} className="border flex flex-col gap-3 rounded p-4">
      <img src={prod.imagen} alt={prod.nombre} className="rounded" />
      <p className="text-lg font-semibold">{prod.nombre}</p>
      <p className="text-gray-700">${prod.precio}</p>
      <p className="text-sm text-gray-500">{prod.precioxunidad}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
        Agregar al carrito
      </button>
    </div>
  );
}