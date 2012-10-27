/******************************************************************************
 * Copyright (C) 2012 David Rusk
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *****************************************************************************/

var jQT = $.jQTouch({
    icon: 'images/customIcon.png',
    statusBar: 'black',
});

$(document).ready(function(){
    $('#onerep form').submit(displayOneRepMax);
    $('#recommendWeight form').submit(displayRecommendedWeight);
    $('#recommendReps form').submit(displayRecommendedReps);
});

function displayOneRepMax(){
    var weight = $('#weight').val();
    var reps = $('#reps').val();

    var max_weight = calcOneRepMax(weight, reps);

    $('#oneRepResult').html('Your one rep max is <b>' + 
			    max_weight.toFixed(1) + '</b>');

    return false;
}

function displayRecommendedWeight(){
    var desiredReps = $('#desiredReps').val();
    var knownReps = $('#rw_knownReps').val();
    var knownWeight = $('#rw_knownWeight').val();

    var recommendedWeight = calcWeight(knownWeight, knownReps, desiredReps);

    $('#recommendWeightResult').html('Try a weight of <b>' +
				       recommendedWeight.toFixed(1) + '</b>');

    return false;
}

function displayRecommendedReps(){
    var desiredWeight = $('#desiredWeight').val();
    var knownReps = $('#rr_knownReps').val();
    var knownWeight = $('#rr_knownWeight').val();

    var recommendedReps = Math.floor(calcReps(knownWeight, knownReps, desiredWeight));

    var message;
    if (recommendedReps > 0) {
	message = 'Try doing <b>' + recommendedReps + '</b> reps.';
    } else {
	message = 'This weight is too heavy for you.  DO NOT ATTEMPT.';
    }
    
    $('#recommendRepsResult').html(message);

    return false;
}

function calcOneRepMax(weight, reps){
    return ((parseFloat(reps)/30) + 1) * parseFloat(weight);
}

function calcWeight(knownWeight, knownReps, desiredReps){
    var oneRepMax = calcOneRepMax(knownWeight, knownReps);
    return oneRepMax / ((parseFloat(desiredReps)/30) + 1);
}

function calcReps(knownWeight, knownReps, desiredWeight){
    var oneRepMax = calcOneRepMax(knownWeight, knownReps);
    return 30*oneRepMax/parseFloat(desiredWeight) - 30;
}
