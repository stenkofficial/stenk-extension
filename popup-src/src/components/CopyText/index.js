import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Tooltip from 'Root/components/Tooltip';
import styles from './styles.less';

const CopyText = ({text, button}) => {
  const [visible, setVisible] = useState(false);
  const [tooltipText, setText] = useState('Copy to clipboard');
  const toggle = () => {
    setVisible(false);
    setTimeout(() => {
      setText('Copied!');
      setVisible(true);
    }, 50);
    setTimeout(() => {
     setVisible(false);
     setText('Copy to clipboard');
    }, 800);
  };

  return (
      <span
        onMouseEnter={ () => {setVisible(true);} }
        onMouseLeave={ () => {setVisible(false);} }
        onClick={ () => { toggle();} }
        className={ styles.container }
      >
        <Tooltip trigger={ ['click', 'hover'] } tooltipShown={ visible } tooltip={ tooltipText } placement="top">
          <CopyToClipboard text={ text } >
            {button ? <span>{button}</span> : <span className="icon-sheet"/>}
          </CopyToClipboard>
        </Tooltip>
      </span>
  );
};

CopyText.defaultProps = {
  button: ''
};

CopyText.propTypes = {
  text: PropTypes.any.isRequired,
  button: PropTypes.string,
};

export default CopyText;
