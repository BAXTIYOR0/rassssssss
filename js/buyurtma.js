class form {
   constructor(set) {
      this.el = document.querySelector(set.el);
      this.input = this.el.querySelector('#huduViloot');
      this.streets = [...this.el.querySelectorAll('.tumanlar')];
      this.move()
      
   }
   
   move() {
      this.input.addEventListener('input', (e) => {
         let vl = this.input.value
         this.delOption(this.streets)
         this.addOption(this.streets, vl)
      })
   }
   delOption(elem) {
      for (let i = 0; i < elem.length; i++) {
         const option = elem[i];
         option.classList.remove('active')
      }
   }
   addOption(elem, answer) {
      for (let i = 0; i < elem.length; i++) {
         const option = elem[i];
         if (option.classList.contains(answer)) {
            option.classList.add('active')
         }
      }
   }
}

new form({
   el: '#street'
})

let vilotSelect = document.querySelector('#huduViloot');
let tumanInput = document.querySelector('#viloyatTumanlariclick');
vilotSelect.addEventListener('click', () => {
   tumanInput.value = 'tuman';
})


