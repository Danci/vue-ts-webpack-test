import { shallow } from '@vue/test-utils';
import Counter from '../src/components/Counter.vue';
import { expect } from 'chai';

describe('Counter.vue', () => {
    it('increments count when button is clicked', () => {
        const wrapper = shallow(Counter);
        wrapper.find('button').trigger('click');
        console.log('hjhjhjhj: ', wrapper.find('div').text());
        expect(wrapper.find('div').text()).to.include('1');

    })
})