

const ul = document.getElementById('lista-container')


    function adicionarAluno() {
        const input_name = document.querySelector("#name").value;
        const input_class = document.querySelector("#class").value;
        const input_number = document.querySelector("#number").value;

        Vet_alunos = [
            obj_aluno = {
                nome: input_name,
                class: input_class,
                number: input_number,
            },
        ]

        // ul.innerHTML += obj_aluno.nome +"<br>"+ obj_aluno.class +"<br>"+  obj_aluno.number;
        // console.log(Vet_alunos.length)
    }


    function RenderElements() {
        ul.innerHTML = ''
        listOfElements.map((aluno, numero) => {

            const li = document.createElement('li')
            li.appendChild(document.createTextNode(aluno))

            const link = document.createElement('a')
            link.appendChild(document.createTextNode('Eliminar'))
            link.setAttribute('href','#')
            link.setAttribute('onClick', '#')


            li.appendChild(link)
            ul.appendChild(li)
        })
    }
