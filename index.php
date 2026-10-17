<?php
// Datos de la página (más adelante pueden venir de la sesión o de una base de datos)
$titulo         = 'Dashboard';
$pagina_actual  = 'consola';
$nombre_usuario = 'Juan Pablo';
?>
<?php include __DIR__ . '/includes/head.php'; ?>
<?php include __DIR__ . '/includes/header.php'; ?>
<?php include __DIR__ . '/includes/sidebar.php'; ?>

    <div class="main-contenido">
        <div class="nombre">
            <h1>Panel de Control</h1>
            <h2>Hola <?= htmlspecialchars($nombre_usuario) ?></h2>
        </div>

        <div id="console-panel" class="console">
            <div class="console-output">
                <!-- aquí se agregan las líneas de log con JS -->
            </div>
            <input class="console--input" id="console-input" type="text" placeholder="Escribe un comando..." />
        </div>
    </div>

<?php include __DIR__ . '/includes/footer.php'; ?>