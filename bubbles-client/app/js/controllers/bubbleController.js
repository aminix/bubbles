'use strict';

angular.module('myApp')
	.controller('BubbleCtrl', function($scope, Session, bubble, $rootScope) {
		
		$scope.submit = function() {
			var bubbleInstance = bubble(undefined, undefined, undefined, 40, 40);

			var circle = d3.select('svg').append('circle');
			
			circle.attr("class", "node")
				.attr('cx' , bubbleInstance.cx)
				.attr('cy', bubbleInstance.cy)
				.attr("r", $scope.impact)
				.style("fill", "steelblue")
				.style("stroke", "black")
				.style("stroke-width", 1.0)
		        .on('mouseover', function() {
					 d3.select(this)
					 .style("stroke-width", 4.0)
				})
				.on('mouseout', function() {
					 d3.select(this)
					 .style("stroke-width", 1.0)
				});
			//todo: crear la bubble con el servidor y obtener el id
			$rootScope.$emit('bubbleCreated', bubbleInstance);
				
		}
			
	});
