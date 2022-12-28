

        var second = 0;
        var mintus = 0;
        var hour = 0;
        var t = new Date();

        setInterval(
            function () {
                t = new Date();
                second = t.getSeconds() * 6;
                mintus = t.getMinutes() * 6;
                hour = t.getHours() * 30 + Math.round(mintus / 12);

                document.getElementById("second").style.transform = "rotate(" + second + "deg";

                document.getElementById("mintues").style.transform = "rotate(" + mintus + "deg";

                document.getElementById("hour").style.transform = "rotate(" + hour + "deg";
            },1000
        );