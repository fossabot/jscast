import React, { Component } from 'react';
import { HashRouter, NavLink } from 'react-router-dom';
import FaFolder from 'react-icons/lib/fa/folder';
import FaFolderOpen from 'react-icons/lib/fa/folder-open';
import { defCollection } from '../utils/default';
import { typeCollection } from '../utils/type';
import Thumb from './Thumb';
import '../style/Collection-list.css';

class CollectionList extends Component {
  static propTypes = {
    collection: typeCollection,
  };

  static defaultProps = {
    collection: defCollection,
  };

  displayName = 'CollectionList';

  state = {
    expand: false,
  };

  handleClick = () => {
    this.setState(prevState => ({ expand: !prevState.expand }));
  };

  render() {
    const { collection } = this.props;
    const {
      title, link, description, image, author, copyright,
    } = collection;
    const url = `/library/channel/${title}`;
    const detail = (
      <div className="Collection-list-detail">
        <div className="Collection-list-detail-image">
          <HashRouter>
            <NavLink
              to={url}
              exact
              collection={collection}
            >
              <Thumb image={image} width={200} height={200} />
            </NavLink>
          </HashRouter>
        </div>
        <div className="Collection-list-detail-text">
          <p style={{ fontWeight: 'bold' }}>{author || null}</p>
          <p>{description || null}</p>
          <p>{link || null}</p>
          <p>{copyright || null}</p>
        </div>
      </div>
    );

    return (
      <div className="Collection-list">
        <div className="Collection-list-top">
          <div
            className="Collection-list-opener"
            role="link"
            onClick={this.handleClick}
          >
            {this.state.expand ? <FaFolderOpen /> : <FaFolder />}
          </div>
          <div className="Collection-list-title">
            <HashRouter>
              <NavLink
                to={url}
                exact
                collection={collection}
              >
                {title}
              </NavLink>
            </HashRouter>
          </div>
        </div>
        <div>
          {this.state.expand ? detail : null}
        </div>
      </div>
    );
  }
}

export default CollectionList;
