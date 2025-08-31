function addToCart(product){let cart=JSON.parse(localStorage.getItem('cart'))||[];cart.push(product);localStorage.setItem('cart',JSON.stringify(cart));alert(product+' added to cart');}
function showCart(){let cart=JSON.parse(localStorage.getItem('cart'))||[];let out='<h3>Your Cart</h3>';if(cart.length===0){out+='<p>No items.</p>';}else{cart.forEach(item=>out+='<p>'+item+'</p>');}document.getElementById('cart').innerHTML=out;}
function toggleDarkMode(){
  document.body.classList.toggle('dark');
  if(document.body.classList.contains('dark')){
    localStorage.setItem('theme','dark');
  } else {
    localStorage.setItem('theme','light');
  }
}
window.onload=function(){
  if(localStorage.getItem('theme')==='dark'){
    document.body.classList.add('dark');
  }
  if(document.getElementById('cart')){showCart();}
};
