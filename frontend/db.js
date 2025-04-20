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
  const db = await dbPromise;
  const id = await db.add('originalImages', {
    image: imageBlob,
    timestamp: Date.now(),
  });
  return id;
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
export async function getAllOriginalImages() {
  const db = await dbPromise;
  return await db.getAll('originalImages');
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
export async function updateImageFilters(filterEntryId, filters) {
  const db = await dbPromise;
  const current = await db.get('imageFilters', filterEntryId);
  if (!current) return null;

  const updated = {
    ...current,
    filters,
    timestamp: Date.now(),
  };

  await db.put('imageFilters', updated);
  return updated;
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