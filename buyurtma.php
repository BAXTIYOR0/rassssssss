<?php
ini_set ( 'display_errors' , 'Off' );
//bot_Token

$botToken = "5234025448:AAH_LdunHTR1OnMJZvWWZaRaoSivxjvLtbY";
$website = "https://api.telegram.org/bot" . $botToken;

//update

$content = file_get_contents("php://input");
print_r($update = json_decode($content, true));
$chatId = $update["message"]["chat"]["id"];
$first_name = $update["message"]["chat"]["first_name"];
$message = $update["message"]["text"];
$callback = $update["callback_query"];
$call_id = $callback["id"];
$cbid = $callback["from"]["id"];
$cbuser = $callback["from"]["first_name"];

$mes = $callback["message"];
$mid = $mes["message_id"];

if (isset($_POST['tasdiqlash'])) {

	$errors = [];

	if ($_POST['name'] == '') {
		$errors[] = 'ismingiz';
	}
	if ($_POST['surname'] == '') {
		$errors[] = 'familyangiz';
	}
	if ($_POST['phone_number'] == '') {
		$errors[] = 'telefon raqamingiz';
	}
	if ($_POST['product'] == '') {
		$errors[] = 'tanlagan mahsulotingiz';
	}
	if ($_POST['price'] == '') {
		$errors[] = 'mahsulot narxi';
	}
	if ($_POST['address'] == '') {
		$errors[] = 'manzilingiz';
	}
	if ($_POST['billingForm'] == '') {
		$errors[] = "toʻlov turi";
	}

	if (count($errors) == 0) {
		$chatids = file_get_contents('botDB/chatids.txt');
		$chatids = explode(PHP_EOL, $chatids);

		if ( $_POST['billingForm'] == 'Naqd') {
			$billingFormText = "\n\n<b>💵 Toʻlov turi 	:</b> " . $_POST['billingForm'];
		}elseif($_POST['billingForm'] == 'Karta'){
			$billingFormText = "\n\n<b>💳 Toʻlov turi 	:</b> " . $_POST['billingForm'];
		}
	
		$text = "👤 <b>Buyurtmachi :</b> " . $_POST['surname'] . " " . $_POST['name'] . "\n\n<b>📞 Telefon raqami 	:</b> " . $_POST['phone_number'] . "\n\n🚛 <b>Mahsulot : <i>" . $_POST['product'] . "</i></b>\n\n💵 <b>	Narxi :</b> " . $_POST['price'] . $billingFormText . "\n\n📍<b> Manzil :</b> " . $_POST['city'] . ", " . $_POST['district'] . 	", " . $_POST['address'];
	
		if ($_POST['floor'] != '') {
			$text = $text . ", " . $_POST['floor'] . "-qavat";
		}
	
		if ($_POST['apartment'] != '') {
			$text = $text . ", " . $_POST['apartment'] . "-dom";
		}
	
		if ($_POST['homeNumber'] != '') {
			$text = $text . ", " . $_POST['homeNumber'] . "-uy";
		}
		
		for ($i=0; $i < count($chatids); $i++) { 
			sendMessage($chatids[$i], $text,"HTML");
			echo "
				<script>
				    alert('Sizning buyurtmangiz qabul qilindi, tez orada siz bilan hodimlarimiz bogʻlanishadi!');
				    window.location.replace('buyurtma.html');
				</script>
			";
		}
	}elseif(count($errors) == 1){
		echo "
			<script>
			    alert('Iltimos, ". implode(', ', $errors) ." uchun ajratilgan boʻshliqni toʻldiring!');
			    history.back();
			</script>
		";
	}else{
		echo "
			<script>
			    alert('Iltimos, ". implode(', ', $errors) ." uchun ajratilgan boʻshliqlarni toʻldiring!');
			    history.back();
			</script>
		";
	}
	
	
}elseif (isset($_POST['tasdiqlashRassrochka'])) {
	$errors = [];

	if ($_POST['name'] == '') {
		$errors[] = 'ismingiz';
	}
	if ($_POST['surname'] == '') {
		$errors[] = 'familyangiz';
	}
	if ($_POST['phone_number'] == '') {
		$errors[] = 'telefon raqamingiz';
	}
	if ($_POST['card_number'] == '') {
		$errors[] = 'karta raqami';
	}
	if ($_POST['card_month'] == '') {
		$errors[] = 'karta muddati(Oy)';
	}
	if ($_POST['card_year'] == '') {
		$errors[] = 'karta muddati(Yil)';
	}
	if ($_POST['passport_serie'] == '') {
		$errors[] = 'passport seriyasi';
	}
	if ($_POST['passport_number'] == '') {
		$errors[] = 'passport seriya raqami';
	}
	if ($_FILES['passport_1'] == '') {
		$errors[] = 'passport bilan birgalikda tushilgan rasm';
	}
	if ($_FILES['passport_2'] == '') {
		$errors[] = 'passport nusxasi';
	}
	if ($_FILES['passport_3'] == '') {
		$errors[] = 'passport (Yashash joyi)';
	}
	if ($_POST['product'] == '') {
		$errors[] = 'tanlagan mahsulotingiz';
	}
	if ($_POST['price'] == '') {
		$errors[] = 'mahsulot narxi';
	}
	if ($_POST['totalPrice'] == '') {
		$errors[] = 'jami toʻlov';
	}
	if ($_POST['priceMonth'] == '') {
		$errors[] = 'necha oy';
	}
	if ($_POST['PriceMonthPrice'] == '') {
		$errors[] = 'oylik toʻlov';
	}

	if (count($errors) == 0) {
		$chatids = file_get_contents('botDB/chatids.txt');
		$chatids = explode(PHP_EOL, $chatids);
	
		$text = "<b>RASSROCHKA</b>\n\n👤 <b>Buyurtmachi :</b> " . $_POST['surname'] . " " . $_POST['name'] . "\n\n📞<b> Telefon raqami 	:</b> " . $_POST['phone_number'] . "\n\n📗<b> Passport seriya 	:</b> " . $_POST['passport_serie'] . $_POST['passport_number'] . "\n\n💳<b> Karta raqami :</b> " . $_POST['card_number'] . "\n\n📅<b> Karta muddati :</b> " . $_POST['card_month'] . '/' . $_POST['card_year'] . "\n\n🚛 <b>Mahsulot : <i>" . $_POST['product'] . "</i></b>\n\n💵<b> Narxi :</b> " . $_POST['price'] . "\n\n🗓<b>	Oy :</b> " . $_POST['priceMonth'] . "\n\n💵<b> Oylik toʻlov :</b> " . $_POST['PriceMonthPrice'] . " so'm\n\n💵<b> Jami toʻlov :</b> " . $_POST['totalPrice'] . " so'm\n\n📍<b> Manzil :</b> " . $_POST['city'] . ", " . $_POST['district'] . 	", " . $_POST['address'];
	
		if ($_POST['floor'] != '') {
			$text = $text . ", " . $_POST['floor'] . "-qavat";
		}
	
		if ($_POST['apartment'] != '') {
			$text = $text . ", " . $_POST['apartment'] . "-dom";
		}
	
		if ($_POST['homeNumber'] != '') {
			$text = $text . ", " . $_POST['homeNumber'] . "-uy";
		}

		$newPath = 'Passports/'.$_POST['surname'].'_'.$_POST['name'].'_'.$_POST['phone_number'].'_'.uniqid().'_'.time();

		mkdir($newPath);
		// passport_1
		$info = pathinfo($_FILES['passport_1']['name']);
		$ext = $info['extension']; // get the extension of the file
		$newname1 = "passport_1.".$ext;
		move_uploaded_file( $_FILES['passport_1']['tmp_name'], $newPath.'/'.$newname1);
		// passport_2
		$info = pathinfo($_FILES['passport_2']['name']);
		$ext = $info['extension']; // get the extension of the file
		$newname2 = "passport_2.".$ext;
		move_uploaded_file( $_FILES['passport_2']['tmp_name'], $newPath.'/'.$newname2);
		// passport_3
		$info = pathinfo($_FILES['passport_3']['name']);
		$ext = $info['extension']; // get the extension of the file
		$newname3 = "passport_3.".$ext;
		move_uploaded_file( $_FILES['passport_3']['tmp_name'], $newPath.'/'.$newname3);
		
		for ($i=0; $i < count($chatids); $i++) { 
			
			sendPhotoMessage($chatids[$i], [
        ['type' => 'photo', 'media' => urlencode("https://azixuz.000webhostapp.com/Rasskredo/$newPath/$newname1"), 'caption' => urlencode($text), 'parse_mode' => 'HTML'],
        ['type' => 'photo', 'media' => urlencode("https://azixuz.000webhostapp.com/Rasskredo/$newPath/$newname2") ],
        ['type' => 'photo', 'media' => urlencode("https://azixuz.000webhostapp.com/Rasskredo/$newPath/$newname3") ],
    ]);
			echo "
				<script>
				    alert('Sizning buyurtmangiz qabul qilindi, tez orada siz bilan hodimlarimiz bogʻlanishadi!');
				    window.location.replace('rassrochkaKarzinka.html');
				</script>
			";
		}
	}elseif(count($errors) == 1){
		echo "
			<script>
			    alert('Iltimos, ". implode(', ', $errors) ." uchun ajratilgan boʻshliqni toʻldiring!');
			    history.back();
			</script>
		";
	}else{
		echo "
			<script>
			    alert('Iltimos, ". implode(', ', $errors) ." uchun ajratilgan boʻshliqlarni toʻldiring!');
			    history.back();
			</script>
		";
	}
}

if (password_verify($message, file_get_contents('botDB/password.txt'))) {
	$chatids = file_get_contents('botDB/chatids.txt');
	$chatids = explode(PHP_EOL, $chatids);

	if (count($chatids) == 1 && $chatids[0] == ''){
		$chatids[0] = $chatId;
		$chatids = implode(PHP_EOL, $chatids);
		file_put_contents('botDB/chatids.txt', $chatids);
		sendMessage($chatId, "Assalomu aleykum, $first_name,\nRasskredo botiga Xush kelibsiz!","HTML");
	}

	if (!in_array($chatId, $chatids)) {
	    array_push($chatids, $chatId);
		$chatids = implode(PHP_EOL, $chatids);
		file_put_contents('botDB/chatids.txt', $chatids);
		sendMessage($chatId, "Assalomu aleykum, $first_name,\nRasskredo botiga Xush kelibsiz!","HTML");
	}else{
		sendMessage($chatId, "Assalomu aleykum, $first_name","HTML");
	}       
}


function sendMessage($chatId, $message, $parse_mode)
{
    global $website;

    $url = $website . "/sendMessage?chat_id=" . $chatId . "&text=" . urlencode($message) . "&parse_mode=" . $parse_mode;
    file_get_contents($url);
}

function sendPhotoMessage($chatId, $photo)
{
    global $website;

    $url = $website . "/sendMediaGroup?chat_id=" . $chatId . "&media=" . json_encode($photo);
    file_get_contents($url);
}


function file_get_contents_curl($url)
{
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_AUTOREFERER, TRUE);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);

    $data = curl_exec($ch);
    curl_close($ch);
    return $data;
}


?>