import init, { resize, grayscale, blur, flip_horizontal, pixelate, invert } from '../rust/pkg/img.js';
import { requestPermission, setupOnMessageHandler } from './firebase-messaging.js';
import {
    saveOriginalImage,
    loadOriginalImage,
    saveImageFilters,
    getImageWithFilters,
    updateImageFilters,
    deleteImageById,
    deleteAllImages,
    isDatabaseEmpty,
    getAllImagesWithFilters,
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
            let appliedFilters = [];
            const imageId = await saveOriginalImage(new Blob([originalImageData], { type: file.type }));
            
            currentImageId = imageId;
            saveImageFilters(imageId, appliedFilters);
            displayImage(currentImageData);
        }
    });


    const applyFilters = async (imageData = null) => {
        if (!imageData) {
            if (!originalImageData) return;
            console.log(originalImageData);
            currentImageData = new Uint8Array(originalImageData);
            console.log(currentImageData);
            console.log(appliedFilters);
            for (const name of appliedFilters) {
                currentImageData = await applyFilterWithName(currentImageData, name)[0];
                console.log(name, currentImageData);
            }
            displayImage(currentImageData);
            return currentImageData;
            
        } else {
            let {image, filters} = imageData;
            const buffer = await image.image.arrayBuffer(); // 👈 importante
            imageData = new Uint8Array(buffer);
            for (const name of filters) {
                imageData = applyFilterWithName(imageData, name)[0];
            }
            return imageData
        };
    };

    const applyFilter = (name) => {
        if (!currentImageData) return;

        if (name == "reset") {
            appliedFilters = [];
            updateImageFilters(currentImageId, []);
            currentImageData = new Uint8Array(originalImageData);
            displayImage(currentImageData);
            return;
        }
    
        if (appliedFilters.includes(name)) {
            appliedFilters.splice(appliedFilters.indexOf(name), 1);
        } else {
            appliedFilters.push(name);
        }    
        // Apply the full filter stack *once* after updating list
        updateImageFilters(currentImageId, appliedFilters);
        applyFilters();
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


    buttons.resize.addEventListener('click', () => applyFilter("resize"));
    buttons.grayscale.addEventListener('click', () => applyFilter("grayscale"));
    buttons.blur.addEventListener('click', () => applyFilter("blur"));
    buttons.flip.addEventListener('click', () => applyFilter("flip"));
    buttons.pixelate.addEventListener('click', () => applyFilter("pixelate"));
    buttons.invert.addEventListener('click', () => applyFilter("invert"));
    buttons.reset.addEventListener('click', () => applyFilter("reset"));

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
        const outputImage = document.getElementById('outputImage');
        if (!imageData || imageData.length === 0) {
            outputImage.style.display = 'none';  // Hide the image if no valid image data
            outputImage.src = ''; // Optionally clear the src to fully remove the previous image
            return;
        }
        const blob = new Blob([imageData], { type: mimeType });
        const url = URL.createObjectURL(blob);
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

    const viewUploadsButton = document.getElementById('viewUploadsButton');
    const uploadsModal = document.getElementById('uploadsModal');
    const closeUploadsModal = document.getElementById('closeUploadsModal');

    viewUploadsButton.addEventListener('click', () => {
        uploadsModal.classList.remove('hidden');
        loadUserUploadsGallery(); // Refresh gallery
    });

    closeUploadsModal.addEventListener('click', () => {
        uploadsModal.classList.add('hidden');
    });

    window.addEventListener('click', (event) => {
        if (event.target === uploadsModal) {
            uploadsModal.classList.add('hidden');
        }
    });

    async function loadUserUploadsGallery() {
        const uploadsGallery = document.getElementById('uploadsGallery');
        uploadsGallery.innerHTML = '';
    
        const images = await getAllImagesWithFilters(); // { id, image, timestamp }
    
        for (const imgEntry of images) {
            let {filters} = imgEntry;
            let {id} = imgEntry.image;
            let image = await applyFilters(imgEntry);
            const blob = new Blob([image], { type: 'image/png' });
            const blobUrl = URL.createObjectURL(blob);
    
            const container = document.createElement('div');
            container.className = 'thumbnail flex flex-col items-center';
    
            const imgElem = document.createElement('img');
            imgElem.src = blobUrl;
            imgElem.alt = 'Uploaded image';
            imgElem.className = 'w-full rounded';
    
            // Botón de cargar
            const loadBtn = document.createElement('button');
            loadBtn.textContent = 'Load';
            loadBtn.className = 'mt-2 bg-blue-500 text-white px-3 py-1 rounded';
            loadBtn.onclick = async () => {
                currentImageId = id;
                console.log("OG", imgEntry.image.image.arrayBuffer());
                originalImageData = new Uint8Array(await imgEntry.image.image.arrayBuffer());
                currentImageData = new Uint8Array(image);
                console.log(currentImageData);
                appliedFilters = filters;
                displayImage(currentImageData);
                setTimeout(() => {
                    uploadsModal.classList.add('hidden');
                }, 50);
            };
    
            // Botón de eliminar
            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = '🗑️';
            deleteBtn.className = 'absolute top-1 right-1 text-red-500 hover:scale-110 transition';
            deleteBtn.onclick = async () => {
                await deleteImageById(id);
                if (currentImageId === id) {
                    fileInput.value = ''; // Esto elimina la selección actual del input file
                    currentImageData = null;
                    originalImageData = null;
                    currentImageId = null;
                    appliedFilters = [];
                } 
                isDatabaseEmpty().then((empty) => {
                    if (empty) {uploadsModal.classList.add('hidden');}})

                await loadUserUploadsGallery();
                displayImage(currentImageData);
            };
    
            container.appendChild(deleteBtn);
            container.appendChild(imgElem);
            container.appendChild(loadBtn);
            uploadsGallery.appendChild(container);
        }
    }
    

    const clearImagesBtn = document.getElementById('clearImages');

    clearImagesBtn.onclick = async () => {
        deleteAllImages();
        fileInput.value = ''; // Esto elimina la selección actual del input file
        currentImageData = null;
        originalImageData = null;
        currentImageId = null;
        appliedFilters = [];
        setTimeout(() => {
            uploadsModal.classList.add('hidden');
          }, 50);
        displayImage(currentImageData);
    };

    function createImageElement(blob, name = 'Saved Image') {
        const url = URL.createObjectURL(blob);
        const li = document.createElement('li');
        li.className = 'upload-item';
      
        const img = document.createElement('img');
        img.src = url;
        img.alt = name;
        img.style.maxWidth = '100px';
        img.style.maxHeight = '100px';
        img.style.border = '1px solid #ccc';
        img.style.borderRadius = '8px';
      
        li.appendChild(img);
        return li;
      }

    await loadUserUploadsGallery();
  
}

requestPermission();
setupOnMessageHandler();
main();
