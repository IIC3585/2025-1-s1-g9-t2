import init, { resize, grayscale, blur, flip_horizontal, pixelate, invert } from '../rust/pkg/img.js';
import { requestPermission, setupOnMessageHandler } from './firebase-messaging.js';


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
    
    const applyFilter = (filterFn) => {
        if (!currentImageData) return;
        currentImageData = filterFn(currentImageData);
        displayImage(currentImageData);
    };

    buttons.resize.addEventListener('click', () => applyFilter(data => resize(data, 200, 200)));
    buttons.grayscale.addEventListener('click', () => applyFilter(grayscale));
    buttons.blur.addEventListener('click', () => applyFilter(data => blur(data, 5.0)));
    buttons.flip.addEventListener('click', () => applyFilter(flip_horizontal));
    buttons.pixelate.addEventListener('click', () => applyFilter(data => pixelate(data, 8)));
    buttons.invert.addEventListener('click', () => applyFilter(invert));

    buttons.reset.addEventListener('click', () => {
        if (originalImageData) {
            currentImageData = new Uint8Array(originalImageData); // 👈 esto es una copia, no una referencia
            displayImage(currentImageData);
        }
    });

    buttons.download.addEventListener('click', () => {
        if (currentImageData) {
            downloadImage(currentImageData, 'processed_image.png');
    
            // Mostrar notificación si el usuario ha dado permiso
            if (Notification.permission === 'granted') {
                new Notification('Descarga iniciada!! ;) ', {
                    body: 'La imagen procesada se está descargando.',
                    icon: '/camIcon192.png', // o cualquier ícono de tu app
                });
            } else {
                console.log('Permiso de notificación no otorgado :(');
            }
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
        console.log('Service Worker is supported in this browser');
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Service Worker Registered', reg))
            .catch(err => console.error('Error in SW register', err));
    } else {
        console.log('Service Worker not supported in this browser');
    }
  
}

requestPermission();
setupOnMessageHandler();
main();
