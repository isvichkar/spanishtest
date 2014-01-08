/**
 * Created with IntelliJ IDEA.
 * User: admin
 * Date: 6/17/13
 * Time: 12:37 PM
 * To change this template use File | Settings | File Templates.
 */
var mainModule = angular.module('spanishTestApp', []);

mainModule.service('verbsProvider', function($http){
  var verbs = []; // Array of Verb objects
  var ready = false;

  this.init = function(dataFilePath, finishedCb) {
    ready = false;
    $http.jsonp(dataFilePath + '?callback=JSON_CALLBACK').
      success(function(data) {
        if (data) {
          parseVerbs(data);
          ready = true;
          if (typeof finishedCb === 'function') {
            finishedCb();
          }
        } else {
          console.log('Verbs init: no data received.');
        }
      }).
      error(function(data){
        console.log('Verbs init failed. ' + (data || ' '));
      });
  };

  this.isReady = function(){
    return ready;
  }

  this.getNextVerb = function() {
    if (verbs.length > 0) {
      return verbs[getNextRandomIndex()];
    }
    return null;
  };

  function getNextRandomIndex() {
    var normalized = Math.random();
    return Math.round(normalized * (verbs.length - 1));
  };

  function parseVerbs(lines){
    for (var i = 0; i < lines.length; i++) {
      var verb = Verb.parse(lines[i]);
      verbs.push(verb);
    }
  };

  return this;
});
