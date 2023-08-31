"use client";
import React, {createContext} from "react";
import {connect} from "react-redux";

// #############################################################################
// Description of Context
// #############################################################################
export const SepContext = createContext({});
export const SepConsumer = SepContext.Consumer;
export const SepContextProvider = SepContext.Provider;

// #############################################################################

class SepProvider extends React.Component {
  constructor(props) {
    super(props);

    // ===========================================================
    this.state = {
      value: {},
    };
  }

  // ********** [ componentDidMount ] ****************************************
  // *************************************************************************
  componentDidMount = () => {
    const {dispatch} = this.props;
  };
  // *************************************************************************
  // *************************************************************************

  // ********** [ componentDidUpdate ] ****************************************
  // *************************************************************************
  componentDidUpdate = (prevProps, prevState, snapshot) => {
    if (prevProps !== this.props) {
    }
  };

  // ********** [ Render ] ***************************************************
  // *************************************************************************
  render() {
    const {value} = this.state;

    return (
      <SepContextProvider
        value={{
          ...value,
        }}
      >
        {this.props.children}
      </SepContextProvider>
    );
  }
}

// #############################################################################
// Map State To Props
// #############################################################################
const mapStateToProps = (state) => {
  console.log("mapStateToProps", state);
  return {};
};

const SepProviderConnectToRedux = connect(mapStateToProps)(SepProvider);
// #############################################################################
export {SepProviderConnectToRedux as SepProvider};
