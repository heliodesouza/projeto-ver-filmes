import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "066fc9df8fb9e65ef60aa80c16153f04",
          language: "pt-BR",
          page: page,
        }
      });

      setFilmes([filmes, ...response.data.results]);
      setLoading(false);
    }

    loadFilmes();
  }, [page, filmes]); // A mudança de página deve acionar o carregamento dos novos filmes

  const handleLoadMore = () => {
    setPage(page + 1); // Incrementa a página para carregar mais filmes
  };

  if (loading) {
    return (
      <div className='loading'>
        <h2>Carregando filmes...</h2>
      </div>
    );
  }

  return (
    <div className='container'>
      <div className='lista-filmes'>
        {filmes.map((filme) => (
          <article key={filme.id}>
            <strong>{filme.title}</strong>
            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
            <Link to={`/filme/${filme.id}`}>Acessar</Link>
          </article>
        ))}
        <div className='load-more'>
          <button onClick={handleLoadMore}>Carregar mais</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
