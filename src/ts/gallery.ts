const selectedImage = document.getElementById("selected-image") as HTMLImageElement
const thumbnail1 = document.getElementById("thumbnail1")
const thumbnail2 = document.getElementById("thumbnail2")
const thumbnail3 = document.getElementById("thumbnail3")
const thumbnail4 = document.getElementById("thumbnail4")
const image1 = new URL('../assets/images/image-product-1.jpg', import.meta.url)
const image2 = new URL('../assets/images/image-product-2.jpg', import.meta.url)
const image3 = new URL('../assets/images/image-product-3.jpg', import.meta.url)
const image4 = new URL('../assets/images/image-product-4.jpg', import.meta.url)

const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4]
const images = [image1,image2,image3,image4]

const changeActiveImage = (givenThumbnail: HTMLElement) => {
    thumbnails.forEach((thumbnail,index) => {
        if (thumbnail === givenThumbnail) {
            thumbnail?.classList.add("thumbnails__thumbnail--active")
            const image = images[index]
            selectedImage.src = image.toString()
        } else {
            thumbnail?.classList.remove("thumbnails__thumbnail--active")            
        }
    })
}

thumbnail1?.addEventListener('click', () => {
    changeActiveImage(thumbnail1)
})
thumbnail2?.addEventListener('click', () => {
    changeActiveImage(thumbnail2)
})
thumbnail3?.addEventListener('click', () => {
    changeActiveImage(thumbnail3)
})
thumbnail4?.addEventListener('click', () => {
    changeActiveImage(thumbnail4)
})