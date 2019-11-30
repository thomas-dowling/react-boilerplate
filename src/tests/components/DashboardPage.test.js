import { shallow } from 'enzyme';
import React from 'react';
import DashboardPage from '../../components/DashboardPage';

test('Should render Expense dashboard page correctly', () => {
    const wrapper = shallow(<DashboardPage />)

    expect(wrapper).toMatchSnapshot();
})