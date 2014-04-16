$(document).ready(function() {
    $(function(){
        $.scrollIt({
            upKey: 38,             // key code to navigate to the next section
            downKey: 40,           // key code to navigate to the previous section
            easing: 'linear',      // the easing function for animation
            scrollTime: 600,       // how long (in ms) the animation takes
            activeClass: 'activeScroll', // class given to the active nav element
            onPageChange: null,    // function(pageIndex) that is called when page is changed
            topOffset: 0           // offste (in px) for fixed top navigation
        });
    });
    
    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        },
        constants: {
            //fill the box for a "duration" of 150% of the viewport (pause for 150%)
            //adjust for shorter/longer pause
            box: '160p'
	}
    });
    
    /* Simple tabs */
    function hideTabs() {
        $('#serverSide, #clientSide, #other, #learning').hide();
    }
    
    function showTab(tab) {
        $('#' + tab + '').show();
    }
    
    // Hide all tabs at first
    hideTabs();
    
    $('.whatIKnowTitle').on('click', function() {
        hideTabs();
        showTab($(this).attr('name'));
    });
    
    $('.whatIKnowTitle').on('mouseover', function() {
        hideTabs();
        showTab($(this).attr('name'));
    });
});

