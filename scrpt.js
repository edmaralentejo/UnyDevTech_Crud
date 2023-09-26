    const ul = document.getElementById('list-container');
    lista = JSON.parse(localStorage.getItem('dados-aluno')) || []

    function adicionarAluno() {

        input_name = document.querySelector("#name")
        input_class = document.querySelector("#class")
        input_number = document.querySelector("#number")
        input_nota1 = document.querySelector("#nota1")
        input_nota2 = document.querySelector("#nota2")
        input_nota3 = document.querySelector("#nota3")

        const newName = input_name.value, newClass = input_class.value, newNumber = input_number.value,
        newNota1 = input_nota1.value, newNota2 = input_nota2.value, newNota3 = input_nota3.value;

        lista.push(objalunos =
            {
                name: newName,
                class: newClass,
                number: newNumber,
                nota1: newNota1,
                nota2: newNota2,
                nota3: newNota3,
            }
        );

        input_name.value = '', input_class.value = '', input_number.value = '',
        input_nota1.value = '', input_nota2.value = '', input_nota3.value = '',

        sauvaAluno()
        renderisarAluno()
    }

    function renderisarAluno(){
        ul.innerHTML = ''

        lista.map((elemento, index) => {
            li = document.createElement('li')

            function mostrarDadosAluno(){

                // Editar
                const link0 = document.createElement('a')
                imgEdit = document.createElement('img')
                imgEdit.setAttribute('src','img/refresh_25px.png')
                link0.appendChild(imgEdit)
                link0.setAttribute('href', 'editar.html')
                link0.setAttribute('onClick', `sauvaPosicaoAluno(${index})`)

                // Eliminar
                const link1 = document.createElement('a')

                link1.setAttribute('href', '#')
                link1.setAttribute('onClick', `eliminarAluno(${index})`)
                imgRemove = document.createElement('img')
                imgRemove.setAttribute('src','img/remove_25px.png')
                link1.appendChild(imgRemove)


                // li.appendChild()
                li.appendChild(link1)
                li.appendChild(link0)
                ul.appendChild(li)
            }
            media = (parseInt(elemento.nota1) + parseInt(elemento.nota2) + parseInt(elemento.nota3)) / 3

            if(index < 10){
                li.appendChild(document.createTextNode("000" + index + " " + elemento.name + " " + elemento.class + " " + elemento.number + " " + media))
                mostrarDadosAluno()
            }else if(index < 99){
                li.appendChild(document.createTextNode("00" + index + " " + elemento.name + " " + elemento.class + " " + elemento.number +" " + media))
                mostrarDadosAluno()
            }
        })
    }

    renderisarAluno()

    function eliminarAluno(index){
        lista.splice(index,1)

        sauvaAluno()
        renderisarAluno()
    }

    function sauvaPosicaoAluno(index) {
        localStorage.setItem('dados-aluno-id', JSON.stringify(index))
    }

    function sauvaAluno() {
        localStorage.setItem('dados-aluno', JSON.stringify(lista))
    }

    function validar() {

        tname = document.querySelector("#name").value.length
        tclass = document.querySelector("#class").value.length
        tnumber = document.querySelector("#number").value.length
        n1 = document.querySelector("#nota1").value
        n2 = document.querySelector("#nota2").value
        n3 = document.querySelector("#nota3").value

        if(tname == 0 || tclass == 0 || tnumber == 0 || n1.length == 0 || n2.length == 0 || n3.length == 0){
            alert('POR FAVOR PREENCHA OS CAMPOS VAZIOS!')
        }else{
            if(n1 >= 0 && n1 <= 20 || n2 >= 0 && n2 <= 20 || n3 >= 0 && n3 <= 20){
                adicionarAluno()
            }else{
                alert('VOCÊ DIGITOU UMA NOTA NÃO VALIDA, POR FAVOR CORRIJA')
            }
        }

    }

    document.getElementById("cadastrar").addEventListener('click',()=> {
        validar()
    })