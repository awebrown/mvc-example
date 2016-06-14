angular.module('dating-site.controllers')

.controller('FileUploadCtrl', ['$scope', '$log', 'Upload', 'User', '$timeout', function ($scope, $log, Upload, User, $timeout) {
    $scope.uploadPic = function(file) {
      file.upload = Upload.upload({
        url: '/user/uploadImage',
        data: {image: file}
      }).then(function (data) {
        console.log(data);
      });
    }
}]);
