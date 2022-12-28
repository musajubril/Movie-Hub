import { MovieGenres, SeriesGenres } from "./genres"

export default function CheckGenre(genres, type){
    const genreNames = []
    if(type==="movie"){
        for(let i=0; i<genres.length; i+=1){
            const filterGenre = MovieGenres.filter(genre=> genre.id.toString()===genres[i].toString())[0]
            genreNames.push(filterGenre?.name)
        }
    }
    else if(type==="series") {
        for(let i=0; i<genres.length; i+=1){
            const filterGenre = SeriesGenres.filter(genre=> genre.id.toString()===genres[i].toString())[0]
            genreNames.push(filterGenre?.name)
        }
    }
    return genreNames
}