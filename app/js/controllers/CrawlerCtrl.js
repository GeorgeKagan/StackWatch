angular.module('stackWatch').controller('CrawlerCtrl', function($injector, $log) {
    let activeCrawlers = [
        // 'Indeed',
        // 'Dice',
        'Glassdoor'
    ];

    _.each(activeCrawlers, crawlerServiceName => {
        let crawler = $injector.get(crawlerServiceName);

        $log.info(`[${crawlerServiceName}] Fetching from API...`)
        crawler.fetchFromApi().then(() => {
            $log.info(`[${crawlerServiceName}] Saving to Database...`)
            crawler.saveToDatabase();
        });
    });
});