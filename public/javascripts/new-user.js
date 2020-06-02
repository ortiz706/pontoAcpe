$(document).ready(() => {
  $('#inputRole').off().change(() => {
    const user = $('#inputRole :selected').text();
    const div = document.getElementById('divPassword');
    if (user === 'Diretor(a) de Gestão de Pessoas' || user === 'Assessor(a) de Gestão de Pessoas' || user === 'Assistente Cpe') {
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
