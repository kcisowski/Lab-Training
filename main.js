


  function formatDate(date) {
    var cdate = new Date(date);
    var options = {
      year: "numeric",
      month: "short",
      day: "numeric"
    };
    date = cdate.toLocaleDateString("en-us", options);
    return date;
  }





// $(function () {
//   var client = ZAFClient.init();
//   client.invoke("resize", { width: "100%", height: "200px" });
//   client.get('ticket.requester.id').then(
//     function(data) {
//       var user_id = data['ticket.requester.id'];
//       //var user_id = 10293389;
//       console.log('Requester id is ' + user_id);
//       requestUserInfo(client, user_id);
//     }
//   );
//   //showInfo();
//   //showError();
  
// });


