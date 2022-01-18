import React, { useState } from "react";
import MovieCard from "../components/MovieCard/MovieCard";

const Dashboard = () => {

    return (
        <div className="dashboard" 
        style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '2em'
        }}>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </div>
    );
}

export default Dashboard;