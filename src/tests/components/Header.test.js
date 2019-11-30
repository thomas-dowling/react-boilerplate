import { shallow } from 'enzyme';
import React from 'react';
import toJSON from 'enzyme-to-json';
import { Header } from '../../components/header';

test('should render header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('Should call startLogOut on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>)
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
})