import { gMatchLightboxSelected } from './gallery';
import { active, images,  lThumbnails} from './thumbnails-images';

const lightbox = document.getElementById("lightbox")
const lSelectedImage = document.getElementById("lightbox-image") as HTMLImageElement
let lActiveThumbnail = lThumbnails[active.thumbnailIndex];
lSelectedImage.src = images[active.thumbnailIndex].toString()

export const openLightbox = () => {
    lActiveThumbnail = lThumbnails[active.thumbnailIndex];
    lSelectedImage.src = images[active.thumbnailIndex].toString()
    changeLightboxActiveImage(lActiveThumbnail)
    lightbox?.classList.add('lightbox--is-open')
}
const closeLightbox = () => {
    gMatchLightboxSelected()
    lightbox?.classList.remove('lightbox--is-open')
}
const lightboxCloseButton = document.getElementById('lightbox-close')
lightboxCloseButton?.addEventListener('click', closeLightbox)


const changeLightboxActiveImage = (givenThumbnail: HTMLElement|null) => {
    lThumbnails.forEach((thumbnail,index) => {
        if (thumbnail === givenThumbnail) {
            lActiveThumbnail = thumbnail
            active.thumbnailIndex=index
            thumbnail?.classList.add("thumbnails__thumbnail--active")
            const image = images[active.thumbnailIndex]
            lSelectedImage.src = image.toString()
        } else {
            thumbnail?.classList.remove("thumbnails__thumbnail--active")            
        }
    })
}

lThumbnails[0]?.addEventListener('click', () => {
    changeLightboxActiveImage(lThumbnails[0])
})
lThumbnails[1]?.addEventListener('click', () => {
    changeLightboxActiveImage(lThumbnails[1])
})
lThumbnails[2]?.addEventListener('click', () => {
    changeLightboxActiveImage(lThumbnails[2])
})
lThumbnails[3]?.addEventListener('click', () => {
    changeLightboxActiveImage(lThumbnails[3])
})

const lCarouselNextButton = document.getElementById('l-carousel-next')
const lCarouselPrevButton = document.getElementById('l-carousel-prev')

const carouselNext = () => {
    let nextThumbnail:HTMLElement|null;
    if (active.thumbnailIndex !== (lThumbnails.length - 1)) {
    nextThumbnail = lThumbnails[active.thumbnailIndex+1]
    } else {
    nextThumbnail = lThumbnails[0]
    }
    nextThumbnail && changeLightboxActiveImage(nextThumbnail)
}
lCarouselNextButton?.addEventListener('click', carouselNext)

const carouselPrev = () => {
    let prevThumbnail:HTMLElement|null;
    if (active.thumbnailIndex !== 0) {
        prevThumbnail = lThumbnails[active.thumbnailIndex-1]
    } else {
        prevThumbnail = lThumbnails[lThumbnails.length-1]
    }
       prevThumbnail&& changeLightboxActiveImage(prevThumbnail)
}
lCarouselPrevButton?.addEventListener('click', carouselPrev)