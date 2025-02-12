export function tobaccoQALY(features) {
	if ((features.smokeyear > 0) && (features.quityear == 0) && (features.cigpday > 0)){
        let x = -0.0624067*features.age - 1.314849*(features.gender==0) + 0.0112053*features.age*(features.gender==0) + 5.455188*(features.cigpday < 15) + 8.53844*( (15 <= features.cigpday) && (features.cigpday < 25) )  + 11.44078*(features.cigpday >= 25) - 0.0502293*features.age*(features.cigpday < 15) - 0.0791994*features.age*( (15 <= features.cigpday) && (features.cigpday < 25) ) - 0.1073951*features.age*(features.cigpday >= 25) + 2.765361*(features.gender==0)*(features.cigpday < 15) + 2.598462*(features.gender==0)*( (15 <= features.cigpday) && (features.cigpday < 25) ) + 5.994661*(features.gender==0)*(features.cigpday >= 25) - 0.027659*features.age*(features.gender==0)*(features.cigpday < 15) - 0.0260393*features.age*(features.gender==0)*( (15 <= features.cigpday) && (features.cigpday < 25) ) - 0.061088*features.age*(features.gender==0)*(features.cigpday >= 25) + 6.808624
        if (x > 1){
            return x
        } else {
            return 1
    	}    
    }else {
        return 0
    }
}