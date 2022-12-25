document.addEventListener("DOMContentLoaded", (e) => {
    for (let id of ["station", "miraini", "koryo", "sankyo", "siyakusyo","moyasikun",]) {
        document.getElementById(id).addEventListener("markerFound",
            (e) => {
                document.getElementById("vr-"+id).classList.remove("notfound");
     });
    }
});
