document.addEventListener('DOMContentLoaded', () => {
    const handleLogin=(event)=> {
      event.preventDefault();
  
      const username = document.getElementById('loginUsername').value;
      const password = document.getElementById('loginPassword').value;
  
      fetch('/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })
      .then(response => response.json())
      .then(result => {
        alert(result.message);
      });
    }

    const handleSignup=(event)=> {
      event.preventDefault(); 
      const username = document.getElementById('signupUsername').value;
      const password = document.getElementById('signupPassword').value;

      fetch('/api/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })
      .then(response => response.json())
      .then(result => {
        alert(result.message); 
      });
    }
    const loadProducts=()=> {
      fetch('/api/product/products')
        .then(response => response.json())
        .then(products => {
          const productList = document.getElementById('productList');
          productList.innerHTML = '';
          products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.textContent = `${product.name} - $${product.price}`;
            productList.appendChild(productItem);
          });
        });
    }
  
    const loginForm = document.getElementById('loginForm');
    if (loginForm) loginForm.addEventListener('submit', handleLogin);
  
    const signupForm = document.getElementById('signupForm');
    if (signupForm) signupForm.addEventListener('submit', handleSignup);

    const productList = document.getElementById('productList');
    if (productList) loadProducts();
  });
  