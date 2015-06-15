jQuery(document).ready(function () {


});

var setInitialDisplays = function() {
  // $("#round1").css("display", "block");
  // $("#round2").css("display", "none");
  // $("#round3").css("display", "none");
  $("#round1").show();
  $("#round2").hide();
  $("#round3").hide();
  $("#finals").hide();
  $("#tab1").click();
  $("#tab1").click();
}
var click = function(ids) {
  var recordsToUpdateList = [];
  for(i in ids) {
    var recordId = ids[i];
    var distance = $("#distance".concat(recordId)).val();
    var score = $("#score".concat(recordId)).val();
    var playerId = $("#name".concat(recordId)).val();
    var recordToUpdate = {'distance':distance,
                          'score':score,
                          'playerId':playerId,
                          'recordId':recordId};
    recordsToUpdateList.push(recordToUpdate);
  }


  $.ajax({
    url: "record/",
    type: 'PUT',
    success: function() {
      Materialize.toast('Bracket updated!', 2500);

    },
    contentType: "application/json",
    data: JSON.stringify({records:recordsToUpdateList})
  });


}
