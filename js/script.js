const App=function(){
   this.create=(tagName)=>{
      console.log('Создан новый '+tagName+'-элемент');
      return document.createElement(tagName);
   }
   this.attr=(element, name, value)=>{
      element.setAttribute(name,value); 
      console.log(`Атрибут "${name}=${value}"  добавлен в `+ element.localName);   
   }
   this.html=(element,value)=>{
     element.innerHTML=value;
     console.log('В элемент '+element.localName+' добавлено содержимое')
   }
   this.search=(element,selector)=>{
   
     
     if(selector===undefined){
          console.log(`Все внутренние элементы ${element.localName}`);
          for(let i=0; i<element.children.length;i++){
               console.log(element.children[i]);
          }
               
          
          return element.children;
     }else{
          console.log(`Искомый элемент:`);
          console.log(document.querySelector(`.${selector}`));
          return document.querySelector(`.${selector}`);
     }
          
   }
   this.addClass=(element,className)=>{
        element.classList.add(className);
        console.log(`Класс ${className} добавлен к элементу ${element.localName}`);
   }
   this.removeClass=(element,className)=>{
        element.classList.remove(className);
        console.log(`Класс ${className} удален из элемента ${element.localName}`);
   }
   this.toggleClass=(element,className)=>{
        element.classList.toggle(className);
        console.log(`Класс ${className} переключен в элементе ${element.localName}`);
   }
   this.hasClass=(element,className)=>{
        
        return element.classList.contains(className);

    }
    this.append=(element,newElement,elementBefore)=>{
    
     if(elementBefore===undefined){
          element.appendChild(newElement);
          console.log('Элемент вставлен в конец списка');
     }else{
          element.insertBefore(newElement,elementBefore);
          console.log('элемент вставлен перед нужным элементом')
     }
        

    }
 
    this.on=(element, eventName, funcName)=>{
          element.addEventListener(eventName,()=>{
               funcName;
          })
    }

}

let ShowAlert=()=>{
     alert('Функция вызвана');
    }
    
window.addEventListener('load',()=>{
    const app=new App();
    let tag=app.create('div');
    app.attr(tag,'id','newElement');
    app.html(tag,'<p>Новый абзац</p>');
    let search=app.search(tag); 
    app.addClass(tag,'red');
    app.removeClass(tag,'red');
    app.toggleClass(tag,'red');
    console.log(app.hasClass(tag,'red'));
    let footer=app.search('','footer_text');
    app.append(document.querySelector('.container'),tag);
    let button=app.search('','test_btn');
    app.on(button,'click',ShowAlert());
})