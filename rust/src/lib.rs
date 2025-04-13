use wasm_bindgen::prelude::*;
use std::io::Cursor;
use image::{ImageFormat, GenericImageView};

#[wasm_bindgen]
pub fn resize(image_data: &[u8], width: u32, height: u32) -> Vec<u8> {
    let image = image::load_from_memory(image_data).expect("Failed to load image");
    let resized = image.resize(width, height, image::imageops::FilterType::Lanczos3);
    let mut buf = Cursor::new(Vec::new());
    resized.write_to(&mut buf, ImageFormat::Png).expect("Failed to write image"); // Usamos ImageFormat en lugar de ImageOutputFormat
    buf.into_inner()
}

#[wasm_bindgen]
pub fn grayscale(image_data: &[u8]) -> Vec<u8> {
    let image = image::load_from_memory(image_data).expect("Failed to load image");
    let gray = image.grayscale();
    let mut buf = Cursor::new(Vec::new());
    gray.write_to(&mut buf, ImageFormat::Png).expect("Failed to write image"); // Usamos ImageFormat en lugar de ImageOutputFormat
    buf.into_inner()
}

#[wasm_bindgen]
pub fn blur(image_data: &[u8], sigma: f32) -> Vec<u8> {
    let image = image::load_from_memory(image_data).expect("Failed to load image");
    let blurred = image.blur(sigma);
    let mut buf = Cursor::new(Vec::new());
    blurred.write_to(&mut buf, ImageFormat::Png).expect("Failed to write image"); // Usamos ImageFormat en lugar de ImageOutputFormat
    buf.into_inner()
}

#[wasm_bindgen]
pub fn flip_horizontal(image_data: &[u8]) -> Vec<u8> {
    let image = image::load_from_memory(image_data).expect("Failed to load image");
    let flipped = image::imageops::flip_horizontal(&image);
    let mut buf = Cursor::new(Vec::new());
    flipped.write_to(&mut buf, ImageFormat::Png).expect("Failed to write image");
    buf.into_inner()
}

#[wasm_bindgen]
pub fn pixelate(image_data: &[u8], pixel_size: u32) -> Vec<u8> {
    let image = image::load_from_memory(image_data).expect("Failed to load image");

    let (width, height) = image.dimensions();
    let small = image.resize_exact(width / pixel_size, height / pixel_size, image::imageops::FilterType::Nearest);
    let pixelated = small.resize_exact(width, height, image::imageops::FilterType::Nearest);

    let mut buf = Cursor::new(Vec::new());
    pixelated.write_to(&mut buf, ImageFormat::Png).expect("Failed to write image");
    buf.into_inner()
}
