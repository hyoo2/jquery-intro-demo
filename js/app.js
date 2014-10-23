/* app.js
* main script file for our little application
* */

"use strict";

// jQuery!!

// $ = jQuery
// don't need (document).ready(function())
$(function() {
    var nav =$('nav');
    var navTop = nav.offset().top;
    var navHeight = nav.outerHeight();
    var jqWin = $(window);
    var navPlaceholder = $('.nav-placeholder');
    navPlaceholder.height(navHeight);

    // $(window).scroll(function() {
    jqWin.scroll(function() {
        //var scrollPos = $(this).scrollTop();
        var scrollPos = jqWin.scrollTop();
        //console.log(scrollPos);
        if (scrollPos > navTop) {
            nav.addClass('nav-fixed');
            navPlaceholder.show();
        }
        else {
            nav.removeClass('nav-fixed');
            navPlaceholder.hide();
        }
    });

    $('section a[class!="back-to-top"]').attr('target', '_blank');

    // method chaining: hide().fadeIn(1000).fadeOut(500).fadeIn(700);
    $('section').hide().fadeIn(1000);

    // same as event object in JS
    $('nav a, a[class="back-to-top"]').click(function(eventObject) {
        console.log(this.hash);
        var targetElement = $(this.hash);
        var targetTop = targetElement.offset().top;

        $('html, body').animate({scrollTop: targetTop - navHeight - 10}, 700);

        eventObject.preventDefault();
    });
});