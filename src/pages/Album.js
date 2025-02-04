import React from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import MusicCard from './MusicCard';
import Header from '../components/Header';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [],
    };
    this.getSong = this.getSong.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.getSong(id);
  }

  getSong(id) {
    getMusics(id)
      .then((response) => this.setState({ songs: response }));
  }

  render() {
    const { songs } = this.state;

    return (
      <div data-testid="page-album">
        <Header />
        { songs.map((song, index) => (
          index === 0 ? (
            <div key={ song.trackId }>
              <h2 data-testid="album-name">{ song.collectionName }</h2>
              <h3 data-testid="artist-name">{ song.artistName }</h3>
            </div>
          ) : <MusicCard song={ song } />
        ))}
        <h1>Pagina de Albuns</h1>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Album;
