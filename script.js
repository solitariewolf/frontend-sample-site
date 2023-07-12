// Array com os URLs das imagens do banner
const images = [
    './img1.jpg',
    './img2.jpg',
    './img3.jpg'
  ];
  
  // Índice da imagem atual
  let currentImage = 0;
  
  // Função para atualizar o banner
  function updateBanner() {
    // Seleciona o elemento do banner
    const banner = document.querySelector('#banner');
  
    // Atualiza o atributo src da imagem do banner
    banner.src = images[currentImage];
  
    // Atualiza o índice da imagem atual
    currentImage = (currentImage + 1) % images.length;
  }
  
  // Atualiza o banner a cada 3 segundos
  setInterval(updateBanner, 3000);
  
  // Atualiza o banner pela primeira vez
  updateBanner();
  