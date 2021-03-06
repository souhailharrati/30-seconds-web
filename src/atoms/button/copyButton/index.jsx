import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'atoms/button';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import _ from 'lang';
const _l = _('en');

/**
 * Button that copies the given text to clipboard.
 * Depends on react-copy-to-clipboard.
 */
const CopyButton = ({
  onCopy = () => {},
  text,
}) => (
  <CopyToClipboard
    text={ text }
    onCopy={ onCopy }
  >
    <Button
      className='copy-btn icon icon-clipboard'
      title={ _l('Copy to clipboard') }
    />
  </CopyToClipboard>
);

CopyButton.propTypes = {
  /** Button onCopy event handler */
  onCopy: PropTypes.func,

  /** Text to be copied when the button is clicked */
  text: PropTypes.string.isRequired,
};

export default CopyButton;
