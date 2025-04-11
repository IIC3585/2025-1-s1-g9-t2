import init, { resize, grayscale, blur } from './pkg/img.js';

async function main() {
    await init(); // Initialize and load the WASM module

    const fileInput = document.getElementById('imageInput');
    const resizeButton = document.getElementById('resizeButton');
    const grayscaleButton = document.getElementById('grayscaleButton');
    const blurButton = document.getElementById('blurButton');

    resizeButton.addEventListener('click', async () => {
        const file = fileInput.files[0];
        if (file) {
            const arrayBuffer = await file.arrayBuffer();
            const resizedImage = resize(new Uint8Array(arrayBuffer), 200, 200);
            downloadImage(resizedImage, 'resized_image.png');
        } o
    });

    grayscaleButton.addEventListener('click', async () => {
        const file = fileInput.files[0];
        if (file) {
            const arrayBuffer = await file.arrayBuffer();
            const grayImage = grayscale(new Uint8Array(arrayBuffer));
            downloadImage(grayImage, 'gray_image.png');
        }
    });

    blurButton.addEventListener('click', async () => {
        const file = fileInput.files[0];
        if (file) {
            const arrayBuffer = await file.arrayBuffer();
            const blurredImage = blur(new Uint8Array(arrayBuffer), 5.0);
            downloadImage(blurredImage, 'blurred_image.png');
        }
    });

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
