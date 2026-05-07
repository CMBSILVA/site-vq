/* ═══ VQ Quality & Compliance · Global JS ═══ */

/* Scroll reveal */
document.addEventListener('DOMContentLoaded', function () {
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    obs.observe(el);
  });
});

/* Mobile menu toggle */
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('mob-open');
}

/* Close mobile menu on link click */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      document.querySelector('.nav-links').classList.remove('mob-open');
    });
  });
});

/* Form handler (WhatsApp) */
function handleSubmit() {
  var nome = document.getElementById('nome').value.trim();
  var empresa = document.getElementById('empresa').value.trim();
  var email = document.getElementById('email').value.trim();
  var telefone = document.getElementById('telefone').value.trim();
  var servico = document.getElementById('servico').value;
  var mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !email || !telefone) {
    alert('Por favor, preencha ao menos nome, e-mail e telefone.');
    return;
  }

  var text = encodeURIComponent(
    '*Novo contato via site VQ Quality & Compliance*\n\n' +
    '*Nome:* ' + nome + '\n' +
    '*Empresa:* ' + (empresa || 'Nao informado') + '\n' +
    '*E-mail:* ' + email + '\n' +
    '*Telefone:* ' + telefone + '\n' +
    '*Servico:* ' + (servico || 'Nao informado') + '\n' +
    '*Mensagem:* ' + (mensagem || 'Nao informado')
  );

  window.open('https://wa.me/5541995889317?text=' + text, '_blank');
}
