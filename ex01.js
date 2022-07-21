function calcularPreco(notebook, preco) {
  let precoEnvio;
  if (preco <= 2000) {
    precoEnvio = 300;
  } else if (preco <= 4000) {
    precoEnvio = 450;
  } else {
    precoEnvio = 700;
  }
  let precoFinal = precoEnvio + preco;
  console.log(
    `O produto ${notebook} custa ${preco}. Seu custo de envio é ${precoEnvio}. Portanto, o preço final é ${precoFinal}`
  );
}

calcularPreco("Macbook", 2500);
calcularPreco("Celular", 500);
calcularPreco("Playstation", 4500);
