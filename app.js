var forcesCounter = 0;
var collaborationsCounter = 0;
var consequencesCounter = 0;
var implementationCounter = 0;
var knownCounter = 0;
var relatedCounter = 0;

var pageData = {
    patternName: "",
    problem: "",
    motivation: "",
    context: "",
    forces: [],
    solution: "",
    intent: "",
    collaborations: [],
    consequences: [],
    implementation: [],
    known: [],
    relatedPatterns: [],
}

function addEventListener(element, callback) {
    element.addEventListener("change", callback);
}

function initEventListener() {
    var patternName = document.getElementById("patternName");
    addEventListener(patternName, () => {
        pageData.patternName = patternName.value;
    });

    var problem = document.getElementById("problem");
    addEventListener(problem, () => {
        pageData.problem = problem.value;
    });

    var motivation = document.getElementById("motivation");
    addEventListener(motivation, () => {
        pageData.motivation = motivation.value;
    });

    var context = document.getElementById("context");
    addEventListener(context, () => {
        pageData.context = context.value;
    });


    var forces = document.getElementById("forces");
    pageData.forces.push("");
    addEventListener(forces, () => {
        pageData.forces[0] = forces.value;

    });

    var solution = document.getElementById("solution");
    addEventListener(solution, () => {
        pageData.solution = solution.value;
    });

    var intent = document.getElementById("intent");
    addEventListener(intent, () => {
        pageData.intent = intent.value;
    });

    var collaborations = document.getElementById("collaborations");
    pageData.collaborations.push("");
    addEventListener(collaborations, () => {
        pageData.collaborations[0] = collaborations.value;
    });

    var consequences = document.getElementById("consequences");
    pageData.consequences.push("");
    addEventListener(consequences, () => {
        pageData.consequences[0] = consequences.value;
    });

    var implementation = document.getElementById("implementation");
    pageData.implementation.push("");
    addEventListener(implementation, () => {
        pageData.implementation[0] = implementation.value;
    });

    var known = document.getElementById("known");
    pageData.known.push("");
    addEventListener(known, () => {
        pageData.known[0] = known.value;
    });

    var relatedPatterns = document.getElementById("relatedPatterns");
    pageData.relatedPatterns.push("");
    addEventListener(relatedPatterns, () => {
        pageData.relatedPatterns[0] = relatedPatterns.value;
    });
}

function createForcesButton() {
    if (forcesCounter == 9) {

    }
    else {
        var x = document.createElement("textarea");
        forcesCounter++;

        x.setAttribute("type", "text");
        x.setAttribute("value", "");
        x.setAttribute("rows", "2");
        x.setAttribute("cols", "25");
        x.setAttribute("class", "field");
        x.setAttribute("placeholder", "Enter Forces");
        x.setAttribute("maxLength", "1500");

        pageData.forces.push("");
        addEventListener(x, () => {
            pageData.forces[forcesCounter] = x.value;

        });

        var textwrap = document.getElementById("forces-wrap");
        textwrap.appendChild(x);


    }

}

function createCollaborationsButton() {
    if (collaborationsCounter == 9) {

    }
    else {
        var x = document.createElement("textarea");
        collaborationsCounter++;

        x.setAttribute("type", "text");
        x.setAttribute("value", "");
        x.setAttribute("rows", "2");
        x.setAttribute("cols", "25");
        x.setAttribute("class", "field");
        x.setAttribute("placeholder", "Enter Collaborations");
        x.setAttribute("maxLength", "1500");

        pageData.collaborations.push("");
        addEventListener(x, () => {
            pageData.collaborations[collaborationsCounter] = x.value;
        });

        var textwrap = document.getElementById("collaborations-wrap");
        textwrap.appendChild(x);
    }

}

function createConsequencesButton() {
    if (consequencesCounter == 9) {

    }
    else {
        var x = document.createElement("textarea");
        consequencesCounter++;

        x.setAttribute("type", "text");
        x.setAttribute("value", "");
        x.setAttribute("rows", "2");
        x.setAttribute("cols", "25");
        x.setAttribute("placeholder", "Enter Consequences");
        x.setAttribute("maxLength", "1500");

        pageData.consequences.push("");
        addEventListener(x, () => {
            pageData.consequences[consequencesCounter] = x.value;
        });

        var textwrap = document.getElementById("consequences-wrap");
        textwrap.appendChild(x);
    }

}

function createImplementationButton() {
    if (implementationCounter == 9) {

    }
    else {
        var x = document.createElement("textarea");
        implementationCounter++;

        x.setAttribute("type", "text");
        x.setAttribute("value", "");
        x.setAttribute("rows", "2");
        x.setAttribute("cols", "25");
        x.setAttribute("placeholder", "Enter Implementation");
        x.setAttribute("maxLength", "1500");

        pageData.implementation.push("");
        addEventListener(x, () => {
            pageData.implementation[implementationCounter] = x.value;
        });


        var textwrap = document.getElementById("implementation-wrap");
        textwrap.appendChild(x);

    }

}

function createKnownButton() {
    if (knownCounter == 9) {

    }
    else {
        var x = document.createElement("textarea");
        knownCounter++;

        x.setAttribute("type", "text");
        x.setAttribute("value", "");
        x.setAttribute("rows", "2");
        x.setAttribute("cols", "25");
        x.setAttribute("placeholder", "Enter Known Uses");
        x.setAttribute("maxLength", "1500");

        pageData.known.push("");
        addEventListener(x, () => {
            pageData.known[knownCounter] = x.value;
        });

        var textwrap = document.getElementById("known-wrap");
        textwrap.appendChild(x);
    }

}

function createRelatedPatternsButton() {
    if (relatedCounter == 9) {

    }
    else {
        var x = document.createElement("textarea");
        relatedCounter++;

        x.setAttribute("type", "text");
        x.setAttribute("value", "");
        x.setAttribute("rows", "2");
        x.setAttribute("cols", "25");
        x.setAttribute("placeholder", "Enter Related Patterns");
        x.setAttribute("maxLength", "1500");

        pageData.relatedPatterns.push("");
        addEventListener(x, () => {
            pageData.relatedPatterns[relatedCounter] = x.value;
        });


        var textwrap = document.getElementById("relatedPatterns-wrap");
        textwrap.appendChild(x);
    }

}

function deleteForcesButton() {
    if (forcesCounter != 0) {
        var element = document.getElementById("forces-wrap");
        if (element.children && element.children.length > 0)
            element.removeChild(element.children[element.children.length - 1]);
        pageData.forces.pop();
        forcesCounter--;
    }

}

function deleteCollaborationsButton() {
    if (collaborationsCounter != 0) {
        var element = document.getElementById("collaborations-wrap");
        if (element.children && element.children.length > 0)
            element.removeChild(element.children[element.children.length - 1]);
        pageData.collaborations.pop();
        collaborationsCounter--;
    }
}

function deleteConsequencesButton() {
    if (consequencesCounter != 0) {
        var element = document.getElementById("consequences-wrap");
        if (element.children && element.children.length > 0)
            element.removeChild(element.children[element.children.length - 1]);
        pageData.consequences.pop();
        consequencesCounter--;
    }
}

function deleteImplementationButton() {
    if (implementationCounter != 0) {
        var element = document.getElementById("implementation-wrap");
        if (element.children && element.children.length > 0)
            element.removeChild(element.children[element.children.length - 1]);
        pageData.implementation.pop();
        implementationCounter--;
    }
}

function deleteKnownButton() {
    if (knownCounter != 0) {
        var element = document.getElementById("known-wrap");
        if (element.children && element.children.length > 0)
            element.removeChild(element.children[element.children.length - 1]);
        pageData.known.pop();
        knownCounter--;
    }
}

function deleteRelatedPatterns() {
    if (relatedCounter != 0) {
        var element = document.getElementById("relatedPatterns-wrap");
        if (element.children && element.children.length > 0)
            element.removeChild(element.children[element.children.length - 1]);
        pageData.relatedPatterns.pop();
        relatedCounter--;
    }
}


function eraseText() {

    location.reload();

}

function addTable() {
    localStorage.setItem("formData", JSON.stringify(pageData));
}

function createTable() {
    var data = JSON.parse(localStorage.getItem("formData"))
    var csv = "";

    var table = document.createElement("table");
    table.border = 1;


    table.appendChild(addRow("Pattern Name", data.patternName));
    csv += "Pattern Name," + data.patternName + "\n";

    table.appendChild(addRow("Problem", data.problem));
    csv += "Problem," + data.problem + "\n";

    table.appendChild(addRow("Motivation", data.motivation));
    csv += "Motivation," + data.motivation + "\n";

    table.appendChild(addRow("Context", data.context));
    csv += "Context," + data.context + "\n";

    for (var i = 0; i < data.forces.length; i++) {

        if (i == 0) {
            table.appendChild(addRow("Forces", data.forces[i]));
            csv += "Forces," + data.forces[i];
        }
        else {
            table.appendChild(addRow("", data.forces[i]));
            csv += "," + data.forces[i];
        }

    }
    csv += "\n";

    table.appendChild(addRow("Solution", data.solution));
    csv += "Solution," + data.solution + "\n";

    table.appendChild(addRow("Intent", data.intent));
    csv += "Intent," + data.intent + "\n";

    for (var i = 0; i < data.collaborations.length; i++) {

        if (i == 0) {
            table.appendChild(addRow("Collaborations", data.collaborations[i]));
            csv += "Collaborations," + data.collaborations[i];
        }
        else {
            table.appendChild(addRow("", data.collaborations[i]));
            csv += "," + data.collaborations[i];
        }

    }
    csv += "\n";

    for (var i = 0; i < data.consequences.length; i++) {

        if (i == 0) {
            table.appendChild(addRow("Consequences", data.consequences[i]));
            csv += "Consequences," + data.consequences[i];
        }
        else {
            table.appendChild(addRow("", data.consequences[i]));
            csv += "," + data.consequences[i];
        }

    }
    csv += "\n";

    for (var i = 0; i < data.implementation.length; i++) {

        if (i == 0) {
            table.appendChild(addRow("Implementations", data.implementation[i]));
            csv += "Implementations," + data.implementation[i];
        }
        else {
            table.appendChild(addRow("", data.implementation[i]));
            csv += "," + data.implementation[i];
        }

    }
    csv += "\n";

    for (var i = 0; i < data.known.length; i++) {

        if (i == 0) {
            table.appendChild(addRow("Known Uses", data.known[i]));
            csv += "Known Uses," + data.known[i];
        }
        else {
            table.appendChild(addRow("", data.known[i]));
            csv += "," + data.known[i];
        }

    }
    csv += "\n";

    for (var i = 0; i < data.relatedPatterns.length; i++) {

        if (i == 0) {
            table.appendChild(addRow("Related Patterns", data.relatedPatterns[i]));
            csv += "Related Patterns," + data.relatedPatterns[i];
        }
        else {
            table.appendChild(addRow("", data.relatedPatterns[i]));
            csv += "," + data.relatedPatterns[i];
        }

    }

    document.getElementById("table-wrap").appendChild(table);

    downloadFile(csv);
}

function downloadFile(csv_data) {
    var CSVFile = new Blob([csv_data], { type: "text/csv" });
    var temp_link = document.createElement('a');

    temp_link.style.display = "none";
    document.body.appendChild(temp_link);

    document.body.removeChild(temp_link);

    temp_link.download = "table.csv";
    var url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;
    temp_link.click();

}

function addRow(title, value) {
    var label = document.createElement('TD');
    var field = document.createElement('TD');
    var tr = document.createElement('TR');

    label.innerHTML = title;
    field.innerHTML = value;
    tr.appendChild(label);
    tr.appendChild(field);

    return tr;
}