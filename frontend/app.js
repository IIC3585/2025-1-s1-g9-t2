import init, { resize, grayscale, blur, invert } from './pkg/img.js';

async function main() {
    await init(); // Inicializa el módulo WASM

    const fileInput = document.getElementById('imageInput');
    const resizeButton = document.getElementById('resizeButton');
    const grayscaleButton = document.getElementById('grayscaleButton');
    const blurButton = document.getElementById('blurButton');
    const invertButton = document.getElementById('invertButton');
    const downloadButton = document.getElementById('downloadButton');

    let currentImageData; // Variable para almacenar la imagen procesada

    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const outputImage = document.getElementById('outputImage');
                outputImage.src = reader.result;
                outputImage.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    resizeButton.addEventListener('click', async () => {
        const file = fileInput.files[0];
        if (file) {
            const arrayBuffer = await file.arrayBuffer();
            const resizedImage = resize(new Uint8Array(arrayBuffer), 200, 200);
            currentImageData = resizedImage;
            displayImage(resizedImage);
        }
    });

    grayscaleButton.addEventListener('click', async () => {
        const file = fileInput.files[0];
        if (file) {
            const arrayBuffer = await file.arrayBuffer();
            const grayImage = grayscale(new Uint8Array(arrayBuffer));
            currentImageData = grayImage;
            displayImage(grayImage);
        }
    });

    blurButton.addEventListener('click', async () => {
        const file = fileInput.files[0];
        if (file) {
            const arrayBuffer = await file.arrayBuffer();
            const blurredImage = blur(new Uint8Array(arrayBuffer), 5.0);
            currentImageData = blurredImage;
            displayImage(blurredImage);
        }
    });

    invertButton.addEventListener('click', async () => {
        const file = fileInput.files[0];
        if (file) {
            const arrayBuffer = await file.arrayBuffer();
            const invertedImage = invert(new Uint8Array(arrayBuffer));
            currentImageData = invertedImage;
            displayImage(invertedImage);
        }
    });

    downloadButton.addEventListener('click', () => {
        if (currentImageData) {
            downloadImage(currentImageData, 'processed_image.png');
        }
    });

    function displayImage(uint8array, mimeType = 'image/png') {
        const blob = new Blob([uint8array], { type: mimeType });
        const imageUrl = URL.createObjectURL(blob);
        const outputImage = document.getElementById('outputImage');
        outputImage.src = imageUrl;
        outputImage.style.display = 'block';
        currentImageData = uint8array;
    }

    function downloadImage(imageData, fileName) {
        const blob = new Blob([imageData], { type: 'image/png' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.click();
    }
}

main();
