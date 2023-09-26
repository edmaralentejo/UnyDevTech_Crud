    lista = JSON.parse(localStorage.getItem('dados-aluno')) || []
    index = 1+JSON.parse(localStorage.getItem('dados-aluno-id')) || ''

    alunoEditadoNome = document.querySelector("#name")
    alunoEditadoNome.value = lista[index - 1].name

    alunoEditadoTurma = document.querySelector("#class")
    alunoEditadoTurma.value = lista[index - 1].class

    alunoEditadoNumero = document.querySelector("#number")
    alunoEditadoNumero.value = lista[index - 1].number


    function editarAlunoCadastrado(){
        newName = document.querySelector("#name").value
        newClass = document.querySelector("#class").value
        newNumber = document.querySelector("#number").value

        lista[index - 1].name = newName
        lista[index - 1].class = newClass
        lista[index - 1].number = newNumber
        sauvaAlunoCadastrado()
    }

    function sauvaAlunoCadastrado() {
        localStorage.setItem('dados-aluno', JSON.stringify(lista))
    }

    function validar() {

        tname = document.querySelector("#name").value.length
        tclass = document.querySelector("#class").value.length
        tnumber = document.querySelector("#number").value.length

        if(tname == 0 || tclass == 0 || tnumber == 0){
            alert('POR FAVOR PREENCHA OS CAMPOS VAZIOS!')
        }else{
            editarAlunoCadastrado()
            
        }

    }

    document.getElementById("editarCadastro").addEventListener('click',()=> {
        validar()
    })