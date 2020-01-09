/**
 * React Snapchat Tracking Module
 *
 * @package react-notifia
 * @author Alexander Barge <alexander.barge@gmail.com>
 */

export function initialize(newTrackerId) {
  try {
    /* eslint-disable */
    (function(d, s, i) {
      const j = d.createElement('script');
      j.async = true;
      j.id = 'notifia';
      j.src = 'https://static.notifia.io/widget.js';
      j.setAttribute('initialize', i);
      d.head.appendChild(j);
    })(document, 'script', newTrackerId);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn(e);
  }
}

export default {
  initialize,
};
