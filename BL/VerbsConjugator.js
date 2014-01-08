/**
 * Created with IntelliJ IDEA.
 * User: Eugene
 * Date: 6/10/13
 * Time: 9:43 PM
 * To change this template use File | Settings | File Templates.
 */
var VerbsConjugator = function() {
    var innerConjugatorsTable = {
        'regular': function(verbText, pronoun) {
            var ending = verbText.substr(-2,2);
            var replaceRegex = new RegExp('(^.*)'+ ending +'$');
            var result = verbText.replace(replaceRegex, '$1' + pronoun.getConjugatedEnding(ending));
            return result;
        }
    };

    var myself = this;

    myself.Conjugate = function(verb, pronoun){
       return myself.ConjugateByTable(innerConjugatorsTable, verb, pronoun);
    }
}

VerbsConjugator.prototype.ConjugateByTable = function(table, verb, pronoun) {
    var conjugateFn = table[verb.type];
    if (typeof conjugateFn === 'function') {
        return conjugateFn(verb.verbText, pronoun);
    }
    else {
        throw new Error('Expected conjugated function. Got smth else!');
    }
}