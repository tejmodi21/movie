import React from 'react';
import { connect} from 'react-redux';
import { movieDetails } from '../actions';
import {Link} from 'react-router-dom';

class MovieList extends React.Component {

    componentDidMount(){
        this.props.movieDetails(this.props.match.params.id);
    }

    render(){

        return (
            <div className="container">
                <div className="d-flex justify-content-center">
                    <img src={`${this.props.imageurl}${this.props.movie.poster_path}`} className="img-fluid" alt={this.props.movie.original_title} />
                </div>
                <div className="row badge-mute">
                    <div className="col-12 text-center text-dark">
                        <div className="text-uppercase font-bold" style={{fontSize: `25px`}}>
                            {this.props.movie.original_title}
                        </div>
                    </div>
                </div>
                    
                    <div className="row badge-dark">
                        <div className="col-4 text-center text-light">
                            <div className="font-weight-normal">
                                length
                            </div>
                        <div className="text-uppercase font-bold">{this.props.movie.runtime} 
                            minutes
                        </div>
                    </div>
                    
                        <div className="col-4 text-center text-light">
                            <div className="font-weight-normal">
                                language
                            </div>
                            <div className="text-uppercase font-bold">
                                english
                            </div>
                        </div> 
                        <div className="col-4 text-center text-light">
                            <div className="font-weight-normal">
                                released
                            </div>
                            <div className="text-uppercase font-bold">
                                {this.props.movie.release_date}
                            </div>
                        </div>    
                    </div>
                    <div className="col-12 text-center text-dark mb-2">
                        <div className="font-weight-normal">
                            {this.props.movie.overview}
                        </div>
                    </div>
                    <div className="d-flex mb-4 justify-content-center">
                        <Link to={`/movies/upcoming/${this.props.movie.id}/book-tickets/`} className="btn btn-primary">
                            BUY TICKETS
                        </Link>
                     </div>
            </div>
        );
    }
    
}
const mapStateToProps = (state,ownProps) => {
    console.log(state.movie);
    return {movie: state.movie, 
            api: state.auth.api,
            url: state.auth.url,
            imageurl: state.auth.imageurl }
}
// }

export default connect(mapStateToProps, {movieDetails})(MovieList);