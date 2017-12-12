'use strict';

import Base from './FormulaeBase';
import Render from './SlickRender';

export default class Slick extends Base {
  constructor (props) {
    super(props);
  }

  render () {
    return Render.call(this, this.props, this.state);
  }
}
