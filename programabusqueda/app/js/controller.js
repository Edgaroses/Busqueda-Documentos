angular.module('busquedadocumentacion', []).controller('Documentos', function ($scope) {
    $scope.archivos = [
        {'nombre': 'Documento 1', 'fecha':'20 marzo', 'autor':'Cristian'},
		{'nombre': 'Documento 2', 'fecha':'21 marzo', 'autor':'Cristina'},
		{'nombre': 'Documento 3', 'fecha':'22 marzo', 'autor':'Alex'},
		{'nombre': 'Documento 4', 'fecha':'23 marzo', 'autor':'Axel'},
		{'nombre': 'Documento 5', 'fecha':'24 marzo', 'autor':'Jean'},
		{'nombre': 'Documento 6', 'fecha':'25 marzo', 'autor':'Kevin'}	
	
    ];
});