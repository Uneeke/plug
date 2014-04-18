// Generated by CoffeeScript 1.3.3
var tableFlipCommand,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

tableFlipCommand = (function(_super) {

  __extends(tableFlipCommand, _super);

  function tableFlipCommand() {
    return tableFlipCommand.__super__.constructor.apply(this, arguments);
  }

  tableFlipCommand.prototype.init = function() {
    this.command = '/tableflip';
    this.parseType = 'exact';
    return this.rankPrivelege = 'user';
  };

  tableFlipCommand.prototype.functionality = function() {
    return API.sendChat("(╯°□°）╯︵ ┻━┻");
  };

  return tableFlipCommand;

})(Command);