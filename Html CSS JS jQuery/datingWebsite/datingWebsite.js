window.onload = function() {
    var files = document.querySelector("input[type=file]");
    files.addEventListener("change", function(e) {
        if(this.files) {
            var reader = new FileReader();
            var preview = document.querySelector('img')
            reader.onload = function(e) {
                //console.log(reader)
                preview.src = reader.result
                preview.setAttribute('width','200px')
             }
            // console.log(files)
             reader.readAsDataURL(this.files[0]);

        }
    });
}
