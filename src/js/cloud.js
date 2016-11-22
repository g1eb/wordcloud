'use strict';

document.addEventListener('DOMContentLoaded', function () {

  var OUTPUT = 'https://gist.githubusercontent.com/g1eb/ab5a80baf6ca9598e76b45aed271c107/raw/7d2e6e04e7c051e1e66f09e2283bc8e2f2b391d1/output.json';

  var colors = d3.scale.category20();

  var width = 960;
  var height = 500;

  // Get data from server
  d3.json(OUTPUT, function(error, data) {
    if (error) { throw error; }
    setup(data);
  });

  /**
   * Setup how to draw word cloud
   * @param data List of objects with words and sizes
   */
  var setup = function (data) {
    colors.domain([d3.max(data, function(d) {
      return d.size;
    }), 0]);

    var layout = d3.layout.cloud()
      .size([width, height])
      .padding(5)
      .rotate(function() {
        return ~~(Math.random() * 2) * 90;
      })
      .font('Impact')
      .fontSize(function(d) {
        return d.size;
      })
      .on('end', draw);
    layout.words(data);
    layout.start();
  };

  /**
   * Draw function to actually draw the cloud
   * @param words Array of words to draw in a cloud
   */
  var draw = function (words) {
    d3.select('#cloud')
      .append('svg')
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', '0 0 960 500')
      .attr('class', 'svg')
      .append('g')
        .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
      .selectAll('text')
        .data(words)
      .enter().append('text')
        .style('font-size', function(d) {
          return d.size + 'px';
        })
        .style('font-family', 'Impact')
        .style('fill', function(d) {
          return colors(d.size);
        })
        .attr('text-anchor', 'middle')
        .attr('transform', function(d) {
          return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')';
        })
        .text(function(d) { return d.text; });
  };

});
