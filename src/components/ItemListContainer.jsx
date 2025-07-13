function ItemListContainer() {
  const productos = [
  {
    "id": 1,
    "nombre": "sal colosal x20u",
    "precio": 7500,
    "precioxunidad": 375,
    "imagen": "./assets/colosal.webp"
  },
  {
    "id": 2,
    "nombre": "presto pronta x10u",
    "precio": 12000,
    "precioxunidad": 1200,
    "imagen": "./assets/prestopronta.webp"
  },
  {
    "id": 3,
    "nombre": "fideos nido Doña Irma x10u",
    "precio": 10000,
    "precioxunidad": 1000,
    "imagen": "./assets/doñairma.jpeg"
  },
  {
    "id": 4,
    "nombre": "Baggio 1L x6",
    "precio": 6500,
    "precioxunidad": 1416.66,
    "imagen": "./assets/baggio1l.jpeg"
  },
  {
    "id": 5,
    "nombre": "jabon en polvo ala x400gr (24u)",
    "precio": 27000,
    "precioxunidad": 1125,
    "imagen": "./assets/ala400gr.webp"
  },
  {
    "id": 6,
    "nombre": "alfajor guaymallen (40u)",
    "precio": 7500,
    "precioxunidad": 187.5,
    "imagen": "./assets/guaymayen.jpeg"
  },
  {
    "id": 7,
    "nombre": "turron Arcor x25u",
    "precio": 5500,
    "precioxunidad": 220,
    "imagen": "./assets/turron arcor.webp"
  },
  {
    "id": 8,
    "nombre": "jugo cepita botela x 1L (6u)",
    "precio": 7000,
    "precioxunidad": 1166.66,
    "imagen": "./assets/cepita.jpeg"
  },
  {
    "id": 9,
    "nombre": "jugo placer x 1,5L (6u)",
    "precio": 4500,
    "precioxunidad": 750,
    "imagen": "./assets/placer1l.jpg"
  },
  {
    "id": 10,
    "nombre": "coca cola x 2.25L (8u)",
    "precio": 7000,
    "precioxunidad": 1166.66,
    "imagen": "./assets/cocacola.jpg"
  },
  {
    "id": 11,
    "nombre": "matarazzo x20u",
    "precio": 24000,
    "precioxunidad": 1200,
    "imagen": "./assets/matarazzo.webp"
  },
  {
    "id": 12,
    "nombre": "Manaos gaseosa(6u)",
    "precio": 6000,
    "precioxunidad": 1000,
    "imagen": "./assets/manaos.jpeg"
  },
  {
    "id": 13,
    "nombre": "Cajon de cerveza Brahama x12u",
    "precio": 24000,
    "precioxunidad": 2000,
    "imagen": "./assets/brahma.cajon.jpeg"
  },
  {
    "id": 14,
    "nombre": "Brahma en lata x24u",
    "precio": 24500,
    "precioxunidad": 1020.33,
    "imagen": "./assets/brahama.lata.webp"
  },
  {
    "id": 15,
    "nombre": "Agua Villamanaos x2L (6u)",
    "precio": 3000,
    "precioxunidad": 500,
    "imagen": "./assets/aguamanaos.webp"
  },
  {
    "id": 16,
    "nombre": "Sedal 250ml x12u",
    "precio": 25000,
    "precioxunidad": 2083.33,
    "imagen": "./assets/sedal.jpeg"
  },
  {
    "id": 17,
    "nombre": "Babysec Premium x12u",
    "precio": 29000,
    "precioxunidad": 2416.66,
    "imagen": "./assets/babysec.premium.jpg"
  },
  {
    "id": 18,
    "nombre": "Babysec x12u",
    "precio": 18000,
    "precioxunidad": 1500,
    "imagen": "./assets/babysec.webp"
  },
  {
    "id": 19,
    "nombre": "Colgate 80gr x12u",
    "precio": 11000,
    "precioxunidad": 916.66,
    "imagen": "./assets/colgate.jpg"
  },
  {
    "id": 20,
    "nombre": "Toallitas Doncella x30u",
    "precio": 27000,
    "precioxunidad": 900,
    "imagen": "./assets/doncella.webp"
  },
  {
    "id": 21,
    "nombre": "Jabon Dove x24u",
    "precio": 22800,
    "precioxunidad": 950,
    "imagen": "./assets/dove.webp"
  },
  {
    "id": 22,
    "nombre": "PH Elegante x10u",
    "precio": 12000,
    "precioxunidad": 1200,
    "imagen": "./assets/elegante.webp"
  },
  {
    "id": 23,
    "nombre": "PH Higienol doble hoja x10",
    "precio": 16000,
    "precioxunidad": 1600,
    "imagen": "./assets/higienol.webp"
  },
  {
    "id": 24,
    "nombre": "Leche LS x12u",
    "precio": 17000,
    "precioxunidad": 1416.66,
    "imagen": "./assets/ls.webp"
  },
  {
    "id": 25,
    "nombre": "Media Tarde Clasica x25u",
    "precio": 16000,
    "precioxunidad": 640,
    "imagen": "./assets/mediatarde.webp"
  },
  {
    "id": 26,
    "nombre": "Pepas Trio 500gr x20u",
    "precio": 20000,
    "precioxunidad": 1000,
    "imagen": "./assets/pepastrio.webp"
  },
  {
    "id": 27,
    "nombre": "Vanguardia x10u",
    "precio": 8500,
    "precioxunidad": 850,
    "imagen": "./assets/vanguardia.webp"
  }

];

  return (
    <div>
      {productos.map((prod) => (
        <div key={prod.id}>
          <img src={prod.imagen} alt={prod.nombre} style={{ width: '100px' }} />
          <h3>{prod.nombre}</h3>
          <p>Precio total: ${prod.precio}</p>
          <p>Precio por unidad: ${prod.precioxunidad}</p>
        </div>
      ))}
    </div>
  );
}