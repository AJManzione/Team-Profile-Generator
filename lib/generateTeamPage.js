const template =`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${managerName}
        Manager
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${managerId}</li>
          <li class="list-group-item">Email: ${managerEmail}</li>
          <li class="list-group-item">Email: ${managerOffice}</li>
        </ul>
      </div>
</body>
</html>
`;