const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.querySelector('input[name="nome"]').value;


  alert(`Olá, ${nome}!`);
});