Vue.component('navigation',
	{
  template:
	`
		<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
			<a class="navbar-brand" href="index.html">
				<img src="..." alt="Logo ">
			</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item">
						<a class="nav-link" href="Contact.html">Contact Us </a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="Our Team.html">Our Team </a>
					</li>
				</ul>
			</div>
		</nav>
	`
	}),



new Vue({ el: '#templateNav' })
