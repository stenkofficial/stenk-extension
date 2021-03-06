import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {inputSize, inputTypes} from 'Root/staticRes/enum';
import styles from './styles.less';

const Input = ({type, defaultValue, variant, size, disabled, placeholder, name, icon, style, input, meta}) => {
   const [visibleType, setVisibleType] = useState(type);
   const toggleVisible = () => {
     if(visibleType === 'password') {
       setVisibleType('text');
     } else {
       setVisibleType(type);
     }
   };

   const isError = meta && (meta.error || meta.submitError) && meta.touched;
   const errorBtn = <button type="button" className={ styles.icon }><span className="icon-exclamation-circle"/></button>;

   const generateBtn = () => {
     
     if(variant === inputTypes.passVisible) {
       if(isError) {
         return errorBtn;
       }
       return (
           <button
             type="button"
             className={ styles.icon }
             onClick={ toggleVisible }
           >
             <span className="icon-visible-eye"/>
           </button>
       );
     }

     if(isError) {
       return errorBtn;
     }

     return null;
   };

    return (
        <>
        <div className={ classNames(styles.group, size) } style={ style }>
          <input
            type={ visibleType }
            className="input"
            value={ defaultValue }
            disabled={ disabled }
            placeholder={ placeholder }
            name={ name }
            { ...input }
          />
          {generateBtn()}
        </div>
        {isError && (<p className={ styles.error }>{meta.error || meta.submitError}</p>)}
        </>
    );
};

Input.defaultProps = {
  defaultValue: '',
  variant: '',
  disabled: false,
  placeholder: '',
  name: '',
  icon: '',
  style: {},
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  defaultValue: PropTypes.any,
  variant: PropTypes.string,
  size: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
  style: PropTypes.object,
};

export default Input;
