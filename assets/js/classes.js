class Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    this._nombre = nombre;
    this._edad = edad;
    this._img = img;
    this._comentarios = comentarios;
    this._sonido = sonido;
  }
  getNombre() {
    return this._nombre;
  }
  getEdad() {
    return this._edad;
  }
  getImg() {
    return this._img;
  }
  setComentarios(new_comentario) {
    this._comentarios = new_comentarios;
  }
  getSonido() {
    return this._sonido;
  }
}

export class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  rugir() {}
}

class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  aullar() {}
}

class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  gruñir() {}
}

class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Sisear() {}
}

class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  chillar() {}
}
