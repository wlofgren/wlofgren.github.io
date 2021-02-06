(function($) {
    $(document).ready(function() {
		var cloneCount = 1;
		$('.add-new-player').click(function() {
			var clone = $('.clone .single-player').clone(true);
			clone.attr('id', 'player-' + cloneCount);
			clone.find('input[placeholder="Player Name"]').attr('placeholder', 'Player ' + cloneCount);
			clone.find('input[name="color"]').attr('name', 'color-' + cloneCount);
			clone.find('input[name="your-clue"]').attr('name', 'your-clue-' + cloneCount++);
			$('.clues').append(clone);		
		});
	    $('.remove-player').click(function() {$(this).parent().parent().remove();});
		$('li a').click(function() {$(this).toggleClass('text-decoration-line-through btn-danger');});
		$('input[name="color"]').click(function() {$(this).parent().parent().parent().attr('class', 'panel p-4 m-4 ' + $(this).val());});    		    		
    });
})(jQuery);
