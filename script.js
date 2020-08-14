let schedule = localStorage.getItem("schedule");
if (schedule) {
    schedule = JSON.parse(schedule);
} else {
    schedule = {};
}

for (id in schedule) {
    $("#" + id).children("textarea").val(schedule[id]);
}

$(".saveBtn").on("click", function (e) {
    const val = $(this).siblings("textarea")[0].value.trim();
    const id = $(this).parent().attr("id");
    schedule[id] = val;
    localStorage.setItem("schedule", JSON.stringify(schedule));
})

// WHEN I view the timeblocks for that day 
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
const currentTime = parseInt(moment().format("H"));
console.log(currentTime)
$(".time-block").each(function(){
    const hour = parseInt($(this).attr("id").replace("hour-", ""));
    if (hour < currentTime){
        $(this).addClass("past")
    } else if (currentTime === hour) {
        $(this).addClass("present")
    } else {
        $(this).addClass("future")
    }
})


