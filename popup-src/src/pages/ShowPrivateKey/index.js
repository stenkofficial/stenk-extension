import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, {Component} from 'react';
import { FORM_ERROR } from 'final-form';
import { withRouter } from 'react-router-dom';
import { Form, Field } from 'react-final-form';

import Input from 'Root/components/Input';
import Header from 'Root/components/Header';
import Button from 'Root/components/Button';
import PageTitle from 'Root/components/PageTitle';

import styles from './styles.less';

class ShowPrivateKey extends Component {
  onSubmit (values) {
    console.warn(values);
  }

  validateForm (values) {
    const errors = {};
    if (!values.key) {
      errors.key = 'Required';
    }
    return errors;
  }
  render() {
    return (
        <div className={ styles.div }>
          <Header/>
          <PageTitle title="Show private key"/>
          <div className="content" style={ {marginTop: '28px'} }>
            <Form
              onSubmit={ this.onSubmit }
              validate={ (values) => this.validateForm(values) }
              render={ ({submitError, handleSubmit, form, submitting, pristine, values}) => (
                    <form className="form" onSubmit={ handleSubmit }>
                      <Field name="key" >
                        {({input, meta}) => (
                            <div>
                              <label className="label-primary">Password</label>
                              <Input
                                type="password"
                                size="input-medium"
                                variant="pass-visible"
                                placeholder="Enter your password"
                                input={ input }
                                meta={ meta }
                              />
                            </div>
                        )}
                      </Field>
                      {submitError && <div className="error">{submitError}</div>}
                      <div className={ classNames('pure-g justify-end', styles.buttons) }>
                        <Button
                          variant="btn-default"
                          size="btn-medium"
                          content="Cancel"
                          onClick={() => {this.props.history.goBack()}}
                        />
                        <Button
                          type="submit"
                          variant="btn-primary"
                          size="btn-medium"
                          content="Show"
                          disabled={ submitting }
                        />
                      </div>
                    </form>
                ) }
            />
          </div>
        </div>
    );
  }
}

ShowPrivateKey.propTypes = {};

export default withRouter(ShowPrivateKey);
