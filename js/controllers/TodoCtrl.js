app.controller('TodoCtrl', ['$scope', '$window', function($scope, $window){

  $scope.items = [
    { 'text': 'not completed item', 'dueDate': Date.now(), 'completed': false },
    { 'text': 'completed item', 'dueDate': Date.now(), 'completed': true }
    ];

  $scope.query = "";

  $scope.showCompleted = true;
  $scope.showCompletedText = "Hide Completed";

  $scope.createTodo = function() {
    $scope.items.push({
      text: $scope.text,
      dueDate: new Date($scope.dueDate),
      completed: false
    });

    $scope.text = "";
    $scope.dueDate = "";
  };

  $scope.toggleCompleted = function() {
    if ($scope.showCompleted) {
      $scope.showCompleted = false;
      $scope.query = { completed: false };
      $scope.showCompletedText = "Show Completed";
    } else {
      $scope.showCompleted = true;
      $scope.query = "";
      $scope.showCompletedText = "Hide Completed";
    };
  };

  $scope.removeCompleted = function() {
    $scope.items = $scope.items.filter(function(todo) {
      return !todo.completed;
    });
  };

  $scope.removeTodo = function(index) {
    $scope.items.splice(index, 1);
  };

}]);