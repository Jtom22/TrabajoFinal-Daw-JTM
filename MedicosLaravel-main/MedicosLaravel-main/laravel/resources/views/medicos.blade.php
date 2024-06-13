<!-- resources/views/especialidades/medicos.blade.php -->

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Médicos de la Especialidad: {{ $especialidad->descripcion }}</title>
    <!-- Agrega aquí tus enlaces a CSS, scripts, etc. según sea necesario -->
</head>
<body>

    <div class="container">
        <h2>Médicos de la Especialidad: {{ $especialidad->descripcion }}</h2>

        @if ($medicos->count() > 0)
            <ul>
                @foreach ($medicos as $medico)
                    <li>{{ $medico->nombre }} - {{ $medico->otro_dato }}</li>
                @endforeach
            </ul>
        @else
            <p>No hay médicos registrados para esta especialidad.</p>
        @endif
    </div>

    <!-- Agrega aquí tus scripts o enlaces a scripts según sea necesario -->
</body>
</html>