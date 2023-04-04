import GetImagesApi from "./js/getImagesApi";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import renderImageCard from "./js/renderImageCard";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const getImagesApi = new GetImagesApi();
const form = document.querySelector('.search-form');
const input = document.querySelector('[name="searchQuery"]');
const gallery = document.querySelector('.gallery-list');
const loadMore = document.querySelector('.load-more');


form.addEventListener('submit', onFormSubmit);
loadMore.addEventListener('click', onLoadMore);

let lightbox = new SimpleLightbox('.photo-card a');

function onFormSubmit(event) {
    event.preventDefault()
    const inputWord = input.value
    if(inputWord === '') {
        Notify.warning('Please, enter search word!')
        return
    }

    getImagesApi.setSearchWord(inputWord)
    gallery.innerHTML = ''
    getImagesApi.resetPage()


    getImagesApi.getImages()
        .then(dataImages => {
            Notify.success(`Hooray! We found ${dataImages.totalHits} images.`)
            const imagesHits = dataImages.hits
            imagesHits.map(image => {
                // console.log(image)
                renderImageCard(image)
            })
            loadMore.style.display = 'flex'
            lightbox.refresh()


        })
        .catch(error => {
            Notify.failure("Sorry, there are no images matching your search query. Please try again.")
        })
}

function onLoadMore() {
    getImagesApi.getImages()
        .then(dataImages => {
            // console.log(dataImages.hits)
            const imagesHits = dataImages.hits
            imagesHits.map(image => {
                // console.log(image)
                renderImageCard(image)
            })
            lightbox.refresh()
        })
        .catch(error => {
            Notify.info("We're sorry, but you've reached the end of search results.")
            loadMore.style.display = 'none'
        })
}





