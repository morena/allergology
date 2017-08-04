var express = require('express'),
    app = express();

function LadderSetup(){
    this.userId = null,
    this.accessToken = null,
    this.pausePrefs = null,
    this.stagePrefs = null,
    this.start = null,
    this.shoppingDay = null,

    this.setPausePrefs = function ( pause ){
        this.pausePrefs = pause;
    },
    this.setStagePrefs = function ( stage ){
        this.stagePrefs = stage;
    },
    this.setStart = function( start){
        //convert start date to timestamp
        this.start= start;
    },
    this.setShoppingDay = function( shopping ){
        this.shoppingDay= shoppingDay;
    },
    this.getPausePrefs = function ( ){
        return this.pausePrefs;
    },
    this.getStagePrefs = function ( ){
        return this.stagePrefs;
    },
    this.getStart = function(){
        return this.start;
    },
    this.getShoppingDay = function(){
        //obtain timestamp of nearest date mathcing shoppingDay
        return this.shoppingDay;
    },
    this.SaveUserInDb = function( userId ){
    },
    this.retrieveLadder = function( foodType ) {
    },
    this.planStages = function( stage ) {
        //add starting date to calendar
        //using the stage length unit and number, add 
        //var numberOfDaysToAdd = this.stagePrefs.num;
        //startDate.setDate(startDate.getDate() + numberOfDaysToAdd);
    }
}
    exports.init = function(req, res){
        if(!req.body){
            return res.sendStatus(400);
        }
        var ladderSetup = null;

        //console.log(req);
        //console.log(req.originalRequest.data.user.accessToken);
        //console.log(req.body);
        console.log(req.body.originalRequest.data.user);
        if(req.body.originalRequest.length() > 0){
            var userId = req.body.originalRequest.data.user.userId,
                accessToken = req.body.originalRequest.data.user.accessToken;
        }
        //console.log(req);

        var data = req.body.result.parameters,
            allergyType = data.allergyType,
            stage = data.stageDuration,
            pause = data.pause,
            shopping = data.shopping,
            start = data.date;


        console.log(allergyType);
        console.log(stageDurationNum +' '+ stageDurationType);
        console.log(pauseNum +' '+pauseType);
        console.log(shopping);

        ladderSetup = new LadderSetup();

        ladderSetup.setPausePrefs(pause);
        ladderSetup.setStagePrefs(stage);
        ladderSetup.setstart(start);
        ladderSetup.setShoppingDay(shopping);
    };
