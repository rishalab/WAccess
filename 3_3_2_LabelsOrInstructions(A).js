setTimeout(() => {
    LabelsOrInstructions()
}, 700);

function LabelsOrInstructions() {
    $.fn.log = function () {
        console.log.apply(console, this);
        return this;
    };
    var inputTags = document.querySelectorAll('input')
    for (var d = 0; d < inputTags.length; d++) {
        var testCasePass = false
        var labelTags = document.querySelectorAll('input');
        for (var x = 0; x < labelTags.length; x++) {
            if (labelTags[x].htmlFor == inputTags[d].id) {
                if (labelTags[x].innerText != null && labelTags[x].innerText != "") {
                    testCasePass = true
                    break
                }
            }
            if (testCasePass == false) {
                console.log("%cRule:%cWCAG 3.3.2 (2.0,A)",
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
            console.log("%cError:%cInput element's corresponding label's text found empty",
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
            $(inputTags[d]).log()
            console.log("%cFix:%cInput element's corresponding label's text has to be added",
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

