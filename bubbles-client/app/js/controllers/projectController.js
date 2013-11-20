'use strict';

angular.module('myApp')
	.controller('ProjectCtrl', function($scope, Session, project, _, $rootScope) {
    Session['userId'] = 1;
		var projectInstance = project();
    var ProjectResource = projectInstance.resource;
		ProjectResource.get({userId:Session.userId}, function(projects) {
		  $scope.project = projects[0];
		  $scope.projects = projects;
		});
		
		$scope.setProject = function() {
		  Session['projectId'] = $scope.project._id;
		};
		
		$rootScope.$on('bubbleCreated', function(event, bubbleInstance) {
		  alert('burbuja creada');
		});
		
		
	});
