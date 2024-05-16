function LoadMenuInfo() {
  let MyMenu = '';
  
MyMenu += '<nav class="navbar navbar-inverse" id="navigation">';
MyMenu += '  <div class="container">';
MyMenu += '    <ul class="nav navbar-nav">';
MyMenu += '      <li><a id="topText" class="glyphicon glyphicon-home" href="index"> Home</a></li>';
MyMenu += '      <li><a id="topText" class="glyphicon glyphicon-search" href="about"> About </a></li>';
MyMenu += '      <li><a id="topText" class="glyphicon glyphicon-education" href="Academics"> Academics</a></li>';
MyMenu += '      <li><a id="topText" class="glyphicon glyphicon-user" href="Contact"> Contact</a></li>';
MyMenu += '    </ul>';
MyMenu += '  </div>';
MyMenu += '</nav>';
  
  
  document.getElementById('navigator').innerHTML = MyMenu;
}

