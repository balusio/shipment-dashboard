// eslint-disable-next-line import/no-extraneous-dependencies
import { configure } from 'enzyme';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
