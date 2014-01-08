/**
 * Created with IntelliJ IDEA.
 * User: Eugene
 * Date: 6/9/13
 * Time: 9:25 PM
 * To change this template use File | Settings | File Templates.
 */
var MainCtrl = function($scope, $element, verbsProvider) {
    var verbsConjugator = new VerbsConjugator(); // TODO: make a service
    var pronounProvider = new PronounProvider(); // TODO: make a service

    function verbsReady() {
      $scope.loading = false;
      $scope.setNewTest();
    };

    $scope.check = function() {
        var verbFormCorrect = verbsConjugator.Conjugate($scope.currentVerb, $scope.currentPronoun);
        $scope.checkResult = {
            isInputCorrect: verbFormCorrect.toLowerCase() === $scope.verbFormInput.toLowerCase(),
            correctForm: verbFormCorrect
        };
    };

    $scope.setNewTest = function () {
        $scope.currentVerb = verbsProvider.isReady() ? verbsProvider.getNextVerb() : null;
        $scope.currentPronoun = pronounProvider.getRandomPronoun();
        $scope.verbFormInput = "";
        $scope.resetCheckResult();
    };

    $scope.needToShowCorrectAnswer = function() {
        if($scope.checkResult && !$scope.checkResult.isInputCorrect && $scope.checkResult.correctForm)
        {
            return true;
        }
        return false;
    };

    $scope.resetCheckResult = function() {
        $scope.checkResult = null;
    };

    $scope.getCurrentVerbText = function() {
      return  $scope.loading === true ? 'Loading verbs...' : $scope.currentVerb.verbText;
    };

    $element.bind("keypress", function(event) {
      // If enter button has been clicked
      $scope.$apply(function(){
        if (event && event.keyCode === 13){
          if ($scope.checkResult && $scope.checkResult.isInputCorrect){
            $scope.setNewTest();
          } else {
            $scope.check();
          }
        }
      })
    });

    $scope.loading = true;
    verbsProvider.init('../Data/verbs.js', verbsReady);
};
