import init, { resize, grayscale, blur, flip_horizontal, pixelate, invert } from '../rust/pkg/img.js';
import { requestPermission, setupOnMessageHandler } from './firebase-messaging.js';
import {
    saveOriginalImage,
    loadOriginalImage,
    saveImageFilters,
    getImageWithFilters,
    updateImageFilters
  } from './db.js';


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
    let currentImageId = null;
    let appliedFilters = [];

    // Cargar imagen desde archivo
    fileInput.addEventListener('change', async () => {
        const file = fileInput.files[0];
        if (file) {
            const arrayBuffer = await file.arrayBuffer();
            originalImageData = new Uint8Array(arrayBuffer);
            currentImageData = new Uint8Array(arrayBuffer);
            const imageId = await saveOriginalImage(new Blob([originalImageData], { type: file.type }));
            currentImageId = imageId;
            displayImage(currentImageData);
        }
    });

    /*
    
    const applyFilter = (filterFn) => {
        if (!currentImageData) return;
        let result = filterFn(currentImageData)
        currentImageData = result[0]
        let name = result[1];
        console.log(name);
        console.log(appliedFilters);
        if (appliedFilters.includes(name)) {
            console.log("removing filter");
            const index = appliedFilters.indexOf(name);
            if (index !== -1) {
                appliedFilters.splice(index, 1);
            }
            currentImageData = applyFilters()
        } else {
            console.log("adding filter");
            appliedFilters.push(name);
            displayImage(currentImageData);
        } 
    };

    const applyFilters = () => {
        if (!originalImageData) return;
        if (!appliedFilters.length) {
            currentImageData = originalImageData;
        } else {
            currentImageData = appliedFilters.reduce(
                (imageData, filterName) => applyFilterWithName(imageData, filterName),
                originalImageData
            );
        }
        displayImage(currentImageData);
    };*/

    const applyFilter = (filterFn) => {
        if (!currentImageData) return;
    
        const [resultImage, name] = filterFn(currentImageData);
    
        if (appliedFilters.includes(name)) {
            console.log("Removing filter:", name);
            appliedFilters.splice(appliedFilters.indexOf(name), 1);
        } else {
            console.log("Adding filter:", name);
            appliedFilters.push(name);
        }
    
        // Apply the full filter stack *once* after updating list
        applyFilters();
    };

    const applyFilters = () => {
        if (!originalImageData) return;
    
        // Clone original data to start clean
        currentImageData = new Uint8Array(originalImageData); 
        console.log(currentImageData);
    
        for (const name of appliedFilters) {
            currentImageData = applyFilterWithName(currentImageData, name)[0];
            console.log(currentImageData);
        }
    
        displayImage(currentImageData);
    };
    

    const applyFilterWithName = (imageData, filterName) => {
        switch (filterName) {
            case 'resize':
                return resize(imageData, 200, 200);
            case 'grayscale':
                return grayscale(imageData);
            case 'blur':
                return blur(imageData, 5.0);
            case 'flip':
                return flip_horizontal(imageData);
            case 'pixelate':
                return pixelate(imageData, 8);
            case 'invert':
                return invert(imageData);
            default:
                console.error(`Unknown filter: ${filterName}`);
                return imageData;
        }
    }


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
