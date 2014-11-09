$('div#toastContainer').on('click', 'div.toast', function () {
    var clicked = $(this);
    clicked.animate({ 'left': '100%' }, 200, function () {
        if (clicked.nextAll().length > 0) {
            clicked.nextAll().animate({ 'top': '-=75' }, 200,function() {
                $(this).css('top','0px');
                clicked.remove();
            });
        } else {
            clicked.remove();
        }
    });
});








function buildDialog(heading, text, classes, option1, option2) {
    var $htmlDialog = $('<div>').attr('id','dialogContainer');
    
    // Applies text
    $htmlDialog
		.append($('<div>').attr('id','dialog').html(text)
			.append($('<button>').html(option1))
			.append($('<button>').html(option2)));
		
    $('body').append($htmlDialog);
}



function buildToast(text, classes, icon, image, timer) {

    // Creates the toast
    var $htmlToast = $('<div>').addClass('toast');

    // Creates the toast's image
    if (image) {
        $htmlToast.append($('<img>').attr('src', image));
    }

    // Applies classes to the toast
    classes = classes || 'style1';
    $htmlToast.addClass(classes);

    // Applies text to the toast
    $htmlToast.append($('<div>').addClass('text').html(text));
    
    // Creates the close button
    $htmlToast.append($('<div>').addClass('close'));

    // Append segments to the DOM
    
    $('div#toastContainer').append($htmlToast);
    $htmlToast.animate({
        'left': '0%'
    }, 250);
}
