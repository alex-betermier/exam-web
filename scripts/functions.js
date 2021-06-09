var imagesAffichees = true;

$(document).ready(function()
{	
	$("#cacheImage").on("click", function()
	{
		if (imagesAffichees)
		{
			$("img").hide();
		}
		else
		{
			$("img").show();
		}
		
		imagesAffichees = !imagesAffichees;
	});
});