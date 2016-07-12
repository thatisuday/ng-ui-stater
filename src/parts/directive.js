/*
 *	Create ui-stater directive
**/

angular.module('thatisuday.ui-stater')
.directive('uiStater', ['uiStaterOps', function(staterOps){
	return {
		restrict : 'A',
		scope : false,
		link : function(scope, elem, attr){
			// fallback state name
			var ctrlStateName = 'undefined';
			
			if(
				elem.data('$uiView') &&
				elem.data('$uiView').state.self &&
				elem.data('$uiView').state.self &&
				elem.data('$uiView').state.self.name
			){
				// Save $uiView object
				var $uiView = elem.data('$uiView');

				// Create output value
				if(staterOps.replaceDot){
					ctrlStateName = $uiView.state.self.name.replace(/[.]/g, '-');
				}
				else{
					ctrlStateName = $uiView.state.self.name;
				}
				

				/************************************************/

				// Add a class
				if(staterOps.class){
					elem.addClass(staterOps.classPrepend + ctrlStateName);
				}

				// Set an attribute
				if(staterOps.attr){
					elem.attr(staterOps.attrName, ctrlStateName);
				}

				// Set an id
				if(staterOps.id){
					elem.attr('id', staterOps.idPrepend + ctrlStateName);
				}
			}

		}

	}
}]);