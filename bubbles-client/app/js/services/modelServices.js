'use strict';

angular.module('model', ['ngResource'])
  .factory('project', function($resource) {
    function project(name) {
      var model = {};
      model.resource = $resource('/api/:userId/project/:projectId', {},  {
        get: { 
          method: 'GET',
          isArray: true 
        },
        save : {
          method: 'POST',
          params: {
            name: model.name
          }
        }
       });
       
       model.name = name;
      return model;
    }
    return project;
})

  .factory('bubble', function($resource) {
    function bubble(previousBubble, nextBubble, info, cx, cy) {
      var model = {};
      model.resource = $resource('/api/:projectId/bubble/:bubbleId', {},  {
        get: { 
          method: 'GET',
          isArray: true 
        },
        save: {
          method: 'POST',
          params: {
            previousBubble: model.previousBubble,
            nextBubble: model.nextBubble,
            info: model.info,
            cx: model.cx,
            cy: model.cy
          }
        }
       });
       
       model.previousBubble = previousBubble;
       model.nextBubble = nextBubble;
       model.info = info;
       model.cx = cx;
       model.cy = cy;
       
       model.translate = function(x, y) {
          model.cx = x;
          model.cy = y;
       }
      return model; 
    }
    return bubble;   
 })

  .factory('Session', function($resource) {
      return {};
  })
