const sf = require('sheetify')

sf`
  @import './import.less';
  .foo {
    .bar {
      color: blue;
    }
  }
`
