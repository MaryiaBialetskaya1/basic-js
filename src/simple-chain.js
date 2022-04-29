const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
  chain: [],
  getLength() {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    return this.chain.length;
  },
  addLink(value) {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    this.chain.push("" + value);
    return this;
  },
  removeLink(/*position*/) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
  reverseChain() {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    this.chain.reverse();
    return this;
  },
  finishChain() {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    this.chain = [];
    let newChain = `( ${this.chain.join(" )~~( ")} )`;
    return newChain;
  },
};

module.exports = {
  chainMaker,
};
