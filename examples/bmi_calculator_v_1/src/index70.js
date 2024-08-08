
var config;
export function calculate70(inputs){
	var result = {
		value : null	
	}
	check(inputs, result);
	if(result.resultCode == 1){
		return result;
	}	
	var value = Math.floor(inputs[config.child_list[71].field]/Math.pow(inputs[config.child_list[72].field]/100,2) * 100)/100;
	result = getResult(value);
	result.resultCode = 0;
	result.resultMsg = "success";
	return result;
}


function getResult(value){
	if(typeof(config.result) != "undefined"){
		if(typeof(config.result[value])!= "undefined"){
			return config.result[value];
		}
		if(typeof(config.result["-1"])!= "undefined"){
			config.result["-1"].valueDetail.key = value;
            config.result["-1"].valueDetail.result[0].desc = config.result["-1"].valueDetail.result[0].desc.format(value);
			return config.result["-1"];
		}	 
	}
	var temp = {"valueDetail": {"key": value}}
	return temp;
}

String.prototype.format = function() {
    if (arguments.length == 0) return this;
    var param = arguments[0];
    var s = this;
    if (typeof(param) == 'object') {
        for (var key in param) s = s.replace(new RegExp("\\{" + key + "\\}", "g"), param[key]);
        return s;
    } else {
        for (var i = 0; i < arguments.length; i++) s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
        return s;
    }
}

function getConfig() {
    //var executor = context.getExecutor("aiit-get_config/1.0.0/calculate340") ;
	var obj = {
        "zhyl96": 70
    };
    return {"id": 70, "title": "BMI Calculator", "child_list": {"71": {"id": 71, "title": "weight (kg)", "field": "zhyl24", "data_type": 3, "parent_id": 70}, "72": {"id": 72, "title": "height (cm)", "field": "zhyl55", "data_type": 3, "parent_id": 70}}, "result": {}};
    //return executor.execute(obj);
}

function check(inputs, result) {
    config = getConfig();

    if (typeof(config.child_list) == "undefined") {
        result.resultMsg = "config error";
        result.resultCode = 1;
        return;
    }
	for(var child in config.child_list){
         var field = config.child_list[child].field;
        if (typeof(inputs[field]) == "undefined" || inputs[field] == null) {
            result.resultMsg = "Wrong input, " + field + " must not be null";
            result.resultCode = 1;
            break;
        }

        var check = config.child_list[child].check;
        if (typeof(check) != "undefined" && check.indexOf(inputs[field]) == -1) {
            result.resultMsg = "Wrong input, " + field + " must be one of " + check;
            result.resultCode = 1;
            break;
        }
  }
}