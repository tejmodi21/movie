import React from 'react';
import {upcomingMovie} from '../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import BuyTickets from './BuyTickets';

class Home extends React.Component {   
    
   componentDidMount(){
       this.props.upcomingMovie();

   }
    
    movie(){
        return this.props.movies.map((movie) => {
            return (
            <div className="col-lg-12 col-md-6 col-sm-4" key={movie.id}>
                <Link to={`/movies/upcoming/${movie.id}`} className="btn">
                <img src={`${this.props.imageurl}${movie.poster_path}`} className="img-fluid" alt={movie.original_title} />
                </Link>
            </div>    
            );
        })
    }
    
    

    bannerImg(){
    if(Array.isArray(this.props.movies) && this.props.movies.length > 0){
        const randomMovie = this.props.movies[Math.floor(Math.random() * this.props.movies.length)];
            return (
            <div>
                <div className="d-flex justify-content-center mb-3">
                <img src={`${this.props.imageurl}${randomMovie.poster_path}`} className="img-fluid" alt={randomMovie.original_title} />
                </div>
                <div className="d-flex justify-content-center mb-3"> 
                <Link to={`/movies/upcoming/${randomMovie.id}/book-tickets/`} className="btn btn-primary">BUY TICKETS</Link> 
                </div>   
            </div>
                
             );
     }    
    }
    

    render(){
        return (
        <div className="container">
            <div>
            {this.bannerImg()}
            </div>
            <div className="row badge-dark">
                <div className="col-12 text-center text-white font-weight-bold p-2" style={{fontSize: '25px'}}>  
                    UPCOMING MOVIE
                </div>
            </div>
            <div className="row mb-3">    
                <div className="col-4">
                    {this.movie()}
                </div>
                <div className="col-4">
                    {this.movie()}
                </div>
                <div className="col-4">
                    {this.movie()}
                </div>
            </div>  
        </div>    
                      
        );
    }
}
  

const mapStateToProps = state => {
    return {movies: state.movies,
            api: state.auth.api,
            url: state.auth.url,
            imageurl: state.auth.imageurl}
}

export default connect(mapStateToProps, {upcomingMovie})(Home);