<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <title>Laravel</title>
        <link rel="stylesheet" href="{{ asset('/css/app.css') }}">
        <script src="{{ mix('/js/app.js') }}" defer></script>
        <script src="{{ asset('/js/font-awesome_5.15.3_js_all.js') }}" defer></script>
    </head>
    <body class="sb-nav-fixed">
    <div id="app">
        <app></app>
    </div>
    </body>
</html>
