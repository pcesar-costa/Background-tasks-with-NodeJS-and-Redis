import * as Sentry from '@sentry/node';
import sentryConfig from '../config/sentry';

Sentry.init(sentryConfig);

export default Sentry;