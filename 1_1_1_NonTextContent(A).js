setTimeout(() => {
    NonTextContent_1_1_1()
}, 1000);

function NonTextContent_1_1_1() {
    $.fn.log = function () {
        console.log.apply(console, this);
        return this;
    };
    var videoTags = document.querySelectorAll("video")
    for (let index = 0; index < videoTags.length; index++) {
        if (videoTags.getAttribute("aria-label") == "" || videoTags.getAttribute("aria-label") == null) {
            console.log("%cRule:%cWCAG 1.1.1 (2.0,A)",
                `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #809FFF;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%cError:%cNon-text content Video-only should have descriptive label",
                `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #EB5177;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%cCode Snippet:",
                `color: #FFF;
                            background-color: #333;
                            border-radius: 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            $(videoTags[a]).log()
            console.log("%cFix:%cSpecify a descriptive label that denotes as the title of the video using `aria-label` attribute for the video tag",
                `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #007075;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%c-----------------------------------------------------------------------------",
                `color: #FFF;
                            background-color: #293543;
                            font-weight: bolder;
                            border-radius: 5px;
                            padding: 5px 10px;
                            font-size: 1rem;
                            display: inline;`)
        }
    }
    var audioTags = document.querySelectorAll("audio")
    for (let index = 0; index < audioTags.length; index++) {
        if (audioTags.getAttribute("aria-label") == "" || audioTags.getAttribute("aria-label") == null) {
            console.log("%cRule:%cWCAG 1.1.1 (2.0,A)",
                `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #809FFF;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%cError:%cNon-text content Audio-only should have descriptive label",
                `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #EB5177;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%cCode Snippet:",
                `color: #FFF;
                            background-color: #333;
                            border-radius: 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            $(audioTags[a]).log()
            console.log("%cFix:%cSpecify a descriptive label that denotes as the title of the audio using `aria-label` attribute for the audio tag",
                `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #007075;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%c-----------------------------------------------------------------------------",
                `color: #FFF;
                            background-color: #293543;
                            font-weight: bolder;
                            border-radius: 5px;
                            padding: 5px 10px;
                            font-size: 1rem;
                            display: inline;`)
        }
    }
    var trackTags = document.querySelectorAll("track")
    for (let index = 0; index < trackTags.length; index++) {
        if (trackTags.parentNode.nodeName == "VIDEO") {
            if (trackTags.getAttribute("kind") == "subtitles") {
                if (trackTags.getAttribute("label") == "" || trackTags.getAttribute("label") == null) {
                    console.log("%cRule:%cWCAG 1.1.1 (2.0,A)",
                        `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                        `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #809FFF;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                    console.log("%cError:%cNon-text content - audio/video descriptive track must have a descriptive label",
                        `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                        `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #EB5177;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                    console.log("%cCode Snippet:",
                        `color: #FFF;
                            background-color: #333;
                            border-radius: 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                    $(trackTags[a]).parentNode.log()
                    console.log("%cFix:%cSpecify a descriptive label that denotes some information of the track using `label` attribute for the track tag",
                        `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                        `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #007075;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                    console.log("%c-----------------------------------------------------------------------------",
                        `color: #FFF;
                            background-color: #293543;
                            font-weight: bolder;
                            border-radius: 5px;
                            padding: 5px 10px;
                            font-size: 1rem;
                            display: inline;`)
                }
            }
        }
    }
    var sourceTags = document.querySelectorAll("source")
    for (let index = 0; index < sourceTags.length; index++) {
        if (sourceTags.parentNode.nodeName == "VIDEO") {
            if (sourceTags.getAttribute("kind") == "subtitles") {
                if (sourceTags.getAttribute("label") == "" || sourceTags.getAttribute("label") == null) {
                    console.log("%cRule:%cWCAG 1.1.1 (2.0,A)",
                        `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                        `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #809FFF;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                    console.log("%cError:%cNon-text content - audio descriptive source must have a descriptive label",
                        `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                        `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #EB5177;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                    console.log("%cCode Snippet:",
                        `color: #FFF;
                            background-color: #333;
                            border-radius: 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                    $(sourceTags[a]).parentNode.log()
                    console.log("%cFix:%cSpecify a descriptive label that denotes some information of the source using `label` attribute for the source tag",
                        `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                        `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #007075;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                    console.log("%c-----------------------------------------------------------------------------",
                        `color: #FFF;
                            background-color: #293543;
                            font-weight: bolder;
                            border-radius: 5px;
                            padding: 5px 10px;
                            font-size: 1rem;
                            display: inline;`)
                }
            }
        }

    }
    var inpTags = document.querySelectorAll("input")
    for (let index = 0; index < inpTags.length; index++) {
        if (inpTags[index].type == "image" && inpTags[index].parentNode.nodeName == "FORM") {
            if (imgTags[a].alt != null && imgTags[a].alt != "") {
                console.log("%cRule:%cWCAG 1.1.1 (2.0,A)",
                    `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                    `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #809FFF;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                console.log("%cError:%cForm input element of type `image` is missing alt text",
                    `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                    `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #EB5177;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                console.log("%cCode Snippet:",
                    `color: #FFF;
                            background-color: #333;
                            border-radius: 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                $(inpTags[a]).log()
                console.log("%cFix:%cSpecify a short text alternative with the alt attribute for every input `type=image` inside a form",
                    `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                    `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #007075;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                console.log("%c-----------------------------------------------------------------------------",
                    `color: #FFF;
                            background-color: #293543;
                            font-weight: bolder;
                            border-radius: 5px;
                            padding: 5px 10px;
                            font-size: 1rem;
                            display: inline;`)
            }
        }
    }
    var areaTags = document.querySelectorAll("area")
    for (let index = 0; index < areaTags.length; index++) {
        if (areaTags[index].parentNode.nodeName == "MAP") {
            var imgParentTags = document.querySelectorAll('img')
            for (let iter = 0; iter < imgParentTags.length; iter++) {
                var useMapName = "#" + areaTags[index].parentNode.name
                if (useMapName == imgParentTags[iter].useMap) {
                    if (areaTags[index].alt == null || areaTags.alt == "") {
                        console.log("%cRule:%cWCAG 1.1.1 (2.0,A)",
                            `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                            `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #809FFF;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                        console.log("%cError:%cAlt text for the client-side <area> element of an image map is missing alt text",
                            `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                            `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #EB5177;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                        console.log("%cCode Snippet:",
                            `color: #FFF;
                            background-color: #333;
                            border-radius: 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                        $(areaTags[a]).log()
                        console.log("%cFix:%cSpecify a short text alternative with the alt attribute for every client-side <area> element of an image map",
                            `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                            `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #007075;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                        console.log("%c-----------------------------------------------------------------------------",
                            `color: #FFF;
                            background-color: #293543;
                            font-weight: bolder;
                            border-radius: 5px;
                            padding: 5px 10px;
                            font-size: 1rem;
                            display: inline;`)
                    }
                    if (imgParentTags[index].alt == null || imgParentTags.alt == "") {
                        console.log("%cRule:%cWCAG 1.1.1 (2.0,A)",
                            `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                            `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #809FFF;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                        console.log("%cError:%cAlt text for the client-side <img> element of an image map is missing alt text",
                            `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                            `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #EB5177;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                        console.log("%cCode Snippet:",
                            `color: #FFF;
                            background-color: #333;
                            border-radius: 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                        $(imgParentTags[a]).log()
                        console.log("%cFix:%cSpecify a short text alternative with the alt attribute for every client-side <img> element of an image map",
                            `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                            `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #007075;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                        console.log("%c-----------------------------------------------------------------------------",
                            `color: #FFF;
                            background-color: #293543;
                            font-weight: bolder;
                            border-radius: 5px;
                            padding: 5px 10px;
                            font-size: 1rem;
                            display: inline;`)
                    }
                }
            }
        }
    }

    var imgTags = document.querySelectorAll('img')
    for (var a = 0; a < imgTags.length; a++) {
        if (imgTags[a].src == null || imgTags[a].src == undefined || imgTags[a].src == "") {
            console.log("%cRule:%cWCAG 1.1.1 (2.0,A)",
                `color: #FFF;
            background-color: #333;
            border-radius: 5px 0px 0px 5px;
            padding: 5px 10px;
            font-size: 0.8rem;
            display: inline;
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
            display: inline;
            font-size: 0.8rem;
            background-color: #809FFF;
            border-radius: 0px 5px 5px 0px;
            padding: 5px 10px;
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%cError:%cImage Source is missing.",
                `color: #FFF;
            background-color: #333;
            border-radius: 5px 0px 0px 5px;
            padding: 5px 10px;
            font-size: 0.8rem;
            display: inline;
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
            display: inline;
            font-size: 0.8rem;
            background-color: #EB5177;
            border-radius: 0px 5px 5px 0px;
            padding: 5px 10px;
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%cCode Snippet:",
                `color: #FFF;
            background-color: #333;
            border-radius: 5px;
            padding: 5px 10px;
            font-size: 0.8rem;
            display: inline;
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            $(imgTags[a]).log()
            console.log("%cFix:%cAdd src='<source>",
                `color: #FFF;
            background-color: #333;
            border-radius: 5px 0px 0px 5px;
            padding: 5px 10px;
            font-size: 0.8rem;
            display: inline;
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
            display: inline;
            font-size: 0.8rem;
            background-color: #007075;
            border-radius: 0px 5px 5px 0px;
            padding: 5px 10px;
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%c-----------------------------------------------------------------------------",
                `color: #FFF;
            background-color: #293543;
            font-weight: bolder;
            border-radius: 5px;
            padding: 5px 10px;
            font-size: 1rem;
            display: inline;`)

        }
        var par = imgTags[a].parentNode.nodeName
        if (par != null) {
            if (imgTags[a].parentNode.textContent == "" || imgTags[a].parentNode.textContent == null) {
                if (imgTags[a].alt != null && imgTags[a].alt != "") {
                    // no violation
                    if (imgTags[a].role == "presentation") {
                        console.log("%cRule:%cWCAG 1.1.1 (2.0,A)",
                            `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                            `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #809FFF;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                        console.log("%cError:%cThe decorative image is enclosed in a parent node and alt text is present",
                            `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                            `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #EB5177;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                        console.log("%cCode Snippet:",
                            `color: #FFF;
                            background-color: #333;
                            border-radius: 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                        $(imgTags[a]).log()
                        console.log("%cFix:%cFor a decorative image, do not specify a short text alternative with the alt attribute",
                            `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                            `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #007075;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                        console.log("%c-----------------------------------------------------------------------------",
                            `color: #FFF;
                            background-color: #293543;
                            font-weight: bolder;
                            border-radius: 5px;
                            padding: 5px 10px;
                            font-size: 1rem;
                            display: inline;`)
                    }
                } else {
                    if (imgTags[a].role != "presentation") {
                        console.log("%cRule:%cWCAG 1.1.1 (2.0,A)",
                            `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                            `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #809FFF;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                        console.log("%cError:%cThe image is enclosed in a parent node and alt text is either null or empty",
                            `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                            `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #EB5177;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                        console.log("%cCode Snippet:",
                            `color: #FFF;
                            background-color: #333;
                            border-radius: 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                        $(imgTags[a]).log()
                        console.log("%cFix:%cWhen using the img element, specify a short text alternative with the alt attribute",
                            `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                            `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #007075;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                        console.log("%c-----------------------------------------------------------------------------",
                            `color: #FFF;
                            background-color: #293543;
                            font-weight: bolder;
                            border-radius: 5px;
                            padding: 5px 10px;
                            font-size: 1rem;
                            display: inline;`)
                    }

                }
            }
        }
        if (imgTags[a].alt == "" || imgTags[a].alt == null) {
            if (imgTags[a].title != "" && imgTags[a].title != null) {
                if (imgTags[a].role == "presentation") {
                    console.log("%cRule:%cWCAG 1.1.1 (2.0,A)",
                        `color: #FFF;
                        background-color: #333;
                        border-radius: 5px 0px 0px 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                        `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #809FFF;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                    console.log("%cError:%cThe image element seems to be a decorative one and it has a title attribute",
                        `color: #FFF;
                        background-color: #333;
                        border-radius: 5px 0px 0px 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                        `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #eb5177;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                    console.log("%cCode Snippet:",
                        `color: #FFF;
                        background-color: #333;
                        border-radius: 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                    $(imgTags[a]).log()
                    console.log("%cFix:%cIn case of a decorative image the title attribute should either be empty or null",
                        `color: #FFF;
                        background-color: #333;
                        border-radius: 5px 0px 0px 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                        `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #007075;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                    console.log("%c-----------------------------------------------------------------------------",
                        `color: #FFF;
                        background-color: #293543;
                        font-weight: bolder;
                        border-radius: 5px;
                        padding: 5px 10px;
                        font-size: 1rem;
                        display: inline;`)
                } else {
                    console.log("%cRule:%cWCAG 1.1.1 (2.0,A)",
                        `color: #FFF;
                        background-color: #333;
                        border-radius: 5px 0px 0px 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                        `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #809FFF;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                    console.log("%cWarning:%cThe image element might be a decorative and it has a title attribute",
                        `color: #FFF;
                        background-color: #333;
                        border-radius: 5px 0px 0px 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                        `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #F6976E;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                    console.log("%cCode Snippet:",
                        `color: #FFF;
                        background-color: #333;
                        border-radius: 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                    $(imgTags[a]).log()
                    console.log("%cFix:%cIn case of a decorative image the title attribute should either be empty or null",
                        `color: #FFF;
                        background-color: #333;
                        border-radius: 5px 0px 0px 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                        `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #007075;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                    console.log("%c-----------------------------------------------------------------------------",
                        `color: #FFF;
                        background-color: #293543;
                        font-weight: bolder;
                        border-radius: 5px;
                        padding: 5px 10px;
                        font-size: 1rem;
                        display: inline;`)
                }
            }
        }
        if (imgTags[a].role != "presentation") {
            console.log("%cRule:%cWCAG 1.1.1 (2.0,A)",
                `color: #FFF;
                        background-color: #333;
                        border-radius: 5px 0px 0px 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #809FFF;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%cError:%cThe image element is missing the alt attribute",
                `color: #FFF;
                        background-color: #333;
                        border-radius: 5px 0px 0px 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #EB5177;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%cCode Snippet:",
                `color: #FFF;
                        background-color: #333;
                        border-radius: 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            $(imgTags[a]).log()
            console.log("%cFix:%cAdd an alt attribute. If the image is for decorative purposes, define `role=presentation`",
                `color: #FFF;
                        background-color: #333;
                        border-radius: 5px 0px 0px 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #007075;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%c-----------------------------------------------------------------------------",
                `color: #FFF;
                        background-color: #293543;
                        font-weight: bolder;
                        border-radius: 5px;
                        padding: 5px 10px;
                        font-size: 1rem;
                        display: inline;`)
        }
        if (imgTags[a].alt.split(" ").length <= 2) {
            if (imgTags[a].title != "" && imgTags[a].title != null) {
                if (imgTags[a].role == "presentation") {
                    console.log("%cRule:%cWCAG 1.1.1 (2.0,A)",
                        `color: #FFF;
                        background-color: #333;
                        border-radius: 5px 0px 0px 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                        `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #809FFF;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                    console.log("%cError:%cThe image element seems to be a decorative one and title attribute was found",
                        `color: #FFF;
                        background-color: #EB5177;
                        border-radius: 5px 0px 0px 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                        `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #EB5177;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                    console.log("%cCode Snippet:",
                        `color: #FFF;
                        background-color: #333;
                        border-radius: 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                    $(imgTags[a]).log()
                    console.log("%cFix:%cRemove the title attribute or make title empty for a decorative image",
                        `color: #FFF;
                        background-color: #333;
                        border-radius: 5px 0px 0px 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                        `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #007075;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                    console.log("%c-----------------------------------------------------------------------------",
                        `color: #FFF;
                        background-color: #293543;
                        font-weight: bolder;
                        border-radius: 5px;
                        padding: 5px 10px;
                        font-size: 1rem;
                        display: inline;`)
                }
            }
            console.log("%cRule:%cWCAG 1.1.1 (2.0,A)",
                `color: #FFF;
                                background-color: #333;
                                border-radius: 5px 0px 0px 5px;
                                padding: 5px 10px;
                                font-size: 0.8rem;
                                display: inline;
                                box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
                                display: inline;
                                font-size: 0.8rem;
                                background-color: #809FFF;
                                border-radius: 0px 5px 5px 0px;
                                padding: 5px 10px;
                                box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%cWarning:%cThe image element might be decorative and a non-empty alt text was found",
                `color: #FFF;
                                background-color: #333;
                                border-radius: 5px 0px 0px 5px;
                                padding: 5px 10px;
                                font-size: 0.8rem;
                                display: inline;
                                box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
                                display: inline;
                                font-size: 0.8rem;
                                background-color: #F6976E;
                                border-radius: 0px 5px 5px 0px;
                                padding: 5px 10px;
                                box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%cCode Snippet:",
                `color: #FFF;
                                background-color: #333;
                                border-radius: 5px;
                                padding: 5px 10px;
                                font-size: 0.8rem;
                                display: inline;
                                box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            $(imgTags[a]).log()
            console.log("%cFix:%cRemove the alt attribute or make alt text empty for a decorative image",
                `color: #FFF;
                                background-color: #333;
                                border-radius: 5px 0px 0px 5px;
                                padding: 5px 10px;
                                font-size: 0.8rem;
                                display: inline;
                                box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
                                display: inline;
                                font-size: 0.8rem;
                                background-color: #007075;
                                border-radius: 0px 5px 5px 0px;
                                padding: 5px 10px;
                                box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%c-----------------------------------------------------------------------------",
                `color: #FFF;
                                background-color: #293543;
                                font-weight: bolder;
                                border-radius: 5px;
                                padding: 5px 10px;
                                font-size: 1rem;
                                display: inline;`)
        }
        else {
            console.log("%cRule:%cWCAG 1.1.1 (2.0,A)",
                `color: #FFF;
                        background-color: #333;
                        border-radius: 5px 0px 0px 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #809FFF;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%cWarning:%cThe image element might be decorative and a non-empty alt text was found",
                `color: #FFF;
                        background-color: #333;
                        border-radius: 5px 0px 0px 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #F6976E;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%cCode Snippet:",
                `color: #FFF;
                        background-color: #333;
                        border-radius: 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            $(imgTags[a]).log()
            console.log("%cFix:%cRemove the alt attribute or make alt text empty for a decorative image",
                `color: #FFF;
                        background-color: #333;
                        border-radius: 5px 0px 0px 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #007075;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%c-----------------------------------------------------------------------------",
                `color: #FFF;
                        background-color: #293543;
                        font-weight: bolder;
                        border-radius: 5px;
                        padding: 5px 10px;
                        font-size: 1rem;
                        display: inline;`)

        }
    }
}