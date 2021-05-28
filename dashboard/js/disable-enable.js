$(function () {
  $('#submit').attr('disabled', true);
  $('#file').change(function () {
      if ($('#name').val() != '' && $('#desc').val() != '' && $('#category').val() != '' && $('#choices-multiple-remove-button').val() != '' && $('#file').val() != '') {
          $('#submit').attr('disabled', false);
      } else {
          $('#submit').attr('disabled', true);
      }
  });
});

// $(function(){
//   $("#avatar").attr('disabled', true);
//   $("#submit").click(function() {
//     $("avatar").attr('disabled', false);
//   });
// });