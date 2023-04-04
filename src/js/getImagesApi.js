import axios from "axios";

export default class GetImagesApi {
    constructor() {
        this.baseUrl = 'https://pixabay.com/api/';
        this.apiKey = '34927401-121899480aec54049d4a80921';
        this.searchWord = '';
        this.imageType = 'photo';
        this.orientation = 'horizontal';
        this.safesearch = true;
        this.page = 1;
        this.perPage = 40;
    }
    async getImages() {
        const URL = `${this.baseUrl}?key=${this.apiKey}&q=${this.searchWord}&image_type=${this.imageType}&orientation=${this.orientation}&safesearch=${this.safesearch}&page=${this.page}&per_page=${this.perPage}`
        return await axios.get(URL)
        .then(response => {
           if(response.status !== 200 || response.data.hits.length === 0) {
                throw new Error(response.status)
             }
            this.nextPage()
            return response.data
        })
    }
    nextPage() {
        this.page += 1;
    }
    resetPage() {
        this.page = 1;  
    }
    setSearchWord(word) {
        this.searchWord = word
    }

}












