// Estado dos elementos
// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button

// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button

  const button = document.querySelector('button');
  let nav = document.querySelector('nav');

  function toggleMenu(event: PointerEvent) {

    if(nav && button){
      if (nav.classList.value === 'active') {
        nav.classList.value ='';
        button.ariaLabel = "Abrir Menu"
        button.ariaExpanded = "false"

        return nav
        }

      if (nav.classList.value === '') {
        nav.classList.add('active');
        button.ariaLabel = "Fechar Menu"
        button.ariaExpanded = "true"

        return nav
      }
    }
  }
  
  button?.addEventListener('pointerdown', toggleMenu)


//   // resolução do professor
//   const btnMobile = document.getElementById('btn-mobile');

// function toggleMenu(event: PointerEvent) {
//   const button = event.currentTarget;
//   const nav = document.getElementById('nav');
//   if (button instanceof HTMLElement && nav) {
//     const active = nav.classList.contains('active');
//     if (active) {
//       nav.classList.remove('active');
//       button.setAttribute('aria-expanded', 'false');
//       button.setAttribute('aria-label', 'Abrir Menu');
//     } else {
//       nav.classList.add('active');
//       button.setAttribute('aria-expanded', 'true');
//       button.setAttribute('aria-label', 'Fechar Menu');
//     }
//   }
// }

// btnMobile?.addEventListener('pointerdown', toggleMenu);