import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import _ from 'lang';
const _l = _('en');

import NavButton from './index';

configure({ adapter: new Adapter() });

describe('<NavButton />', () => {
  let wrapper, button;
  const icon = 'search';
  const link = { url: '#', internal: false };

  beforeEach(() => {
    wrapper = mount(<NavButton link={ link } icon={ icon } />);
    button = wrapper.find('a.nav-btn');
  });

  it('should render correctly', () => {
    expect(wrapper).toContainMatchingElement('a.nav-btn');
  });

  it('should render with the correct icon class', () => {
    expect(wrapper).toContainMatchingElement(`a.nav-btn.icon-${icon}`);
  });

  it('should link to the passed URL', () => {
    expect(button.prop('href')).toBe(link.url);
  });

  describe('with text', () => {
    beforeEach(() => {
      wrapper = mount(<NavButton link={ link } icon={ icon } withText />);
      button = wrapper.find('a.nav-btn');
    });

    it('should render with the correct icon string literal', () => {
      expect(wrapper.text()).toEqual(_l(`nav.${icon}`));
    });
  });
});

