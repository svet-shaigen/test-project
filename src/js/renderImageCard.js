const gallery = document.querySelector('.gallery-list')

export default function renderImageCard(image) {
    const card = `
        <div class="photo-card">
            <a href="${image.largeImageURL}">
                <div class="gallery__thumb"><img src="${image.webformatURL}" alt="${image.tags}" class="gallery__img" width="300" loading="lazy" /></div>
            </a>
            <div class="box-info">
                <ul class="gallery-info list">
                    <li>
                        <p class="gallery-info__text">
                            <b>Likes</b>
                                ${image.likes}
                        </p>
                    </li>
                    <li>
                        <p class="gallery-info__text">
                            <b>Views</b>
                                ${image.views}
                        </p>
                    <li>
                        <p class="gallery-info__text">
                            <b>Comments</b>
                                ${image.comments}
                        </p>
                    <li>
                        <p class="gallery-info__text">
                            <b>Downloads</b>
                                ${image.downloads}
                        </p>
              </ul>
            </div>
        </div>
        `

gallery.insertAdjacentHTML('beforeend', card)

}
