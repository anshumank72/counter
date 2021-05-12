import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { Fab, Paper, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { decrement, increment } from "./redux/action";

class App extends Component {
  render() {
    const { ctr, inc, dec } = this.props;
    return (
      <div className="App">
        <Paper
          variant="elevation"
          elevation="24"
          style={{ minWidth: "300px", minHeight: "300px" }}
        >
          <Typography variant="h2" style={{ marginTop: "15px" }}>
            {ctr}
          </Typography>
          <div className="btndiv">
            <Fab color="primary" onClick={() => inc()}>
              <AddIcon />
            </Fab>
            <Fab color="primary" onClick={() => dec()}>
              <RemoveIcon />
            </Fab>
          </div>
        </Paper>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  ctr: state.counter,
});
const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch(increment()),
    dec: () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
