var page = require('webpage').create();
console.log('The default user agent is ' + page.settings.userAgent);
page.settings.userAgent = 'SpecialAgent';
page.open('https://www.better.org.uk/leisure-centre/london/hackney/clissold-leisure-centre', function (status) {
    if (status !== 'success') {
        console.log('Unable to access network');
    } else {
        var ua = page.evaluate(function () {
            return document.getElementsByClassName('login dropdown-parent')[0].textContent;
        });
        console.log(ua);
    }
    phantom.exit();
});

// https://better.legendonlineservices.co.uk/enterprise/account/login?_ga=2.168878820.496860938.1511395261-1919780418.1511395261

// document.getElementsByClassName('login dropdown-parent')[0].childNodes[3].getElementsByTagName("li")[0]

// navigate to login page 
https://better.legendonlineservices.co.uk/hackney_-_clissold/account/login
// enter details 
document.getElementById('login_Email').value = 'iainjameswatt@gmail.com'
document.getElementById('login_Password').value = 'xxxxxxx'
document.getElementById('form1').submit()
// make a booking 
window.location = 'https://better.legendonlineservices.co.uk/hackney_-_clissold/BookingsCentre/Index'
// select court and pitch bookings
subBeh(this)
document.querySelectorAll('input[value="2365"]').checked = true;
// select squash court
subAct(this)
document.querySelectorAll('input[value="476"]').checked = true;
// open timetable 
viewTimetable()
// click on link to booking
selectResourceLocation(68377);
// confirm booking 
confirmCourtSelect();
// confirm again 
// self.parent.tb_remove(); # we may not need to do this
top.location = '../Basket/Index' 
// select pay by card
// updatePayButton(); # may not need to do this
// change to pay location 
window.location = '/hackney_-_clissold/Basket/Pay'
// enter card details and submit form
document.getElementById('panInput').value = '12345432423423432'
document.getElementById('csc').value = '123'
document.getElementById('ExpiryDateMonth').value = '02'
document.getElementById('ExpiryDateYear').value = '2020'
document.getElementById('cardholdername').value = 'Iain Watt'
document.getElementById('cardPaymentForm').submit();
