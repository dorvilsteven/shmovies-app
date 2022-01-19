import React from "react";
import MovieCard from "../components/MovieCard/MovieCard";
import { useQuery } from "@apollo/client";
import { QUERY_MOVIES } from "../utils/queries";
import auth from "../utils/auth";

const Dashboard = () => {
    const { loading, data } = useQuery(QUERY_MOVIES);
    console.log(data);
    const movies = data?.movies || [];
    const loggedIn = auth.loggedIn();
    if (loading) {
        return (
            <h2>Getting Movies...</h2>
        );
    }
    return (
        <div className="dashboard" 
        style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '2em'
        }}>
            {movies.forEach(movie => {
                return (
                    <MovieCard 
                        title={movie.title} 
                        director={movie.director}
                        category={movie.category}></MovieCard>
                )
            })}
            <MovieCard />
            <MovieCard />
        </div>
    );
}

export default Dashboard;