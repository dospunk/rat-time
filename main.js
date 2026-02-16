const ratLinks = [
	'https://www.youtube.com/watch?v=zN1BWOG3ZE4', //oh shit a rat
	'https://en.wikipedia.org/wiki/Rat',
	'https://vampirefreaks.com/products/rat-socks',
	'https://rats-gallery.neocities.org/',
	'https://ratdimension.com/ratmodels/Scherzo.gif',
	'https://spinningrat.online/',
	'https://www.cambridge.org/core/journals/animal-welfare/article/abs/repetitive-backflipping-behaviour-in-captive-roof-rats-rattus-rattus-and-the-effects-of-cage-enrichment/3FE75BDE4EF9DBB05C8BA839B2228781',
	'https://bearwarp.itch.io/rat-s',
	'https://the-mountain.itch.io/rat-king',
	'http://carolinarollerderby.com/super-secret-rat-page-wow-cool',
	
]

const ratButton = document.getElementById('rat-button')

ratButton.addEventListener('click', (evt)=>{
	location.assign(ratLinks[Math.floor(Math.random() * ratLinks.length)])
})

console.log('…ᘛ⁐̤ᕐᐷ …ᘛ⁐̤ᕐᐷ …ᘛ⁐̤ᕐᐷ …ᘛ⁐̤ᕐᐷ …ᘛ⁐̤ᕐᐷ')