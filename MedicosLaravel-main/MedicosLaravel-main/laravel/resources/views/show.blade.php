<!-- resources/views/especialidades/show.blade.php -->

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detalles de la Especialidad</title>
    <!-- Agrega aquí tus enlaces a CSS, scripts, etc. según sea necesario -->
</head>
<body>

    <div class="container">
        <h2>Detalles de la Especialidad</h2>

        <ul>
            <li><strong>ID:</strong> {{ $especialidad->id }}</li>
            <li><strong>Código:</strong> {{ $especialidad->codigo }}</li>
            <li><strong>Descripción:</strong> {{ $especialidad->descripcion }}</li>
        </ul>

        <a href="{{ route('especialidades.edit', $especialidad->id) }}" class="btn btn-warning">Editar</a>
        <form action="{{ route('especialidades.destroy', $especialidad->id) }}" method="post" style="display:inline;">
            @csrf
            @method('DELETE')
            <button type="submit" class="btn btn-danger" onclick="return confirm('¿Estás seguro de eliminar esta especialidad?')">Eliminar</button>
        </form>
    </div>

    <!-- Agrega aquí tus scripts o enlaces a scripts según sea necesario -->
</body>
</html>