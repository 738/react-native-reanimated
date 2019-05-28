import invariant from 'fbjs/lib/invariant';
import { adapt } from '../core/AnimatedBlock';
import AnimatedNode from './AnimatedNode';

class AnimatedConcat extends AnimatedNode {
  constructor(input) {
    invariant(
      input.every(
        el =>
          el instanceof AnimatedNode ||
          typeof el === 'number' ||
          typeof el === 'string'
      ),
      `Reanimated: Animated.concat node arguments should be of type AnimatedNode or String or Number. One or more of them are not of that type. Node: ${input}`
    );
    super({ type: 'concat', input: input.map(n => n.__nodeID) }, input);
  }

  toString() {
    return `AnimatedConcat, id: ${this.__nodeID}`;
  }
}

export function createAnimatedConcat(...args) {
  return new AnimatedConcat(args.map(adapt));
}
