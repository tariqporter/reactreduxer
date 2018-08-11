import * as React from 'react';
import { connect } from 'react-redux';
import {COMPONENT_NAME} from './{COMPONENT_NAME}';

export class {COMPONENT_NAME}Container extends React.Component {
  constructor(props) {
    super(props);
    // const { dispatch } = props;
  }

  // componentDidMount() {
  //   dispatch(initialAction(data))
  // }

  render() {
    return (
        <{COMPONENT_NAME} {...this.props} />
      );
  }
}

const mapStateToProps = (state: any) => ({
  // myProperty: state.myProperty
})

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  // myFunc: () => dispatch(myFunc(ownProps.property))
})

export default {COMPONENT_NAME}ConnectedContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)({COMPONENT_NAME}Container);