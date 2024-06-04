import CanvasXpressReact from 'canvasxpress-react';
import React from 'react';

export default class CanvasXpressComponent extends React.Component {
  render() {
    var target = 'canvas';

    var data = {
      y: {
        vars: ['Variable1'],
        smps: ['Sample1', 'Sample2', 'Sample3'],
        data: [[33, 48, 55]],
      },
    };

    var config = {
      graphOrientation: 'vertical',
      graphType: 'Bar',
      theme: 'CanvasXpress',
      title: 'Simple Bar graph',
    };
    return (
      <CanvasXpressReact
        target={target}
        data={data}
        config={config}
        width={500}
        height={500}
      />
    );
  }
}
