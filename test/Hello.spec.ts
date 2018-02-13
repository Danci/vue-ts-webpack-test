import { shallow, Wrapper } from '@vue/test-utils';
import { expect } from 'chai';
import HelloComponent from '../src/components/Hello.vue';

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('HelloComponent', () => {
    // Inspect the raw component options
    let wrapper: Wrapper<any>;
    beforeEach(() => {
        wrapper = shallow(HelloComponent, {
            propsData: {
                initialEnthusiasm: 10
            }
        });

    });

    it('has the basic elements', () => {
        expect(wrapper.find('div').text()).includes("Hi for you:");
        expect(wrapper.find('div').text()).includes("+");
        expect(wrapper.find('div').text()).includes("-");
        expect(wrapper.find('div').text()).includes("!!!!!!!!!!");
        expect(wrapper.find('div').text()).not.includes("!!!!!!!!!!!");
    })

    it('reacts on + button', () => {
        let button = wrapper.find('button + button');
        expect(button.text()).to.equal("+");
        button.trigger('click');
        expect(wrapper.find('div').text()).includes("!!!!!!!!!!!");
        expect(wrapper.find('div').text()).not.includes("!!!!!!!!!!!!");
    })

    it('reacts on - button', () => {
        let button = wrapper.find('button');
        expect(button.text()).to.equal("-");
        button.trigger('click');
        expect(wrapper.find('div').text()).includes("!!!!!!!!!");
        expect(wrapper.find('div').text()).not.includes("!!!!!!!!!!");
    })

    /*// Evaluate the results of functions in
    // the raw component options
    it('sets the correct default data', () => {
      expect(typeof MyComponent.data).toBe('function')
      const defaultData = MyComponent.data()
      expect(defaultData.message).toBe('hello!')
    })
   
    // Inspect the component instance on mount
    it('correctly sets the message when created', () => {
      const vm = new Vue(MyComponent).$mount()
      expect(vm.message).toBe('bye!')
    })
   
    // Mount an instance and inspect the render output
    it('renders the correct message', () => {
      const Constructor = Vue.extend(MyComponent)
      const vm = new Constructor().$mount()
      expect(vm.$el.textContent).toBe('bye!')
    })*/
})