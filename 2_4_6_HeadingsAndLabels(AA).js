setTimeout(() => {
    HeadingsAndLabels()
}, 1800);
// Headings must follow a sequential order to avoid confusion.
function HeadingsAndLabels() {
    $.fn.log = function () {
        console.log.apply(console, this);
        return this;
    };
    var headerList = []
    $(document).ready(function () {
        $('*').each(function () {
            if ($(this).prop("nodeName") == "H1" ||
                $(this).prop("nodeName") == "H2" ||
                $(this).prop("nodeName") == "H3" ||
                $(this).prop("nodeName") == "H4" ||
                $(this).prop("nodeName") == "H5" ||
                $(this).prop("nodeName") == "H6") {
                headerList.push($(this).prop("nodeName"))
            }
        }
        )
    }
    )
    var covered = -1
    $(document).ready(function () {
        $('*').each(function () {
            for (let index = covered; index < headerList.length - 1; index++) {
                if (headerList[index] == $(this).prop("nodeName")) {
                    covered = index + 1
                    if (parseInt(headerList[index].replace("H", "")) - parseInt(headerList[index + 1].replace("H", "")) < -1) {
                        console.log("%cRule:%cWCAG 2.4.6 (2.0,AA)",
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
                        if (headerList[index] == "H1") {
                            console.log("%cError:%cHeader following H1 tag is incorrect",
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
                            $(this).log()

                            console.log("%cFix:%cModify the header nesting so that either H1 or H2 follows the current H1 tag",
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
                        } else if (headerList[index] == "H2") {
                            console.log("%cError:%cHeader following H2 tag is incorrect",
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
                            $(this).log()

                            console.log("%cFix:%cModify the header nesting so that either H1 or H2 or H3 follows the current H2 tag",
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
                        } else if (headerList[index] == "H3") {
                            console.log("%cError:%cHeader following H3 tag is incorrect",
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
                            $(this).log()

                            console.log("%cFix:%cModify the header nesting so that either H1 or H2 or H3 or H4 follows the current H3 tag",
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

                        } else if (headerList[index] == "H4") {
                            console.log("%cError:%cHeader following H4 tag is incorrect",
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
                            $(this).log()

                            console.log("%cFix:%cModify the header nesting so that either H1 or H2 or H3 or H4 or H5 follows the current H4 tag",
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

                        }
                        console.log("%c-----------------------------------------------------------------------------",
                            `color: #FFF;
                            background-color: #293543;
                            font-weight: bolder;
                            border-radius: 5px;
                            padding: 5px 10px;
                            font-size: 1rem;
                            display: inline;`)

                    }
                    break
                }
            }
        }
        )
    }
    )
}
