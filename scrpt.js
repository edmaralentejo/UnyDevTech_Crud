

    const ul = document.getElementById('list-container');

    lista = JSON.parse(localStorage.getItem('dados-aluno')) || []

    function adicionarAluno() {

        input_name = document.querySelector("#name");
        input_class = document.querySelector("#class");
        input_number = document.querySelector("#number");

        const newName = input_name.value;
        const newClass = input_class.value;
        const newNumber = input_number.value;

        lista.push(objalunos =
            {
                name: newName,
                class: newClass,
                number: newNumber,
            }
        );

        input_name.value = '', input_class.value = '', input_number.value = ''

        sauvaAluno()
        renderisarAluno()
    }


    function renderisarAluno(){
        ul.innerHTML = ''

        lista.map((elemento, index) => {
            li = document.createElement('li')

            function mostrarDados(){

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

                li.appendChild(link1)
                li.appendChild(link0)
                ul.appendChild(li)

                ul.style.display="flex"
                ul.style.justifyContent="space-around"
                ul.style.fontSize = "22px"
            }

            if(index < 10){
                li.appendChild(document.createTextNode("000" +index + " " + elemento.name + " " + elemento.class + " " + elemento.number +" "))
                mostrarDados()
            }else if(index < 99){
                li.appendChild(document.createTextNode("00" +index + " " + elemento.name + " " + elemento.class + " " + elemento.number +" "))
                mostrarDados()
            }
        })

        console.log(lista)
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