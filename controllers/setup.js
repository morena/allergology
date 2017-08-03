var express = require('express'),
    app = express();

    exports.init = function(req, res){
        if(!req.body){
            return res.sendStatus(400);
        }
        console.log(req.body);

        var data = req.body.result.parameters,
            allergyType = data.allergyType,
            stageDurationNum = data.stageDuration.amount,
            stageDurationType = data.stageDuration.unit,
            pauseNum = data.pause.amount,
            pauseType = data.pause.unit,
            shopping = data.shopping,
            start = data.date;


        console.log(allergyType);
        console.log(stageDurationNum +' '+ stageDurationType);
        console.log(pauseNum +' '+pauseType);
        console.log(shopping);
    };
