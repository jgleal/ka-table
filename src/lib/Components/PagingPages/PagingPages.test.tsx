import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDOM from 'react-dom';

import { IPagingProps } from '../../props';
import PagingPages from './PagingPages';

Enzyme.configure({ adapter: new Adapter() });

const props: IPagingProps = {
    enabled: true,
    pageIndex: 2,
    pageSize: 2,
};

it('renders without crashing', () => {
  const element = document.createElement('div');
  ReactDOM.render(<PagingPages {...props} />, element);
  ReactDOM.unmountComponentAtNode(element);
});
