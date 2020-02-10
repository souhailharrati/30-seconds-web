import React from 'react';
import PropTypes from 'prop-types';
import { Link as LinkPropType } from 'typedefs';
import { Anchor } from 'atoms/anchor';
import { trimWhiteSpace } from 'functions/utils';
import _ from 'lang';
const _l = _('en');

export const NAV_ICONS = [
  'search',
  'home',
  'settings',
  'list',
  'github',
  'sun',
  'moon',
];

/**
 * Navigation button component.
 * Dependent on the Anchor atom component.
 */
const NavButton = ({
  className,
  withText = false,
  icon,
  link,
  ...rest
}) => (
  <Anchor
    className={ trimWhiteSpace`nav-btn icon ${`icon-${icon}`} ${withText ? 'with-text' : ''} ${className}` }
    link={ link }
    title={ withText ? '' : _l(`nav.${icon}`) }
    { ...rest }
  >
    { withText ? _l(`nav.${icon}`) : null }
  </Anchor>
);

NavButton.propTypes = {
  /** Additional classname(s) for the link button */
  className: PropTypes.string,
  /** Should the button render text or just the icon */
  withText: PropTypes.string,
  /** Icon name for the navigation button */
  icon: PropTypes.oneOf(NAV_ICONS).isRequired,
  /** Anchor link data */
  link: LinkPropType.isRequired,
  /** Any other props to be passed to the component */
  rest: PropTypes.any,
};

export default NavButton;
