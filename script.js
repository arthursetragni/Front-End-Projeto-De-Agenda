var modal;
var calendar;
//retorna um objeto com os dados do localStorage
function leDados() {
  let strDados = localStorage.getItem('db');
  let objDados = {};

  if (strDados != null) {
     objDados = JSON.parse(strDados);
   }
   else {
    objDados = {
      events: [
        {
          "id": 1,
          "title": "Dia todo",
          "start": "2023-07-23",
          "end": "2023-07-24"
        },
        {
          "id": 2,
          "title": "Mais de um dia",
          "start": "2023-06-07",
          "end": "2023-06-10"
        },
        {
          "id": "999",
          "title": "Repetido",
          "start": "2023-06-09T16:00:00-05:00"
        },
        {
          "id": "999",
          "title": "Repetido",
          "start": "2023-06-16T16:00:00-05:00"
        },
        {
          "title": "Conferencia",
          "start": "2023-06-11",
          "end": "2023-06-13"
        },
        {
          "title": "Reunião",
          "start": "2023-06-12T10:30:00-05:00",
          "end": "2023-06-12T12:30:00-05:00"
        },
        {
          "title": "Aulinha do Theldão",
          "start": "2023-06-12T12:00:00-05:00"
        },
        {
          "title": "Reunião",
          "start": "2023-06-12T14:30:00-05:00"
        },
        {
          "title": "Happy Hour",
          "start": "2023-06-12T17:30:00-05:00"
        },
        {
          "title": "Jantinha",
          "start": "2023-06-12T20:00:00"
        },
        {
          "title": "Aula do Carlão",
          "start": "2023-06-13T07:00:00-05:00"
        },
        {
          "title": "Teste de link",
          "url": "http://google.com/",
          "start": "2023-06-28"
        }
      ]
    }
  }
  return objDados;
}
//Salva os dados no localStorage
function salvaDados(dados) {
  localStorage.setItem('db', JSON.stringify(dados));
}
//Pega os dados do evento
function salvarDados() {

  let titulo2 = document.getElementById("titulo").value;
  let data = document.getElementById("dataInicio").value;
  let tarefas = document.getElementById("descricao").value;
  let time = document.getElementById("dataFim").value;

  let event = {
    title: titulo2,
    start: data,
    end: time
  };


  var banco = leDados();
  banco.events.push(event);
  salvaDados(banco);

  document.getElementById("titulo").value = "";
  document.getElementById("dataInicio").value = "";
  document.getElementById("descricao").value = "";
  document.getElementById("dataFim").value = "";
  fechar();
  calendar.addEvent(event);
}

function fechar() {
  modal.close();
}

function abrir() {
  modal.showModal();
}

document.addEventListener('DOMContentLoaded', function() {

  modal = document.querySelector(".dialog");

  var calendarEl = document.getElementById('calendar');

  calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridWeek',
    headerToolbar: {
      start: 'today prev,next',
      center: 'title',
      end: 'dayGridMonth,dayGridWeek,dayGridDay'
    },
    buttonText: {
      today: 'Hoje',
      month: 'Mês',
      week: 'Semana',
      day: 'Dia',
    },
    locale: 'pt-br',
    events: leDados(),

  });
  calendar.render();
});

