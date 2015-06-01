##Simple elastic search app

##Stack:
    - node.js
    - elasticSearch
    - angular.js

##To install elasticsearch:
    - https://www.elastic.co/downloads/elasticsearch

##To run the app:
    * the setup assumes you have an instance of elastic search running at port 9200 at your local machine
    - npm start 
        - it will install node & bower dependencies
        --> frontend running at port 4000
    - node url_processing --> to get the data from the internet and saving it to elasticSearch

##Testing
    - With server running on port 4000
    - For unit testing: karma start --> 5 tests passing 
    - For end to end test: gulp e2e(it will run a protractor instance) --> 3 tests passing

## App structure and organization:
    - By feature
    - One module app per feature, for a better managment of dependencies
    - Style, per feature
    - Basically I've tried to prioratize, location of code as easy as posible(flat structure and feature organization) and modularization(when a change is needed we should be able to do it just modifying files in the specific feature)


## CSS styling:
    - Mobile first responsive design, then tablets and then desktop
    - Tested on major browsers
    - Still pending issues with word count, clearly room from improvement
    - Usually I will use a CSS framework but for this task I wanted to write the CSS without using a framework

##Resources to eleborate structure:
    - http://www.johnpapa.net/angular-app-structuring-guidelines/
    - https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub
    - http://hbay71.axshare.com/#p=pablo_-_demo&c=1

    ![alt tag](https://github.com/galicians/elasticSearchFrontEnd/blob/master/documentation/mobile.png)
    ![alt tag](https://github.com/galicians/elasticSearchFrontEnd/blob/master/documentation/karma.png)
    ![alt tag]https://github.com/galicians/elasticSearchFrontEnd/blob/master/documentation/protractor.png