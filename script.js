const names = document.querySelectorAll('.teste')
const couples = document.querySelectorAll('.couple')


names.forEach(nome => {
	nome.addEventListener('dragstart', dragstart)
	nome.addEventListener('drag', drag)
	nome.addEventListener('dragend', drangend)
})

function dragstart(){
	console.log('> DRAGSTART')
	this.classList.add('addrag')
}

function drag(){
	console.log('>DRAGING')
}

function drangend(){
	console.log('>DRAGEND')
	this.classList.remove('addrag')
}

couples.forEach(couple => {
	couple.addEventListener('dragenter', dragenter)
	couple.addEventListener('dragover', dragover)
	couple.addEventListener('dragleave', dragleave)
	couple.addEventListener('drop', drop)
})

function dragenter(){
	console.log(">ENTER")
}

function dragover(){
	console.log(">OVER")
	const getActName = document.querySelector('.addrag')
	this.appendChild(getActName)
}

function dragleave(){
	console.log(">LEAVE")
}

function drop(){
	console.log(">DROP")
}

function createNewElement(elementName, atributes){
	const element = document.createElement(elementName)	
	const arrayAtributes = Object.entries(atributes)
	arrayAtributes.forEach(([key, value]) => element.setAttribute(key, value))	
	return element
}

const p = createNewElement('p', {
	'class': 'teste',
	draggable: true,
})
