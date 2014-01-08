/**
 * Created with IntelliJ IDEA.
 * User: admin
 * Date: 6/11/13
 * Time: 10:00 AM
 * To change this template use File | Settings | File Templates.
 */
var PronounProvider = function() {
  var Pronoun = function(name, regularEndings){
    this.name = name;
    this.regularEndings = regularEndings;
  };

  Pronoun.allPronouns = [
    new Pronoun("yo", {"ar": "o", "er": "o", "ir": "o"}),
    new Pronoun("tu", {"ar": "as", "er": "es", "ir": "es"}),
    new Pronoun("el", {"ar": "a", "er": "e", "ir": "e"}),
    new Pronoun("ella", {"ar": "a", "er": "e", "ir": "e"}),
    new Pronoun("usted", {"ar": "a", "er": "e", "ir": "e"}),
    new Pronoun("nosotros", {"ar": "amos", "er": "emos", "ir": "imos"}),
    new Pronoun("nosotras", {"ar": "amos", "er": "emos", "ir": "imos"}),
    new Pronoun("vosotros", {"ar": "ais", "er": "eis", "ir": "is"}),
    new Pronoun("vosotras", {"ar": "ais", "er": "eis", "ir": "is"}),
    new Pronoun("ellos", {"ar": "an", "er": "en", "ir": "en"}),
    new Pronoun("ellas", {"ar": "an", "er": "en", "ir": "en"}),
    new Pronoun("ustedes", {"ar": "an", "er": "en", "ir": "en"})
  ];

  Pronoun.getRandomPronoun = function () {
    var randomNorm = Math.random(),
      randomPronounIndex = Math.round(randomNorm * (Pronoun.allPronouns.length - 1));
    return Pronoun.allPronouns[randomPronounIndex];
  };

  Pronoun.prototype.getConjugatedEnding = function(infinitiveEnding) {
    var result = this.regularEndings[infinitiveEnding];
    return result;
  };

  Pronoun.prototype.toString = function() {
    return this.name + this.regularEndings.toString(); // TODO: improve this
  };

  this.getRandomPronoun = function() {
    return Pronoun.getRandomPronoun();
  };

  this.getPronoun = function(name) {
    return Pronoun.allPronouns[name];
  };

  this.getAllPronouns = function() {
    return Pronoun.allPronouns;
  }
}
