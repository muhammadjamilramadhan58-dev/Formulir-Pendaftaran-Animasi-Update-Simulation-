document.querySelector('form').addEventlistener('submit' , function(e) {
    if (!this.checkValidity()) {
        e.preventDefault();
    } 
});