
    $(document).ready(function() {
function updateData() {
    $.ajax({
        url: '/update_data',
        success: function(data) {
            $('#cpu-usage').text(data.cpu);
            $('#disk-usage').text(data.disk);
            $('#memory-usage').text(data.memory);
        },
        complete: function() {
            setTimeout(updateData, 1000);
        }
    });
}

updateData();
});
