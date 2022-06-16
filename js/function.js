


$('.custom-file-input').change(function() 
{
	input = $(this)[0];
	id = this.id;
	if (input.files && input.files[0]) 
	{
		if (input.files[0].type.match('image.*')) 
		{
			var reader = new FileReader();
			reader.onload = function(e) 
			{
				var attach_size = 20*1024*1024;
				var attach_file = input.files[0];
				if(input.files[0].size > attach_size){
					$("#img_"+id).val('');
				}
				else 
				{
					$(".label_"+id).addClass("selected");
					$(".img_"+id).attr('src', e.target.result);
				}
			}
			reader.readAsDataURL(input.files[0]);
		} 
		else 
		{
			console.log('ошибка, не изображение');
		}
	} 
	else 
	{
		console.log('Проехали');
	}
});

$('.image-cancel-button').click(function() 
{
	//alert(this.id);
	id = this.id;
	input = "input_"+id;
	img = "img_"+id;
	label = "label_"+id;
	$("."+img).attr('src', 'default-preview.jpg');
	$("."+label).removeClass("selected");
	$("."+input).val("");
	
});
