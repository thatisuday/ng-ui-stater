/*
 *	Create options provider for ui-stater
**/

angular.module('thatisuday.ui-stater')
.provider('uiStaterOps', function(){
	var defOps = {
		class : true,
		attr : false,
		id : false,
		classPrepend : 'stater-',
		attrName : 'stater',
		idPrepend : 'stater-',
		replaceDot : true
	}

	return {
		setOptions : function(newOps){
			angular.extend(defOps, newOps)
		},
		$get : function(){
			return defOps;
		}
	}
});