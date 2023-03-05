<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Vérifier la connexion à la base de données</h1>

    @if (DB::connection()->getDatabaseName())
        <p>Connexion à la base de données {{ DB::connection()->getDatabaseName() }} établie avec succès.</p>
    @else
        <p>Impossible de se connecter à la base de données.</p>
    @endif

    </div>
</body>

</html>
