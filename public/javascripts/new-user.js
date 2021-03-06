$(document).ready(() => {
  $('#inputRole').off().change(() => {
    const user = $('#inputRole :selected').text();
    const div = document.getElementById('divPassword');
    if (user === 'Diretor(a) de Gestão de Pessoas' || user === 'Consultor(a) de Gestão de Pessoas' || user === 'Assistente Cpe' || user === 'Diretor(a) de Projetos' || user === 'Diretor(a) de Vice Presidencia' || user === 'Diretor(a) Comercial' || user === 'Diretor(a) Presidente' || user === 'Diretor(a) de Juridico Financeiro') {
      if (div.classList.contains('d-none')) {
        div.classList.remove('d-none');
        $('#inputPassword').attr('required', true);
      }
    }
    else {
      if (!div.classList.contains('d-none')) {
        div.classList.add('d-none');
        $('#inputPassword').attr('required', false);
      }
    }
  });
});
