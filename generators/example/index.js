'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

var templates = require('../main/main').templates;

module.exports = yeoman.generators.Base.extend({
  prompting: function () {

  },

  writing: {
    init: function() {

    },

    askFor: function () {
      var cb = this.async();

      var prompts = [
        {
          name: 'exampleName',
          message: 'Name of Example?',
          default: 'yourExample',
          warning: ''
        },
        {
          name: 'version',
          message: 'Version:',
          default: '1.0.0',
          warning: ''
        }
      ];

      this.prompt(prompts, function (props) {
        this.exampleName = props.exampleName;
        this.version = props.version;
        cb();

      }.bind(this));
    },

    app: function () {
      this.fileName = path.basename(process.cwd());
      var expSrc = 'example/'+this.exampleName+'/'+this.version;

      //this.mkdir(expSrc);

      this.template(
        this.templatePath(templates+'example/index.html'),
        this.destinationPath(expSrc+'/index.html')
      );
      this.template(
        this.templatePath(templates+'example/index.js'),
        this.destinationPath(expSrc+'/index.js')
      );
      this.template(
        this.templatePath(templates+'example/index.less'),
        this.destinationPath(expSrc+'/index.less')
      );
    },

    end: function () {

    },

    projectfiles: function () {

    }
  },

  install: function () {

  }
});
