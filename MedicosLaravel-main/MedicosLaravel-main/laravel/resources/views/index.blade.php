<!-- resources/views/especialidades/index.blade.php -->

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listado de Especialidades</title>
    <!-- Agrega aquí tus enlaces a CSS, scripts, etc. según sea necesario -->
</head>
<body>

    <div class="container">
        <h2>Listado de Especialidades</h2>

        <a href="{{ route('especialidades.create') }}" class="btn btn-primary">Crear Especialidad</a>

        <table class="table mt-3">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Código</th>
                    <th>Descripción</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                @forelse ($especialidades as $especialidad)
                    <tr>
                        <td>{{ $especialidad->id }}</td>
                        <td>{{ $especialidad->codigo }}</td>
                        <td>{{ $especialidad->descripcion }}</td>
                        <td>
                            <a href="{{ route('especialidades.show', $especialidad->id) }}" class="btn btn-info btn-sm">Ver</a>
                            <a href="{{ route('especialidades.edit', $especialidad->id) }}" class="btn btn-warning btn-sm">Editar</a>
                            <!-- Nuevo botón para ver médicos de la especialidad -->
                            <a href="{{ route('especialidades.medicos', $especialidad->id) }}" class="btn btn-success btn-sm">Ver Médicos</a>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="4">No hay especialidades registradas.</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>

    <!-- Agrega aquí tus scripts o enlaces a scripts según sea necesario -->
</body>
</html>