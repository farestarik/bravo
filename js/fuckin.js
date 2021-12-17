let video_markup = `
    <video controls autoplay>
        <source id="video_src" src="">
    </video>
`;


$("#show_media_btn").on("click", function(e) {
    e.preventDefault();

    if (!$.trim($("#msg").val())) {
        alert('عيب كده يسطا');
        $("#msg").val('');
    } else {

        let media = {
            "برافو علييييك": "videos/bravo.mp4",
            "هو ده": "videos/hayda_howa.mp4"
        };

        let media_length = media.length;

        // var vid = media[Math.floor(Math.random() * media_length)];

        let header = function(object, value) {
            return Object.keys(object).find(key => object[key] === value);
        };

        let random = function(obj, out = 'vid') {
            var keys = Object.keys(obj);
            return obj[keys[keys.length * Math.random() << 0]];
        };

        let vid = random(media);
        let media_label = header(media, vid);

        $("#media_modal").modal('show');

        $("#fuckin_media_box").html(video_markup);
        $("#video_src").attr('src', vid);
        $("#media_label").html(media_label);

        $('video').on('ended', function(e) {
            $("#teslam_btn").click();
        });


    }


});

$("#teslam_btn").on('click', function(e) {
    e.preventDefault();

    $("#media_modal").modal('hide');
    $("#fuckin_media_box").html("");
    $("#media_label").html("برافو علييييك");
    $("#msg").val('');

});