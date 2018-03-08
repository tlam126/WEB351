/*-------------------------------------
| Tabs
-------------------------------------*/
function tab_link_click(event) {

    // only in medium view or larger.
    if ( $(window).width() >= 700 )
    {
        // prevent Default Behavior  = inbound Links
        event.preventDefault();
    }

    // Manage Active Links
    $('.tabbed nav.toc a').removeClass('active');
    $(this).addClass('active');

    // Manage active section
    $('.tabbed section').removeClass('active');
    var whichSect = $(this).attr('href');
    $(whichSect).addClass('active');
}

$('.tabbed nav.toc a').click(tab_link_click);


/*-------------------------------------
| Hamburger Menu Toggle
-------------------------------------*/
var timbukThree = 'closed';

function hamburger_toggle() {
    if (timbukThree == 'closed')
    {
        timbukThree = 'open';
        $('#mainmenu').addClass('timbuktu');
    }
    else
    {
        timbukThree = 'closed';
        $('#mainmenu').removeClass('timbuktu');
    }
}

$('#mainmenu .glyphicon-menu-hamburger').click(hamburger_toggle);


/*-------------------------------------
| Slideshow Faded :: c2 + tab
-------------------------------------*/
/*
    Multline
    looks like this
*/
// Hide all but the first image, arrays start with zero
$('div.faded img:gt(0)').css({'opacity':'0'});

// function declaration
function slide_faded() {
    // console.log for testing - making sure our app is working as expected.

    $('div.faded img:eq(1)').delay(4000).animate({'opacity':'1'}, 2000, slide_done);

}

function slide_done() {
    // shuffle to the end
    // change its opacity to 0 - to transparent
    $('div.faded img:eq(0)').appendTo('div.faded').css({'opacity':'0'});

    slide_faded(); //keeps the party going

}

// function call
slide_faded(); //this starts the party


/*-------------------------------------
| Faded Slideshow Responsive
-------------------------------------*/
function slide_height_render() {

    // grab current image of one of the images.
    var firstImage = $('div.faded img:eq(0)');

    // get its height
    var theHeight = firstImage.height();

    // update slideshow div height
    $('div.faded').height(theHeight);

}
// function jQuery(cssSelector) {
//
// }
// function $(cssSelector) {
//
// }

// call function when page loads
slide_height_render();
// call function when browser is resized
$(window).resize(slide_height_render);


/*-------------------------------------
| c2 + tab
-------------------------------------*/

/*-------------------------------------
| JavaScript Syntax
-------------------------------------*/
// single line comments
/*
    multline comments
    looks like this
    more than one line
*/

/* Variables, Strings and Numbers -------------------------------*/
var string1 = 'I can\'t do this';
var string2 = " I can't \"quote\" here";


var num1 = 235;
var num2 = 100.35;



/* functions -------------------------------*/
// function/method declaration
function doActions(timbuktu, name) {
    var result = 2000 + timbuktu;
}


// function call
doActions(400, 'Steve');
doActions(200, 'Jerry');
doActions(1000, 'Berry');
doActions(2000, 'Terry');
doActions(130, 'Mitch');


/*-------------------------------------
| Sliding Slideshow
-------------------------------------*/
$('div.sliding img:gt(0)').css({'left':'580px'});

function slide_sliding() {
    $('div.sliding img:eq(0)').animate({'left':'-580px'}, 1000, slide_sliding_done);
    $('div.sliding img:eq(1)').animate({'left':'0px'}, 1000);
}

function slide_sliding_done() {
    $('div.sliding img:eq(0)')
        .css({'left':'580px'})
        .appendTo('div.sliding');

    slide_sliding(); //keep the party going
}

slide_sliding(); //start the party


/*-------------------------------------
| Form Validation
-------------------------------------*/
function form_validate(event) {
    // validate form
    var errors = false; //assume all is ok
    console.log('Default Errors: ' + errors); //false

    $('.feedback').html('').hide();

    errors = validate_field('#username', errors);
    console.log('Username Errors: ' + errors); //true

    errors = validate_field('#email', errors);
    console.log('Email Errors: ' + errors); //true

    errors = validate_field('#message', errors);
    console.log('Message Errors: ' + errors); //false

    // kill the form so we can validate it
    if (errors == true)
    {
        event.preventDefault();
    }
}

function validate_field(theField, errors) {
    // validate username
    var currFieldValue = $(theField).val();

    if (currFieldValue.length < 1)
    {
        $(theField).addClass('missing');

        $('<li>You are missing the <b>'+ theField +'</b> Field</li>').appendTo('.feedback');
        $('.feedback').show();

        errors = true;
    }
    else
    {
        $(theField).removeClass('missing');
    }
    return errors;
}
// function call
// form_validate();

// Event listener
$('form.contact').submit(form_validate);

