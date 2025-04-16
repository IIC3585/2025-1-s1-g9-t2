import init, { resize, grayscale, blur, flip_horizontal, pixelate, invert } from '../rust/pkg/img.js';

async function main() {
    await init(); // Carga el módulo WASM

    const fileInput = document.getElementById('imageInput');
    const buttons = {
        resize: document.getElementById('resizeButton'),
        grayscale: document.getElementById('grayscaleButton'),
        blur: document.getElementById('blurButton'),
        flip: document.getElementById('flipButton'),
        pixelate: document.getElementById('pixelateButton'),
        invert: document.getElementById('invertButton'),
        download: document.getElementById('downloadButton'),
        reset: document.getElementById('resetButton')
    };

    let currentImageData = null;
    let originalImageData = null;

    // Cargar imagen desde archivo
    fileInput.addEventListener('change', async () => {
        const file = fileInput.files[0];
        if (file) {
            const arrayBuffer = await file.arrayBuffer();
            originalImageData = new Uint8Array(arrayBuffer);
            currentImageData = new Uint8Array(arrayBuffer);
            displayImage(currentImageData);
        }
    });
    

    buttons.resize.addEventListener('click', () => {
        if (currentImageData) {
            currentImageData = resize(currentImageData, 200, 200);
            displayImage(currentImageData);
        }
    });

    buttons.grayscale.addEventListener('click', () => {
        if (currentImageData) {
            currentImageData = grayscale(currentImageData);
            displayImage(currentImageData);
        }
    });

    buttons.blur.addEventListener('click', () => {
        if (currentImageData) {
            currentImageData = blur(currentImageData, 5.0);
            displayImage(currentImageData);
        }
    });

    buttons.flip.addEventListener('click', () => {
        if (currentImageData) {
            currentImageData = flip_horizontal(currentImageData);
            displayImage(currentImageData);
        }
    });

    buttons.pixelate.addEventListener('click', () => {
        if (currentImageData) {
            currentImageData = pixelate(currentImageData, 8);
            displayImage(currentImageData);
        }
    });

    buttons.invert.addEventListener('click', () => {
        if (currentImageData) {
            currentImageData = invert(currentImageData);
            displayImage(currentImageData);
        }
    });

    buttons.reset.addEventListener('click', () => {
        if (originalImageData) {
            currentImageData = new Uint8Array(originalImageData); // 👈 esto es una copia, no una referencia
            displayImage(currentImageData);
        }
    });
    


    buttons.download.addEventListener('click', () => {
        if (currentImageData) {
            downloadImage(currentImageData, 'processed_image.png');
        }
    });

    function displayImage(imageData, mimeType = 'image/png') {
        const blob = new Blob([imageData], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const outputImage = document.getElementById('outputImage');
        outputImage.src = url;
        outputImage.style.display = 'block';
    }

    function downloadImage(imageData, fileName) {
        console.log("Downloading image. Bytes:", imageData.length);
        const blob = new Blob([imageData], { type: 'image/png' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.click();
        URL.revokeObjectURL(url);
    }

    window.addEventListener('load', () => {
        setTimeout(() => {
            document.getElementById('splash-screen').style.display = 'none';
        }, 1000);
    });

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker Registered', reg))
            .catch(err => console.error('Error in SW register', err));
        });
    }
  
}

main();
