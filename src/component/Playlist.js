import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pod from './Pod';
import { typePlaylist } from '../utils/type';
import { defPlaylist } from '../utils/default';
import '../style/Playlist.css';

class Playlist extends Component {
  static propTypes = {
    playlist: typePlaylist,
    onPodClick: PropTypes.func,
  };

  static defaultProps = {
    playlist: defPlaylist,
    onPodClick: () => {},
  };

  displayName = 'Playlist';

  render() {
    const { playlist, onPodClick } = this.props;

    return (
      <div className="Playlist">
        {
          playlist.map(pod => (
            <Pod key={pod._id} pod={pod} onPodClick={onPodClick} />
          ))
        }
      </div>
    );
  }
}

export default Playlist;