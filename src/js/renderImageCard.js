const gallery = document.querySelector('.gallery-list')

export default function renderImageCard(image) {
    const card = `
        <div class="photo-card">
            <a href="${image.largeImageURL}">
                <img src="${image.webformatURL}" alt="${image.tags}" class="gallery__img" width="300" loading="lazy" />
            </a>
            <div class="box-info">
                <p class="info-item">
                    <b>Likes</b>
                       ${image.likes}
                </p>
                </li>
                <p class="info-item">
                    <b>Views</b>
                        ${image.views}
                </p>
                <p class="info-item">
                    <b>Comments</b>
                        ${image.comments}
                </p>
                <p class="info-item">
                    <b>Downloads</b>
                        ${image.downloads}
                </p>
              </ul>
            </div>
        </div>
        `

gallery.insertAdjacentHTML('beforeend', card)

}
