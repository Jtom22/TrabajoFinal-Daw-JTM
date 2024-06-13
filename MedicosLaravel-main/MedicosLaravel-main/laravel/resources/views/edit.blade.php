<!-- resources/views/especialidades/edit.blade.php -->

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar Especialidad</title>
    <!-- Agrega aquí tus enlaces a CSS, scripts, etc. según sea necesario -->
</head>
<body>

    <div class="container">
        <h2>Editar Especialidad</h2>

        <form action="{{ route('especialidades.update', $especialidad->id) }}" method="post">
            @csrf
            @method('PUT')
            <div class="form-group">
                <label for="codigo">Código:</label>
                <input type="text" name="codigo" class="form-control" value="{{ $especialidad->codigo }}" required>
            </div>
            <div class="form-group">
                <label for="descripcion">Descripción:</label>
                <input type="text" name="descripcion" class="form-control" value="{{ $especialidad->descripcion }}" required>
            </div>
            <button type="submit" class="btn btn-primary">Actualizar</button>
        </form>
    </div>

    <!-- Agrega aquí tus scripts o enlaces a scripts según sea necesario -->
</body>
</html>