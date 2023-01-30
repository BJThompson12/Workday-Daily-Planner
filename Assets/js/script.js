//add ready for document to load AFTER HTML
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  //on click needs to set informaition to local storage - time and text so its not deleted
  $('.saveBtn').click(function () {
    // time variable - parent id the parent DIV and attr grabs the id (hour-<number>)
    // this applies to the click object
    let time = $(this).parent().attr('id');

    // text variable - sibling element to the button
    // .description is the class of text area
    // val method used to return the attribute value
    let text = $(this).siblings('.description').val();

    // returned values to be SET in local storage
    localStorage.setItem(text, time);
  });
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  //Ccrate function to get the curretn time in hours
  function getTime() {
    //current time
    let presentTime = moment().hour();
    console.log(presentTime);

    //Must go through the scheduled times that are on the schedule
    // for each loop in JQuery
    $('.time-block').each(function () {
      // variable to get elements with the scheduled time and turn string into integer
      // this pertains to the object/element it is getting the attributes for
      let scheduledTime = parseInt($(this).attr('id').split('hour')[1]);
      //check if pulling calendar times
      console.log(scheduledTime);
      //this referes to each element that is looped through
      //add class for past
      if (scheduledTime < presentTime) {
        $(this).removeClass('future');
        $(this).removeClass('present');
        $(this).addClass('past');
        //add class for future
      } else if (scheduledTime > presentTime) {
        $(this).removeClass('present');
        $(this).removeClass('past');
        $(this).addClass('future');
        //add class for present
      } else {
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
      }
    });
  }
  getTime();
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});

// TODO: Add code to display the current date in the header of the page.
// create variable for date using m=Moment API
var todayDate = moment().format('dddd, MMM Do');
$('#currentDay').html(todayDate);

const dailyPlanner = [];
