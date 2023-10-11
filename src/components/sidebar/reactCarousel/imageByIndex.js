let image1 = 'https://unsplash.it/600/400'
let image2 = 'https://unsplash.it/610/400'
let image3 = 'https://unsplash.it/595/400'
let image4 = 'https://unsplash.it/500/400'

export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
