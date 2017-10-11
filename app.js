angular.module("app", ["chart.js"])
// Optional configuration
    .config(['ChartJsProvider', function (ChartJsProvider) {
        // Configure all charts
        ChartJsProvider.setOptions({
            responsive: true,
        });
    }]);