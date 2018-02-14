import { shallow, Wrapper } from '@vue/test-utils';
import { expect } from 'chai';
import Counter from '../../src/components/Counter.vue';

describe('Counter component', () => {
    // Inspect the raw component options
    let wrapper: Wrapper<any>;
    beforeEach(() => {
        wrapper = shallow(Counter, {
            propsData: {
                initcounter: 10
            }
        });

    });

    it('has the basic elements', () => {
        expect(wrapper.find('div').text()).includes("10\n");
    })

});