(function($) {

    $(document).ready(function() {

		$('.add-new-player').click(function() {
			$('.clone .single-player').clone(true).appendTo('.clues');
		});
	    
	    	$('.remove-player').click(function() {
			$(this).parent().parent().remove();
		});

		$('li a').click(function() {
			$(this).toggleClass('text-decoration-line-through btn-danger');
		});
					
    		    		
    });


})(jQuery);
