// Função para inserir números e operadores na calculadora
function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

// Função para limpar o conteúdo da calculadora
function clean()
{
    document.getElementById('resultado').innerHTML = '';
}

// Função para apagar o último caractere inserido na calculadora
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

// Função para calcular o resultado da expressão na calculadora
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        // Avalia a expressão e exibe o resultado
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        // Exibe mensagem se não houver expressão para calcular
        document.getElementById('resultado').innerHTML = 'Nada para calcular';
    }
}