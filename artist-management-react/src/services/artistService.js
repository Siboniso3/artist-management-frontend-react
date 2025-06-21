import axios from "axios";

const ARTIST_API_BASE_URL = 'http://localhost:8080/v1/api/artist'

class ArtistService {
    getArtists() {
        return axios.get(ARTIST_API_BASE_URL);
    }
    postArtists() {
        return axios.get(ARTIST_API_BASE_URL);
    }

}

export default new ArtistService()