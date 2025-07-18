const productos = [
  {
    id: 1,
    name: 'Peluche Chopper Cosplay Portgas D Ace',
    seller: 'Tienda One Piece',
    price: 24.9,
    oldPrice: 34.9,
    discount: 29,
    image:
      'https://tienda-onepiece.com/wp-content/uploads/2024/09/peluche-chopper-cosplay-portgas-d-ace-1.webp',
    url: 'https://tienda-onepiece.com/products/peluche-chopper-cosplay-portgas-d-ace/'
  },
  {
    id: 2,
    name: 'Funko Pop Sanji',
    seller: 'Tienda One Piece',
    price: 24.9,
    oldPrice: 34.9,
    discount: 29,
    image:
      'https://tienda-onepiece.com/wp-content/uploads/2024/09/funko-pop-sanji-1.jpg',
    url: 'https://tienda-onepiece.com/products/funko-pop-sanji/'
  },
  {
    id: 3,
    name: 'Figura De Barbablanca One Piece',
    seller: 'Tienda One Piece',
    price: 49.9,
    oldPrice: 59.9,
    discount: 17,
    image:
      'https://tienda-onepiece.com/wp-content/uploads/2024/08/figura-de-barbablanca-one-piece-1.jpg',
    url: 'https://tienda-onepiece.com/products/figura-de-barbablanca-one-piece/'
  },
  {
    id: 4,
    name: 'Sombrero Luffy',
    seller: 'Tienda One Piece',
    price: 24.9,
    oldPrice: 34.9,
    discount: 29,
    image:
      'https://tienda-onepiece.com/wp-content/uploads/2024/09/sombrero-luffy-1.webp',
    url: 'https://tienda-onepiece.com/products/sombrero-luffy/'
  },
  {
    id: 5,
    name: 'Póster Wanted Luffy One Piece',
    seller: 'Tienda One Piece',
    price: 12.9,
    oldPrice: 17.9,
    discount: 28,
    image:
      'https://tienda-onepiece.com/wp-content/uploads/2024/08/poster-wanted-luffy-one-piece.jpg',
    url: 'https://tienda-onepiece.com/products/poster-wanted-luffy-one-piece/'
  },
  {
    id: 6,
    name: 'Mochila One Piece Cráneo',
    seller: 'Tienda One Piece',
    price: 39.9,
    oldPrice: 54.9,
    discount: 27,
    image:
      'https://tienda-onepiece.com/wp-content/uploads/2024/09/mochila-one-piece-craneo.webp',
    url: 'https://tienda-onepiece.com/products/mochila-one-piece-craneo/'
  },
  {
    id: 7,
    name: 'Reloj De Bolsillo One Piece',
    seller: 'Tienda One Piece',
    price: 29.9,
    oldPrice: 39.9,
    discount: 25,
    image:
      'https://tienda-onepiece.com/wp-content/uploads/2024/09/reloj-de-bolsillo-one-piece-1.jpg',
    url: 'https://tienda-onepiece.com/products/reloj-de-bolsillo-one-piece/'
  },
  {
    id: 8,
    name: 'Camiseta De Zoro',
    seller: 'Tienda One Piece',
    price: 24.9,
    oldPrice: 34.9,
    discount: 29,
    image:
      'https://tienda-onepiece.com/wp-content/uploads/2024/09/camiseta-de-zoro-1.jpg',
    url: 'https://tienda-onepiece.com/products/camiseta-de-zoro/'
  },
  {
    id: 9,
    name: 'Gorra Luffy Gear 4',
    seller: 'Tienda One Piece',
    price: 23.9,
    oldPrice: 29.9,
    discount: 20,
    image:
      'https://cloud.superfan.art/pc3dw/gen/lab/001-000044-00001-5a09ef0183ebc6199d42dd9651099c53/ven/1000w/VI2-00266-00101_94286_negro.webp?15',
    url: 'https://tienda-onepiece.com/products/gorra-luffy-gear-4/'
  },
  {
    id: 10,
    name: 'Llavero Zoro',
    seller: 'Tienda One Piece',
    price: 8.4,
    oldPrice: 9.9,
    discount: 15,
    image:
      'https://tienda-onepiece.com/wp-content/uploads/2024/09/llavero-zoro.webp',
    url: 'https://tienda-onepiece.com/products/llavero-zoro/'
  }
]
const filtersSection = document.getElementById('filters')
filtersSection.innerHTML = `
  <h2>Filtros de búsqueda</h2>
  <label>
    Buscar producto:
    <input type="text" id="searchInput" placeholder="Escribe para buscar..." />
  </label>
`
const productsSection = document.getElementById('products')
function renderProducts(productList) {
  productsSection.innerHTML = ''
  if (productList.length === 0) {
    productsSection.innerHTML = `<p class="no-results">No se encontraron productos para tu búsqueda.</p>`
    return
  }
  productList.forEach((product) => {
    const card = document.createElement('article')
    card.className = 'product-card'
    card.innerHTML = `
      <img src="${product.image}" alt="${
      product.name
    }" onerror="this.onerror=null;this.src='https://via.placeholder.com/200x200?text=Imagen+no+disponible';" />
      <div class="product-name">${product.name}</div>
      <div class="product-seller">${product.seller}</div>
      <div>
        <span class="product-price">€${product.price.toFixed(2)}</span>
        <span class="product-old-price">€${product.oldPrice.toFixed(2)}</span>
      </div>
    `
    productsSection.appendChild(card)
  })
}
renderProducts(productos)
const searchInput = document.getElementById('searchInput')
searchInput.addEventListener('input', (e) => {
  const texto = e.target.value.toLowerCase()
  const filtered = productos.filter((product) =>
    product.name.toLowerCase().includes(texto)
  )
  renderProducts(filtered)
})
