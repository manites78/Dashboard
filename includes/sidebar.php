<?php
// Elementos del menú. Para agregar una sección, añade una fila aquí.
$menu = [
    ['id' => 'consola',  'label' => 'Consola',  'icon' => 'bi-terminal',        'href' => '#console-panel'],
    ['id' => 'usuarios', 'label' => 'Usuarios', 'icon' => 'bi-people-fill',     'href' => '#'],
    ['id' => 'archivos', 'label' => 'Archivos', 'icon' => 'bi-folder-fill',     'href' => '#'],
    ['id' => 'software', 'label' => 'Software', 'icon' => 'bi-gear',            'href' => '#'],
    ['id' => 'plugins',  'label' => 'Plugins',  'icon' => 'bi-plugin',          'href' => '#'],
    ['id' => 'mundos',   'label' => 'Mundos',   'icon' => 'bi-globe-americas',  'href' => '#'],
    ['id' => 'nube',     'label' => 'La Nube',  'icon' => 'bi-cloud-download',  'href' => '#'],
];
?>
    <aside class="aside" id="sidebar" aria-label="Menú lateral">
        <nav aria-label="Navegación principal">
            <ul class="navegacion--ul">
                <?php foreach ($menu as $item): ?>
                <li>
                    <a href="<?= htmlspecialchars($item['href']) ?>"
                       aria-label="<?= htmlspecialchars($item['label']) ?>"
                       <?= $item['id'] === $pagina_actual ? 'aria-current="page"' : '' ?>>
                        <i class="bi <?= htmlspecialchars($item['icon']) ?>" aria-hidden="true"></i>
                        <span><?= htmlspecialchars($item['label']) ?></span>
                    </a>
                </li>
                <?php endforeach; ?>
            </ul>
        </nav>
    </aside>
    <button class="aside__fondo" type="button" aria-label="Cerrar menú" hidden></button>