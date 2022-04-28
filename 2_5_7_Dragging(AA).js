setTimeout(() => {
    Dragging()
}, 16000);

function Dragging() {
    $.fn.log = function () {
        console.log.apply(console, this);
        return this;
    };
    var allTags = document.querySelectorAll('*')
    // draggable : true false
    // oncontextmenu : null 
    // onfocus: null
    // ondrag, ondragend, ondragenter, ondragleave, ondragover, ondragstart, ondrop
    // onkeydown, onkeyup, onkeypress
    // onmouseup, onmouseover, onmousedown, onmousemove, onmouseleave, onmouseenter, onmousewheel
    // onpointercancel, onpointerdown, onpointerenter, onpointerleave, onpointermove, onpointerout, 
    // onpointerover, onpointerup
    // $(document).ready(function () {
    //     $('*').each(function () {
    //         if($(this).is('.ui-draggable') || $(this).data("uiDraggable") || $(this).data("fooable"))
    //         {
    //             console.log("%cRule:%cWCAG 2.5.7 (2.2,AA)",
    //             `color: #FFF;
    //                 background-color: #333;
    //                 border-radius: 5px 0px 0px 5px;
    //                 padding: 5px 10px;
    //                 font-size: 0.8rem;
    //                 display: inline;
    //                 box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
    //             `color: #FFF;
    //                 display: inline;
    //                 font-size: 0.8rem;
    //                 background-color: #809FFF;
    //                 border-radius: 0px 5px 5px 0px;
    //                 padding: 5px 10px;
    //                 box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
    //         console.log("%cError:%cOther non-pointer options for this draggable element are missing",
    //             `color: #FFF;
    //                 background-color: #333;
    //                 border-radius: 5px 0px 0px 5px;
    //                 padding: 5px 10px;
    //                 font-size: 0.8rem;
    //                 display: inline;
    //                 box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
    //             `color: #FFF;
    //                 display: inline;
    //                 font-size: 0.8rem;
    //                 background-color: #EB5177;
    //                 border-radius: 0px 5px 5px 0px;
    //                 padding: 5px 10px;
    //                 box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
    //         console.log("%cCode Snippet:",
    //             `color: #FFF;
    //                                 background-color: #333;
    //                                 border-radius: 5px;
    //                                 padding: 5px 10px;
    //                                 font-size: 0.8rem;
    //                                 display: inline;
    //                                 box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
    //         $(this).log()
    //         console.log("%cFix:%cDragabble elements(true) should have other non-pointer options. Add them",
    //             `color: #FFF;
    //                 background-color: #333;
    //                 border-radius: 5px 0px 0px 5px;
    //                 padding: 5px 10px;
    //                 font-size: 0.8rem;
    //                 display: inline;
    //                 box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
    //             `color: #FFF;
    //                 display: inline;
    //                 font-size: 0.8rem;
    //                 background-color: #007075;
    //                 border-radius: 0px 5px 5px 0px;
    //                 padding: 5px 10px;
    //                 box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
    //         console.log("%c-----------------------------------------------------------------------------",
    //             `color: #FFF;
    //                 background-color: #293543;
    //                 font-weight: bolder;
    //                 border-radius: 5px;
    //                 padding: 5px 10px;
    //                 font-size: 1rem;
    //                 display: inline;`)

    //         }


    //     })
    // })
    for (var d = 0; d < allTags.length; d++) {
        var element = allTags[d]
        if (allTags[d].nodeName != "HTML" &&
            allTags[d].nodeName != "BASE" &&
            allTags[d].nodeName != "TITLE" &&
            allTags[d].nodeName != "SCRIPT" &&
            allTags[d].nodeName != "STYLE" &&
            allTags[d].nodeName != "HEAD" &&
            allTags[d].nodeName != "META") {
            if (element.draggable == true) {
                if (element.oncontextmenu == null && element.onfocus == null) {
                    console.log("%cRule:%cWCAG 2.5.7 (2.2,AA)",
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
                    console.log("%cError:%cOther non-pointer options for this draggable element are missing",
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
                    $(allTags[d]).log()
                    console.log("%cFix:%cDragabble elements(true) should have other non-pointer options. Add them",
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
            // else {
            //     if (element.ondrag != null || element.onpointercancel != null || element.onpointerdown != null ||
            //         element.ondragend != null || element.onpointerenter != null || element.onpointerleave != null ||
            //         element.ondragenter != null || element.onpointermove != null || element.onpointerout != null ||
            //         element.ondragleave != null || element.onpointerover != null || element.onpointerup != null ||
            //         element.ondragover != null || element.ondragstart != null || element.ondrop != null ||
            //         element.onkeydown != null || element.onkeyup != null || element.onkeypress != null ||
            //         element.onmouseup != null || element.onmouseover != null || element.onmousedown != null ||
            //         element.onmouseleave != null || element.onenter != null || element.onmousewheel != null) {
            //         if (element.oncontextmenu == null || element.onfocus == null) {
            //             console.log("%cRule:%cWCAG 2.5.7 (2.2,AA)",
            //                 `color: #FFF;
            //                     background-color: #333;
            //                     border-radius: 5px 0px 0px 5px;
            //                     padding: 5px 10px;
            //                     font-size: 0.8rem;
            //                     display: inline;
            //                     box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
            //                 `color: #FFF;
            //                     display: inline;
            //                     font-size: 0.8rem;
            //                     background-color: #809FFF;
            //                     border-radius: 0px 5px 5px 0px;
            //                     padding: 5px 10px;
            //                     box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            //             console.log("%cError:%cOther non-pointer options for this draggable element are missing",
            //                 `color: #FFF;
            //                     background-color: #333;
            //                     border-radius: 5px 0px 0px 5px;
            //                     padding: 5px 10px;
            //                     font-size: 0.8rem;
            //                     display: inline;
            //                     box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
            //                 `color: #FFF;
            //                     display: inline;
            //                     font-size: 0.8rem;
            //                     background-color: #EB5177;
            //                     border-radius: 0px 5px 5px 0px;
            //                     padding: 5px 10px;
            //                     box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            //             console.log("%cCode Snippet:",
            //                 `color: #FFF;
            //                                     background-color: #333;
            //                                     border-radius: 5px;
            //                                     padding: 5px 10px;
            //                                     font-size: 0.8rem;
            //                                     display: inline;
            //                                     box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            //             $(allTags[d]).log()
            //             console.log("%cFix:%cDragabble elements should have other non-pointer options. Add them",
            //                 `color: #FFF;
            //                     background-color: #333;
            //                     border-radius: 5px 0px 0px 5px;
            //                     padding: 5px 10px;
            //                     font-size: 0.8rem;
            //                     display: inline;
            //                     box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
            //                 `color: #FFF;
            //                     display: inline;
            //                     font-size: 0.8rem;
            //                     background-color: #007075;
            //                     border-radius: 0px 5px 5px 0px;
            //                     padding: 5px 10px;
            //                     box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            //             console.log("%c-----------------------------------------------------------------------------",
            //                 `color: #FFF;
            //                     background-color: #293543;
            //                     font-weight: bolder;
            //                     border-radius: 5px;
            //                     padding: 5px 10px;
            //                     font-size: 1rem;
            //                     display: inline;`)
            //         }
            //     }
            // }
        }

    }
}

