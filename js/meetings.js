var meetings = document.getElementsByClassName("meeting");

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;

for (var i = 0; i < meetings.length; i++) {
  if (mm > meetings[i].getAttribute("meetingMonth")) {
    meetings[i].classList.add("done");
  } else if (
    mm == meetings[i].getAttribute("meetingMonth") &&
    dd > meetings[i].getAttribute("meetingDate")
  ) {
    meetings[i].classList.add("done");
  }
}
