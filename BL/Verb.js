/**
 * Created with IntelliJ IDEA.
 * User: Eugene
 * Date: 6/4/13
 * Time: 10:53 PM
 * To change this template use File | Settings | File Templates.
 */
var Verb = function(text, type, translation) {
    this.verbText = text;
    this.type = type;
    this.translation = translation;
};

Verb.parse = function(str) {
    var parts = str.split('|');
    return new Verb(parts[0], parts[1], parts[2]);
};
