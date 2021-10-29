const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario1: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
	celular: /^\d{7,14}$/, // 7 a 14 numeros.
	numeroid: /^\d{6,14}$/, // 6 a 14 numeros.
	salario: /^\d{7,14}$/, // 7 a 14 numeros.
	direccion: /^[a-zA-Z0-9\#\-]{4,16}$/, // Letras, numeros, guion y numeral
	cargo:/^[a-zA-Z0-9-]/ ,
}

const campos = {
	usuario1: false,
	apellido: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false,
	celular: false,
	numeroid: false,
	salario: false,
	direccion: false,
	dependencia: false,
	fechaingreso: false,
	fechaterm: false,
	tipocontrato: false,
	cargo: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario1":
			validarCampo(expresiones.usuario1, e.target, 'usuario1');
		break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
		case "celular":
			validarCampo(expresiones.celular, e.target, 'celular');
		break;
		case "numeroid":
			validarCampo(expresiones.numeroid, e.target, 'numeroid');
		break;
		case "salario":
		validarCampo(expresiones.salario, e.target, 'salario');
		break;
		case "cargo":
		validarCampo(expresiones.cargo, e.target, 'cargo');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});