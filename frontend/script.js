 // Função para adicionar itens ao carrinho
 function addToCart(product) {
  // Recuperar o número atual de itens no carrinho do localStorage
  let cartCount = localStorage.getItem('cartCount');

  // Se não houver nenhum valor no localStorage, inicialize com 0
  if (!cartCount) {
      cartCount = 0;
  }

  // Converter o número de itens para um inteiro
  cartCount = parseInt(cartCount);

  // Incrementar o número de itens
  cartCount++;

  // Atualizar o contador no carrinho
  document.getElementById('cart-count').textContent = cartCount;

  // Atualizar o número de itens no localStorage
  localStorage.setItem('cartCount', cartCount);

  
}

// Atualizar o contador no carrinho ao carregar a página
window.onload = function() {
  let cartCount = localStorage.getItem('cartCount');
  if (cartCount) {
      document.getElementById('cart-count').textContent = cartCount;
  }
};



