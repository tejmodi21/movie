import axios from 'axios';

//export const apikey = '1d7e52e07b0a5958e78e0b936b84ca92';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/', 
    header: {
        Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDdlNTJlMDdiMGE1OTU4ZTc4ZTBiOTM2Yjg0Y2E5MiIsInN1YiI6IjVlNWVkMThkNTVjOTI2MDAxNzU1ZjEyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SFr3mep688j5dewl-G-TIEqEmr7MnQCc4V4dX3dRH_w'
    } 
});

