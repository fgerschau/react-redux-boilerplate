import development from './development';
import production from './production';

const env = process.env.NODE_ENV || 'development';

let toExport;
if (env === 'production') {
  toExport = production();
} else {
  toExport = development();
}

export default toExport;
