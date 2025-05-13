document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

document.querySelector('.cart').addEventListener('click', function() {
    document.querySelector('.cart-tap').classList.toggle('active')
})

document.querySelector('.cart-img').addEventListener('click', function() {
    document.querySelector('.cart-tap-mobile').classList.toggle('active')
})

const smallSize = window.matchMedia("(max-width: 450px)")
function handleScreenChange(e){
    if(e.matches){
        document.querySelector('.container').style.display = 'flex'
        document.querySelector('.container').style.flexDirection = 'column'
        document.querySelector('.container').style.padding = '0'
        document.querySelector('.container').style.alignItems = 'center'
        // document.querySelector('.nav').style.display = 'none'
        document.querySelector('.burger').style.display = 'flex'
    }
    else{
        document.querySelector('.container').style.display = 'grid'
        document.querySelector('.container').style.gridColumns = '8fr'
        document.querySelector('.container').style.padding = '20px'
        // document.querySelector('.nav').style.display = 'flex'
        document.querySelector('.burger').style.display = 'none'
    }
}
handleScreenChange(smallSize);
smallSize.addEventListener('change', handleScreenChange)
const cartIcon = document.querySelectorAll('.cart');
const cartPanel = document.querySelector('.cart-tap');

const rentButtons = document.querySelectorAll('.box button');

rentButtons.forEach(button => {
  button.addEventListener('click', () => {
    const bookBox = button.closest('.box');
    const bookName = bookBox.querySelector('.book-name').textContent;

    cartPanel.innerHTML = `
      <div style="display:flex;flex-direction:column;gap:10px">
        <h1>Your rental card</h1>
        <h3>${bookName} <span style="font-weight:100;font-size:12px">x1</span></h3>
        <p>your total price is:$1.50</p>
         <button>Confirm all</button>
      </div>
    `;
    cartPanel.classList.add('active'); 
  });
});



