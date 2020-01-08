import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import HomeLayout from '@/layouts/HomeLayout/HomeLayout.vue';
import { Tooling } from '@@/helpers';

describe('HomeLayout.vue', () => {
  let localVue, i18n, wrapper, store;

  beforeAll(() => {
    const baseSetup = Tooling.createLocalVueInstance();
    localVue = baseSetup.localVue;
    i18n = baseSetup.i18n;
    store = baseSetup.store;
  });

  beforeEach(() => {
    wrapper = shallowMount(HomeLayout, {
      localVue,
      i18n,
      store,
      attachToDocument: true,
      stubs: {
        'router-link': RouterLinkStub
      }
    });
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('dismounts', () => {
    wrapper.destroy();
    expect(wrapper.exists()).toBe(false);
  });
});
