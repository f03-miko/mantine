import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Spoiler' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoTransitions = {
  name: '⭐ Demo: transitions',
  render: renderDemo(demos.transitions),
};
