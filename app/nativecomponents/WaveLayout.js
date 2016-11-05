// ImageView.js

import { PropTypes } from 'react';
import { requireNativeComponent, View } from 'react-native';

var iface = {
  name: 'WaveLayout',
  propTypes: {
    text_normal: PropTypes.string,
    text_end: PropTypes.string,
    color: PropTypes.string,

    rect_width: PropTypes.number,
    wave_width: PropTypes.number,
    percentage: PropTypes.number,
    textsize: PropTypes.number,
 
    ...View.propTypes // 包含默认的View的属性
  },
};

module.exports = requireNativeComponent('MWaveLayout', iface);

// const MImageView = requireNativeComponent('MImageView', {
//   propTypes: {
//   	url: PropTypes.string,
//     radius: PropTypes.number,
//     ...View.propTypes // 包含默认的View的属性
//   },
// });

// export default MImageView;