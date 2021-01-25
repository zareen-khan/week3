function handleDOM() {
  if (products && products.length) {
    for (let i = 0; i < products.length; i++) {
      let product = products[i]
      document.querySelector('.products').insertAdjacentHTML('beforeend', `
        <div class="p-4 w-full md:w-1/2 lg:w-1/3">
          <div class="border h-full p-4 flex flex-col">
            <h2 class="text-lg font-bold mb-4">${product.name}</h2>
            <div class="mb-4"><img src="${product.image}">
            </div>
            <div class="mb-4 text-gray-900">${product.description}
            </div>
            <div class="mt-auto text-purple-500 text-2xl">$${product.price}</div>
          </div>
        </div>
      `)
    }
  }

  if (numberOfProducts && numberOfProducts > 0) {
    document.querySelector('.product-count').innerHTML = `
      📦&nbsp;&nbsp;&nbsp;${numberOfProducts} products shown
    `
  }

  if (promotion1Icon || promotion1Description) {
    document.querySelector('.promotions').insertAdjacentHTML('beforeend', `
      <div class="md:w-1/3 my-4 p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-xl">
        ${promotion1Icon}&nbsp;&nbsp;&nbsp;${promotion1Description}
      </div>
    `)
  }

  if (promotion2Icon || promotion2Description) {
    document.querySelector('.promotions').insertAdjacentHTML('beforeend', `
      <div class="md:w-1/3 my-4 p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xl">
        ${promotion2Icon}&nbsp;&nbsp;&nbsp;${promotion2Description}
      </div>
    `)
  }

  if (promotion3Icon || promotion3Description) {
    document.querySelector('.promotions').insertAdjacentHTML('beforeend', `
      <div class="md:w-1/3 my-4 p-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold text-xl">
        ${promotion3Icon}&nbsp;&nbsp;&nbsp;${promotion3Description}
      </div>
    `)
  }
}