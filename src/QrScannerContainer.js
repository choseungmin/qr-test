import React, {Component} from 'react';
import autobind from "react-autobind";
import QrReader from 'react-qr-scanner'


class QrScannerContainer extends Component {
  //
  state = {
    isShow: false,
    delay: 100,
    result: 'No result',
  };

  constructor(props) {
    super(props);
    autobind(this);
  }

  handleScan(data){
    //
    const { result } = this.state;
    if (result !== data) {
      this.setState({
        result: data,
      });

      console.log(data);
    }

  }
  handleError(err){
    console.error(err)
  }

  onClickStartQr() {
    //
    this.setState({
      isShow: true,
    })
  }

  onClickStopQr() {
    //
    this.setState({
      isShow: false,
    })
  }

  render() {
    //
    const previewStyle = {
      height: 480,
      width: 640,
    };

    const { isShow, result } = this.state;

    return (
      <div>
        <div style={{height: '480px', width: '640px', display: 'block', objectFit: 'contain', border:'1px solid gray'}}>
          {isShow && (
            <QrReader
              delay={this.state.delay}
              style={previewStyle}
              onError={this.handleError}
              onScan={this.handleScan}
            />
          )}
        </div>


        <p>{result}</p>
        <p>camera on : {isShow ? 'y' : 'n'}</p>

        <div>
          <input type="button" value="start" onClick={this.onClickStartQr}/>
          <input type="button" value="stop" onClick={this.onClickStopQr}/>
        </div>
      </div>
    );
  }
}

export default QrScannerContainer;