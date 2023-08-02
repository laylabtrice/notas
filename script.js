var tarefas = [];
var datas = [];

function adicionar() {
    var tarefa = document.getElementById("tarefa").value;
    if(tarefa) {
        tarefas.push(tarefa)
        datas.push(new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear())
        criaTarefa()
        var tarefa = document.getElementById("tarefa").value = ""
    } else {
        alert('Digite alguma tarefa!')
    }
}
function criaTarefa() {
    console.log(tarefas)
    var tabela = document.getElementById("tabela");
    tabela.innerHTML = ""
    tabela.innerHTML += "<tr><th>Tarefa</th><th>Ações</th></tr>"

    for(let i=0;i<=(tarefas.length-1);i++) {
        tabela.innerHTML += "<tr><td>" + tarefas[i] + "- <span class='data'>" + datas[i] + "</span></td><td><button class='btn' type='button' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn' type='button' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Remover</button></td></tr>"
    };
}
function excluir(i) {
    tarefas.splice(i-1,1)
    criaTarefa()
}
function editar(i) {
    document.getElementById("tarefa").value = tarefas[(i-1)]
    tarefas.splice((i-1),1)
}