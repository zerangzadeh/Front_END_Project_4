$(document).ready(function() {

    function removeallsidebartoggleclass() {
        $('#sidebar-toggle-hide').removeClass('d-md-inline');
        $('#sidebar-toggle-hide').removeClass('d-none');
        $('#sidebar-toggle-show').removeClass('d-inline');
        $('#sidebar-toggle-show').removeClass('d-md-none');
    }
    $('#sidebar-toggle-hide').click(function() {
            // alert('hi');
            $('#sidebar').fadeOut(300);
            $('#main-body').animate({ width: "100%" }, 300);
            setTimeout(function() {
                removeallsidebartoggleclass();
                $('#sidebar-toggle-hide').addClass('d-none');
                $('#sidebar-toggle-show').removeClass('d-none');
            }, 300);

        })
        // ----------------------------
    $('#sidebar-toggle-show').click(function() {
        // alert('hi');
        $('#sidebar').fadeIn(300);

        setTimeout(function() {
            removeallsidebartoggleclass();
            $('#sidebar-toggle-show').addClass('d-none');
            $('#sidebar-toggle-hide').removeClass('d-none');
        }, 300);

    })



    $('#header-body-show').click(function() {

        $('#body-header').toggle(300);
    });


    $('#search-toggle').click(function() {

        $('#search-toggle').removeClass('d-md-inline');
        $('#search-area').addClass('d-md-inline');
        $('#search-input').animate({ width: "12rem" }, 300);
    });


    $('#search-area-hide').click(function() {

        $('#search-input').animate({ width: "0" }, 300);
        setTimeout(function() {
            $('#search-toggle').addClass('d-md-inline');
            $('#search-area').removeClass('d-md-inline');
        }, 300)
    });


    $('#notification-toggle').click(function() {

        $('#notification-bar').fadeToggle();

    });
    $('#comment-toggle').click(function() {

        $('#comment-bar').fadeToggle();

    });
    $('#user-toggle').click(function() {

        $('#user-profile-bar').fadeToggle();

    });


    $('.sidebar-group-link').click(function() {
        // $('.sidebar-group-link-active').children('.sidebar-dropdown-toggle').children('.angel').removeClass('fa-angle-down');
        // $('.sidebar-group-link-active').children('.sidebar-dropdown-toggle').children('.angel').addClass('fa-angle-left');
        // // $('.sidebar-group-link-active').children('.sidebar-dropdown').fadeOut(300);


        $('.sidebar-group-link').removeClass('sidebar-group-link-active');
        $('.sidebar-group-link').children('.sidebar-dropdown-toggle').children('.angel').removeClass('fa-angle-down');
        $('.sidebar-group-link').children('.sidebar-dropdown-toggle').children('.angel').addClass('fa-angle-left');


        $(this).addClass('sidebar-group-link-active');
        $(this).children('.sidebar-dropdown-toggle').children('.angel').removeClass('fa-angle-left');
        $(this).children('.sidebar-dropdown-toggle').children('.angel').addClass('fa-angle-down');



        // $(this).removeClass('sidebar-group-link-active');
        // $(this).children('.sidebar-dropdown-down').fadeOut();
        // $(this).children('.sidebar-dropdown-toggle').children('.angel').removeClass('fa-angle-down');
        // $(this).children('.sidebar-dropdown-toggle').children('.angel').addClass('fa-angle-left');





    });

    // $('.sidebar-group-link-active').click(function() {
    //     alert('hi');
    //     // $(this).parent('.sidebar-group-link').removeClass('sidebar-group-link-active');
    //     //     $('.sidebar-group-link-active').removeClass('sidebar-group-link-active');
    //     //     $('.sidebar-group-link-active').children('.sidebar-dropdown-toggle').children('.angel').removeClass('fa-angle-down');
    //     //     $('.sidebar-group-link-active').children('.sidebar-dropdown-toggle').children('.angel').addClass('fa-angle-left');

    // });





});



$('#full-screen').click(function() {
    toggleFullScreen();
});

function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullscreen) {
            document.documentElement.mozRequestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
        $('#screen-compress').removeClass('d-none');
        $('#screen-expand').addClass('d-none');
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
        $('#screen-compress').addClass('d-none');
        $('#screen-expand').removeClass('d-none');
    }
}