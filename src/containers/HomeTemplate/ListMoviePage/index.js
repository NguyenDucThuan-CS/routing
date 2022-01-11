import React, { Component } from 'react'
import MovieItem from './MovieItem'
import Loader from '../../component/Loader';
import { connect } from 'react-redux';
import { actFetchListMovie } from './modules/actions';

class ListMoviePage extends Component {

    componentDidMount() {
        //request 
        
       this.props.fetchData();
    }

    renderListMovie = () => {
        const { data, loading } = this.props;
        if(loading) return <Loader />
        return data?.map((movie)=>{
            return <MovieItem key = {movie.maPhim} movie={movie}/>
        })
    }
    render() {
        return (
            <div className='container'>
                <h3>List movie page</h3>
                <div className='row'>
                    {this.renderListMovie()}
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => {
            dispatch(actFetchListMovie());
        },
       
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.listMovieReducer.data,
        loading: state.listMovieReducer.loading,
        error: state.listMovieReducer.error,
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (ListMoviePage);


