import {
  NEXT_POD, PREVIOUS_POD, SELECT_POD, FETCH_PODS_SUCCESS,
  FETCH_PODS_FAILURE, POST_LIKE_PODS_FAILURE, POST_LIKE_PODS_SUCCESS,
  FETCH_COLLECTION_SUCCESS, FETCH_COLLECTION_FAILURE,
  FETCH_CHANNEL_POD_SUCCESS, FETCH_CHANNEL_POD_FAILURE,
  NEXT_CHANNEL, PREVIOUS_CHANNEL,
} from '../actions';

export default function (state = {}, action) {
  if (action.type === NEXT_POD) {
    const { playlist } = state;

    if (playlist.length <= 1) {
      return { ...state, autoPlay: true };
    }

    const index = 1;

    return {
      ...state,
      autoPlay: true,
      playlist: [...(playlist.slice(index)), ...(playlist.slice(0, index))],
    };
  }

  if (action.type === NEXT_CHANNEL) {
    const { collections } = state;

    if (collections.length <= 1) {
      return { ...state, autoPlay: false };
    }

    const index = 1;

    return {
      ...state,
      autoPlay: false,
      collections: [...(collections.slice(index)), ...(collections.slice(0, index))],
    };
  }

  if (action.type === PREVIOUS_POD) {
    const { playlist } = state;

    if (playlist.length <= 1) {
      return { ...state, autoPlay: true, ...playlist };
    }

    const index = playlist.length - 1;

    return {
      ...state,
      autoPlay: true,
      playlist: [...(playlist.slice(index)), ...(playlist.slice(0, index))],
    };
  }

  if (action.type === PREVIOUS_CHANNEL) {
    const { collections } = state;

    if (collections.length <= 1) {
      return { ...state, autoPlay: false, collections };
    }

    const index = collections.length - 1;

    return {
      ...state,
      autoPlay: false,
      collections: [...(collections.slice(index)), ...(collections.slice(0, index))],
    };
  }

  if (action.type === SELECT_POD) {
    const { playlist } = state;
    const index = playlist.findIndex(pod => pod._id === action.id);

    return {
      ...state,
      autoPlay: true,
      playlist: [...(playlist.slice(index)), ...(playlist.slice(0, index))],
    };
  }

  if (action.type === FETCH_PODS_SUCCESS) {
    return {
      ...state,
      autoPlay: false,
      playlist: action.playlist,
      recent: action.recent,
      library: action.library,
    };
  }

  if (action.type === FETCH_PODS_FAILURE) {
    return {
      ...state,
      error: action.error,
    };
  }

  if (action.type === POST_LIKE_PODS_SUCCESS) {
    return {
      ...state,
    };
  }

  if (action.type === POST_LIKE_PODS_FAILURE) {
    return {
      ...state,
      error: action.error,
    };
  }

  if (action.type === FETCH_COLLECTION_SUCCESS) {
    return {
      ...state,
      autoPlay: false,
      collections: action.collections,
    };
  }

  if (action.type === FETCH_COLLECTION_FAILURE) {
    return {
      ...state,
      error: action.error,
    };
  }

  if (action.type === FETCH_CHANNEL_POD_SUCCESS) {
    return {
      ...state,
      autoPlay: false,
      playlist: action.playlist,
      recent: action.recent,
      library: action.library,
      channel: action.channel,
    };
  }

  if (action.type === FETCH_CHANNEL_POD_FAILURE) {
    return {
      ...state,
      error: action.error,
    };
  }

  return state;
}
