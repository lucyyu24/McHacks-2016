debugger;
shortcut.add("ctrl+shift+s", function(){
    $('img').click = function(){
        $('img').unbind("click");
        var url = this.
        $('body').append($('<div id="immitateOverlay"> </div>').append($('<canvas id="immitateCanvas"> </canvas>')));

        var canvas = document.getElementById('immitateCanvas'),
        context = canvas.getContext('2d');

        function make_base() {
          base_image = new Image();
          base_image.src = this.prop('src');
          base_image.onload = function(){
            context.drawImage(base_image, 100, 100);
          }
        }
        make_base();
    };
});
