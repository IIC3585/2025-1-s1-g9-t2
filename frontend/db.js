import { openDB } from 'idb';

export const dbPromise = openDB('image-editor-db', 1, {
  upgrade(db) {
    // Store for original uploaded images
    if (!db.objectStoreNames.contains('originalImages')) {
      const imageStore = db.createObjectStore('originalImages', {
        keyPath: 'id',
        autoIncrement: true,
      });
      imageStore.createIndex('timestamp', 'timestamp');
    }

    // Store for filters applied to each image
    if (!db.objectStoreNames.contains('imageFilters')) {
      const filterStore = db.createObjectStore('imageFilters', {
        keyPath: 'id',
        autoIncrement: true,
      });
      filterStore.createIndex('imageId', 'imageId');
      filterStore.createIndex('timestamp', 'timestamp');
    }
  },
});

/**
 * Save an original uploaded image
 * @param {Blob} imageBlob
 * @returns {number} id of the new image
 */
export async function saveOriginalImage(imageBlob) {
    try {
      const db = await dbPromise;  // Make sure dbPromise resolves properly
  
      // Check if db is valid before trying to add the image
      if (!db) {
        throw new Error("Failed to open IndexedDB.");
      }
  
      // Adding the image to the 'originalImages' store
      const id = await db.add('originalImages', {
        image: imageBlob,
        timestamp: Date.now(),
      });
  
      // Ensure the ID is returned
      console.log('Image saved with ID:', id);
      return id;
  
    } catch (error) {
      console.error("Error in saveOriginalImage:", error);
      throw error;  // Rethrow so you can catch it later if needed
    }
  }
  

/**
 * Save a list of filters applied to a specific image
 * @param {number} imageId - ID of the original image
 * @param {Array} filters - Array of filters applied in order
 */
export async function saveImageFilters(imageId, filters = []) {
  const db = await dbPromise;
  return await db.add('imageFilters', {
    imageId,
    filters,
    timestamp: Date.now(),
  });
}

/**
 * Get all original uploaded images
 */
export async function getAllImagesWithFilters() {
    const db = await dbPromise;
  
    let images = await db.getAll('originalImages');
  
    // Sort images by timestamp in descending order (newest first)
    images.sort((a, b) => b.timestamp - a.timestamp);
  
    const result = await Promise.all(
      images.map(async (image) => {
        const filters = await db.getAllFromIndex('imageFilters', 'imageId', image.id);
        return {
          image,
          filters: filters.length > 0 ? filters[0].filters : [],
        };
      })
    );
  
    return result;
  }
  
/**
 * Get the filters associated with a specific image
 * @param {number} imageId
 */
export async function getFiltersByImageId(imageId) {
  const db = await dbPromise;
  const index = db.transaction('imageFilters').store.index('imageId');
  return await index.getAll(imageId);
}

/**
 * Update the filters list for an existing image filter entry
 * @param {number} filterEntryId
 * @param {Array} filters
 */
export async function updateImageFilters(imageId, filters) {
    try {
      const db = await dbPromise;  // Ensure dbPromise resolves properly
      const transaction = db.transaction(['imageFilters'], 'readwrite');
      const store = transaction.objectStore('imageFilters');
      
      // Get all entries from the imageFilters store and filter by imageId
      const allFilters = await store.getAll();
      const existingFilterEntry = allFilters.find(entry => entry.imageId === imageId);
  
      if (!existingFilterEntry) {
        // If no filter entry is found for the given imageId, create a new one
        await store.add({
          imageId: imageId,
          filters: filters,
        });
        console.log(`Created new filter entry for image ID ${imageId}`);
      } else {
        // If filters exist, update them
        existingFilterEntry.filters = filters;
        await store.put(existingFilterEntry);
        console.log(`Filters updated successfully for image ID ${imageId}`);
        console.log(filters);
      }
      
    } catch (error) {
      console.error("Error in updateImageFilters:", error);
      throw error;  // Rethrow so you can catch it later if needed
    }
  }
  
  

/**
 * Get an image and its applied filters in one object
 * @param {number} imageId
 * @returns {Object} { image, filters }
 */
export async function getImageWithFilters(imageId) {
    const db = await dbPromise;
    const image = await db.get('originalImages', imageId);
  
    // Usually one filter entry per image, but supports multiple
    const filtersList = await db.getAllFromIndex('imageFilters', 'imageId', imageId);
  
    return {
      image,
      filters: filtersList.length > 0 ? filtersList[0].filters : [],
      filterEntryId: filtersList.length > 0 ? filtersList[0].id : null,
    };
  }

  export async function loadOriginalImage(imageId) {
    const db = await dbPromise;
    const record = await db.get('originalImages', imageId);

    if (!record || !record.image) {
        throw new Error(`No image found for ID ${imageId}`);
    }

    const blob = record.image;
    const arrayBuffer = await blob.arrayBuffer();
    return new Uint8Array(arrayBuffer);
}

export async function deleteImageById(id) {
    const db = await dbPromise;
    const tx = db.transaction('originalImages', 'readwrite');
    const store = tx.objectStore('originalImages');
    await store.delete(id);
    await tx.done;
}

export async function deleteAllImages() {
    const db = await dbPromise;
    const tx = db.transaction('originalImages', 'readwrite');
    await tx.objectStore('originalImages').clear();
    await tx.done;
}

export async function isDatabaseEmpty() {
    const db = await dbPromise;
    const count = await db.count('originalImages');  // Get the count of records in the store
  
    return count === 0;  // If count is 0, the database is empty
  }