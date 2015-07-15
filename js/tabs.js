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