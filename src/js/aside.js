function inicializarAside() {
    const botonMenu = document.querySelector('.boton');
    const aside = document.querySelector('.aside');
    const fondo = document.querySelector('.aside__fondo');

    if (!botonMenu || !aside || !fondo) return;

    const vistaMovil = window.matchMedia('(max-width: 767px)');

    function actualizarEstado() {
        const abierto = vistaMovil.matches
            ? document.body.classList.contains('sidebar-open')
            : !document.body.classList.contains('sidebar-collapsed');

        botonMenu.setAttribute('aria-expanded', String(abierto));
        botonMenu.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
        fondo.hidden = !(vistaMovil.matches && document.body.classList.contains('sidebar-open'));
    }

    function cerrarMenu() {
        document.body.classList.remove('sidebar-open');
        actualizarEstado();
    }

    botonMenu.addEventListener('click', () => {
        if (vistaMovil.matches) {
            document.body.classList.toggle('sidebar-open');
        } else {
            document.body.classList.toggle('sidebar-collapsed');
        }

        actualizarEstado();
    });

    fondo.addEventListener('click', cerrarMenu);
    aside.querySelectorAll('a').forEach((enlace) => {
        enlace.addEventListener('click', () => {
            if (vistaMovil.matches) cerrarMenu();
        });
    });

    document.addEventListener('keydown', (evento) => {
        if (evento.key === 'Escape' && vistaMovil.matches) cerrarMenu();
    });

    vistaMovil.addEventListener('change', () => {
        document.body.classList.remove('sidebar-open', 'sidebar-collapsed');
        actualizarEstado();
    });

    actualizarEstado();
}

inicializarAside();