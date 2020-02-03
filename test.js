


class Options {
    constructor (height, width, bg, fontSize, textAlign) {
       this.height = height;
       this.width = width;
       this.bg = bg;
       this.fontSize = fontSize;
       this.textAlign = textAlign; 
    }

    newDiv () {
        let div = document.createElement('div');
        div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
        div.style.height = this.height + 'px';
        div.style.width = this.width + 'px';
        div.style.background = this.bg;
        

        document.body.append(div);
    }
}

let  opt = new Options(300,300,'red',1,1);
opt.newDiv();
