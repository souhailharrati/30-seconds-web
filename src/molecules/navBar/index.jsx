import React from 'react';
import PropTypes from 'prop-types';
import { Link as LinkPropType } from 'typedefs';
import { Anchor } from 'atoms/anchor';
import Search from 'atoms/search';
import _ from 'lang';
const _l = _('en');

/**
 * Renders a group of navigational elements.
 * Used in the application's main navigation menu.
 * Depends on NavButton atom.
 */
const NavBar = ({
  buttons,
  isSearch = false,
  logoLink,
  logoSrc,
  ...rest
}) => (
  <header className='nav-bar' { ...rest }>
    <Anchor
      className='nav-btn'
      link={ logoLink }
    >
      <img
        src={ logoSrc }
        alt={ _l('Logo') }
        className='website-logo'
      />
    </Anchor>
    <Search
      shouldUpdateHistory={ isSearch }
      shouldHaveInitialValue={ isSearch }
    />
    <Anchor
      className='nav-btn icon icon-settings'
      link={ {
        internal: false,
        url: '#',
        rel: 'nofollow',
      } }
    />
  </header>
);

NavBar.propTypes = {
  /** Buttons that compose the navigation bar */
  buttons: PropTypes.arrayOf(PropTypes.shape({
    link: LinkPropType.isRequired,
    onClick: PropTypes.func,
    icon: PropTypes.string,
    rest: PropTypes.any,
  })).isRequired,
  /** Any other props to be passed to the component */
  rest: PropTypes.any,
};

export default NavBar;
