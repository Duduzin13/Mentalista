var numeroSecreto = parseInt(Math.random() * 21);
        var numeroTentativas = 6;

        function Chutar() {
            var resultado = document.getElementById("resultado");
            var tentativas = document.getElementById("tentativas");
            var chute = parseInt(document.getElementById("valor").value);

            if (numeroTentativas > 0) {
                if (chute == numeroSecreto) {
                    resultado.innerHTML = "Parabéns! Você acertou.";
                    numeroTentativas === 0;
                    tentativas.innerHTML = "Recarregue a página para jogar novamente."
                } else if (chute > 20 || chute < 0) {
                    resultado.innerHTML = "Número inválido. Digite um número entre 0 e 20.";
                } else {
                    numeroTentativas--;
                    tentativas.innerHTML = "Você tem " + numeroTentativas + " tentativa(s) restante.";
                    if (numeroSecreto < chute) {
                        resultado.innerHTML = "Ops! Você errou. O número secreto é menor do que o que você digitou.";
                    } else if (numeroSecreto > chute) {
                        resultado.innerHTML = "Ops! Você errou. O número secreto é maior do que o que você digitou.";
                    }
                }
            } if (numeroTentativas === 0) {
                resultado.innerHTML = "Ops! Você errou. O numero secreto era " + numeroSecreto;
                tentativas.innerHTML = "Você esgotou suas tentativas. Recarregue a página para jogar novamente."
            }
        }