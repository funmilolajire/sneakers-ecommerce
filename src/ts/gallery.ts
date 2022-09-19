import { openLightbox } from "./lightbox"
import { active, images, thumbnails } from "./thumbnails-images"

export const gSelectedImage = document.getElementById("selected-image") as HTMLImageElement
export let gActiveThumbnail = thumbnails[active.thumbnailIndex];

const changeActiveImage = (givenThumbnail: HTMLElement|null) => {
    thumbnails.forEach((thumbnail,index) => {
        if (thumbnail === givenThumbnail) {
            gActiveThumbnail = thumbnail
            active.thumbnailIndex=index
            thumbnail?.classList.add("thumbnails__thumbnail--active")
            const image = images[active.thumbnailIndex]
            gSelectedImage.src = image.toString()
        } else {
            thumbnail?.classList.remove("thumbnails__thumbnail--active")            
        }
    })
}

thumbnails[0]?.addEventListener('click', () => {
    changeActiveImage(thumbnails[0])
})
thumbnails[1]?.addEventListener('click', () => {
    changeActiveImage(thumbnails[1])
})
thumbnails[2]?.addEventListener('click', () => {
    changeActiveImage(thumbnails[2])
})
thumbnails[3]?.addEventListener('click', () => {
    changeActiveImage(thumbnails[3])
})

export const gMatchLightboxSelected = () => {
    gActiveThumbnail = thumbnails[active.thumbnailIndex];
    gSelectedImage.src = images[active.thumbnailIndex].toString()
    changeActiveImage(gActiveThumbnail)
}

gSelectedImage.addEventListener('click', () => {
    window.innerWidth!>750&& openLightbox()
})


const gCarouselNextButton = document.getElementById('g-carousel-next')
const gCarouselPrevButton = document.getElementById('g-carousel-prev')

const carouselNext = () => {
    let nextThumbnail:HTMLElement|null;
    if (active.thumbnailIndex !== (thumbnails.length - 1)) {
    nextThumbnail = thumbnails[active.thumbnailIndex+1]
    } else {
    nextThumbnail = thumbnails[0]
    }
    nextThumbnail && changeActiveImage(nextThumbnail)
}
gCarouselNextButton?.addEventListener('click', carouselNext)

const carouselPrev = () => {
    let prevThumbnail:HTMLElement|null;
    if (active.thumbnailIndex !== 0) {
        prevThumbnail = thumbnails[active.thumbnailIndex-1]
    } else {
        prevThumbnail = thumbnails[thumbnails.length-1]
    }
       prevThumbnail&& changeActiveImage(prevThumbnail)
}
gCarouselPrevButton?.addEventListener('click', carouselPrev)