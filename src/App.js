import React, { Component } from "react";
import { Button, Card, InputNumber, Slider, Row, Col } from "antd";

import { Typography } from "antd";
const { Title } = Typography;

export default class App extends Component {
  state = {
    inputValue: 1
  };

  onChange = (value) => {
    this.setState({
      inputValue: value
    });
  };

  render() {
    return (
      <div className="background">
        <Card title="Border Radius Previewer" style={{ width: 300 }}>
          <Row align="center">
            <div
              className="square"
              style={{ borderRadius: this.state.inputValue }}
            />
          </Row>
          <Row align="center" justify="center">
            <Col>
              <InputNumber
                min={0}
                max={50}
                value={this.state.inputValue}
                onChange={this.onChange}
              />
            </Col>
          </Row>
          <Row align="center">
            <Col span={24}>
              <Slider
                min={0}
                max={50}
                onChange={this.onChange}
                value={this.state.inputValue}
              />
            </Col>
          </Row>
          <Row align="center">
            <Button type="primary">COPY CSS</Button>
          </Row>
        </Card>
      </div>
    );
  }
}
