jQuery(document).ready(function() {
    jQuery('#nav a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
		jQuery('#content ' + currentAttrValue).siblings().slideUp(400);
		jQuery('#content ' + currentAttrValue).delay(400).slideDown(400);

        // Change/remove current tab to active
        jQuery(this).addClass('active').siblings().removeClass('active');
        jQuery('body ' + 'ul ').removeClass('active');
 
        e.preventDefault();
    });
});
function scrollAbout() {
    window.scrollTo(0, 1200);
}
function scrollGraph() {
    window.scrollTo(0, 3200);
}
function scrollMaps() {
    window.scrollTo(0,2200);
}