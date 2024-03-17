function ValidaCampos() {
    // Validação do nome
    var nome = document.getElementById('fname').value;
    if (nome.length > 2 && nome.length <= 100) {
        // Validação do e-mail
        var email = document.getElementById('email').value;
        if (email.length > 2 && email.length <= 100) {
            // Validação do CPF
            var cpf = document.getElementById('cpf').value;
            if (cpf.length === 11 && validarCPF(cpf)) {
                // Validação da data de nascimento
                var dtnasc = document.getElementById('dtnasc').value;
                if (dtnasc.length === 10) {
                    // Validação do telefone
                    var tel = document.getElementById('tel').value;
                    if (tel.length === 11) {
                        // Validação do sexo 
                        var sexfeminino = document.getElementById('feminino').checked;
                        var sexmasculino = document.getElementById('masculino').checked;
                        if (sexfeminino || sexmasculino) {
                            // Todos os campos são válidos
                            return true;
                        } else {
                            alert("Selecione o sexo");
                            return false;
                        }
                    } else {
                        alert("O telefone deve ter 11 dígitos");
                        return false;
                    }
                } else {
                    alert("Digite uma data de nascimento válida");
                    return false;
                }
            } else {
                alert('O CPF deve ter 11 caracteres');
                return false;
            }
        } else {
            alert("Digite um e-mail válido");
            return false;
        }
    } else {
        alert("Digite um nome válido");
        return false;
    }
}

function validarCPF(strcpf) {
    var Soma;
    var Resto;
    Soma = 0;
    if (strcpf === "00000000000") return false;

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strcpf.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if (Resto === 10 || Resto === 11) Resto = 0;
    if (Resto !== parseInt(strcpf.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strcpf.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if (Resto === 10 || Resto === 11) Resto = 0;
    if (Resto !== parseInt(strcpf.substring(10, 11))) return false;

    return true;
}
