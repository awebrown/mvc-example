angular.module('dating-site.controllers')

.controller('FileUploadCtrl', ['$scope', '$log', 'Upload', 'User', '$timeout', function ($scope, $log, Upload, User, $timeout) {
    $scope.uploadPic = function(file) {
    file.upload = Upload.upload({
      url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
      data: {pic: file},
    });

    $log.info(file);

    file.upload.then(function (resp) {
      $timeout(function () {
        file.result = resp.data;
      });
    }, function (resp) {
      if (resp.status > 0)
        $scope.errorMsg = resp.status + ': ' + resp.data;
    }, function (evt) {
      // Math.min is to fix IE which reports 200% sometimes
      file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
    });
    }
}]);