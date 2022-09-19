const image1 = new URL('../assets/images/image-product-1.jpg', import.meta.url)
const image2 = new URL('../assets/images/image-product-2.jpg', import.meta.url)
const image3 = new URL('../assets/images/image-product-3.jpg', import.meta.url)
const image4 = new URL('../assets/images/image-product-4.jpg', import.meta.url)

export const images = [image1, image2, image3, image4]

const thumbnail1 = document.getElementById("thumbnail1")
const thumbnail2 = document.getElementById("thumbnail2")
const thumbnail3 = document.getElementById("thumbnail3")
const thumbnail4 = document.getElementById("thumbnail4")

export const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4]

const lThumbnail1 = document.getElementById("lightbox-thumbnail1")
const lThumbnail2 = document.getElementById("lightbox-thumbnail2")
const lThumbnail3 = document.getElementById("lightbox-thumbnail3")
const lThumbnail4 = document.getElementById("lightbox-thumbnail4")

export const lThumbnails = [lThumbnail1, lThumbnail2, lThumbnail3, lThumbnail4]
export const active = {
    thumbnailIndex: 0,
    imageIndex:0
}

export const activeImageIndex = 0