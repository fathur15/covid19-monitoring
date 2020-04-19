<body>
    <nav style="<?= (isset($style['wrapper'])) ? $style['wrapper'] : null ?>" class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <?php if(isset ($brand) && !empty($brand['text'])): ?>
        <a style="<?= (isset($style['textBrand'])) ? $style['textBrand'] : null ?>" class="navbar-brand" href="#"><?= $brand['text'] ?></a>
        <?php endif ?>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
        <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">About Me</a>
        </li>
        </ul>
    </div> 
    <div class="other-menus pull-right">        
        <p> Refresh dalam: <span id="MyTimerDisplay" class="timer"></span></p>
        <div id="MyClockDisplay" class="clock"></div>
        <script>showTime();showTimer();</script>
    </div>
    <button class="navbar-toggler left" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    </nav>