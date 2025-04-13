import init, { resize, grayscale, blur } from './pkg/img.js';

async function main() {
    await init(); // Initialize and load the WASM module

    const fileInput = document.getElementById('imageInput');
    const resizeButton = document.getElementById('resizeButton');
    const grayscaleButton = document.getElementById('grayscaleButton');
    const blurButton = document.getElementById('blurButton');


    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const outputImage = document.getElementById('outputImage');
                outputImage.src = reader.result; // base64
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
            // downloadImage(resizedImage, 'resized_image.png');
            displayImage(resizedImage, 'image/png');
        }
    });

    grayscaleButton.addEventListener('click', async () => {
        const file = fileInput.files[0];
        if (file) {
            const arrayBuffer = await file.arrayBuffer();
            const grayImage = grayscale(new Uint8Array(arrayBuffer));
            // downloadImage(grayImage, 'gray_image.png');
            displayImage(grayImage, 'image/png');
        }
    });

    blurButton.addEventListener('click', async () => {
        const file = fileInput.files[0];
        if (file) {
            const arrayBuffer = await file.arrayBuffer();
            const blurredImage = blur(new Uint8Array(arrayBuffer), 5.0);
            // downloadImage(blurredImage, 'blurred_image.png');
            displayImage(blurredImage, 'image/png');
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

    function displayImage(uint8array, mimeType = 'image/png') {
        const blob = new Blob([uint8array], { type: mimeType });
        const imageUrl = URL.createObjectURL(blob);
    
        const outputImage = document.getElementById('outputImage');
        outputImage.src = imageUrl;
        outputImage.style.display = 'block';
    }
    
}

main();
