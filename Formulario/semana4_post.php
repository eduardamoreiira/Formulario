<?php
	function formatTelefone($value)
	{
	  $tel = preg_replace("/\D/", '', $value);
	  
	  if (strlen($tel) === 11) {
		return preg_replace("/(\d{2})(\d{5})(\d{4})/", "(\$1) \$2-\$3", $tel);
	  } else if(strlen($tel) === 10)
	  {
		  return preg_replace("/(\d{2})(\d{4})(\d{4})/", "(\$1) \$2-\$3", $tel);
	  }
	}

	$nome = $_POST['nome'];
	$cpf = $_POST['cpf'];
	$datanascimento = $_POST['datanascimento'];
	$sexo = $_POST['sexo'];
	$telefone = $_POST['telefone'];
	$email = $_POST['email'];
	
	$cpf = preg_replace("/(\d{3})(\d{3})(\d{3})(\d{2})/", "\$1.\$2.\$3-\$4", $cpf);
	$telefone = formatTelefone($telefone);
	
	$date = new DateTime($datanascimento );
	$interval = $date->diff( new DateTime( date('Y-m-d') ) );
	$idade = $interval->format( '%Y anos' );	
?>
<b>Nome:</b> <?=$nome?></br>
<b>CPF:</b> <?=$cpf?></br>
<b>Data de Nascimento:</b> <?=date('d/m/Y', strtotime($datanascimento))?></br>
<b>Idade:</b> <?=$idade?></br>
<b>Sexo:</b> <?=$sexo?></br>
<b>Telefone:</b> <?=$telefone?></br>
<b>E-mail:</b> <?=$email?></br>