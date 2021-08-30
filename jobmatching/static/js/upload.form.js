SINGLE_TEXT_INPUT_GROUP = `
<div class="input-group">
    <div class="col-sm-10">
        <label for="name" class="col-sm-2 col-form-label">{0}</label>
        <input class="form-control" name="{1}"/>
    </div>
</div>
`

RADIO_CHECK_BOX = `
<div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="{0}" value="{1}" id="{0}{2}">
    <label class="form-check-label" for="{0}{2}">
        {1}
    </label>
</div>
`

TIME_RANGE_PICKER = `
<div class="row">
    <label for="name" class="col-sm-2 col-form-label">Time Period</label>
</div>
<div class="row">
    <div class="col-1">
        <span class="input-group-addon">From</span>
    </div>
    <div class="col-4">
        <input type="text" class="input-sm form-control datepicker" name="{0}" />
    </div>
    <div class="col-1" style="text-align: center">
        <span class="input-group-addon">To</span>
    </div>
    <div class="col-4">
        <input type="text" class="input-sm form-control datepicker" name="{0}" value="Present" />
    </div>
</div>
`


var work_experiences = 1;
var eductions = 1;
var skills = 1;
var languages = 1;
var certifications = 1;
var awards = 1;
var publicatiions = 1;

var parser = new DOMParser();

String.prototype.format = function() {
    a = this;
    for (k in arguments) {
        a = a.replaceAll("{" + k + "}", arguments[k])
    }

    return a 
}

$(document).on('focus',".datepicker", function(){
    $(this).datepicker({
        autoclose: true,
        format: "mm/yyyy",
        minViewMode: 1,
    });
});

function add_work_experience_func(e) {
    e.preventDefault();

    var work_experience_form = document.getElementById("work_experience_form");
    var form_name = `workExperience${work_experiences}`

    var doc = parser.parseFromString(
        `
        <div class="row no-gutters">
            <div class="card">
                <div class="card-subtitle mb-2 text-muted">Work Experience ${work_experiences}</div>
                <div class="card-body">
                    ${SINGLE_TEXT_INPUT_GROUP.format("Job Title", form_name)}
                    ${SINGLE_TEXT_INPUT_GROUP.format("Company", form_name)}
                    ${SINGLE_TEXT_INPUT_GROUP.format("Location", form_name)}
                    
                    <div class="row">
                        <label class="col-sm-2 col-form-label">Job Type</label>
                    </div>
                    <div class="row">
                        <div class="col">
                            ${RADIO_CHECK_BOX.format(form_name, "Full time", "_jobtype1")}
                            ${RADIO_CHECK_BOX.format(form_name, "Part time", "_jobtype2")}
                            ${RADIO_CHECK_BOX.format(form_name, "Contract", "_jobtype3")}
                            ${RADIO_CHECK_BOX.format(form_name, "Temporary", "_jobtype4")}
                            ${RADIO_CHECK_BOX.format(form_name, "Internship", "_jobtype5")}
                            ${RADIO_CHECK_BOX.format(form_name, "Commission", "_jobtype6")}
                            ${RADIO_CHECK_BOX.format(form_name, "Pre-employment Training", "_jobtype7")}
                        </div>
                    </div>

                    ${TIME_RANGE_PICKER.format(form_name)}
                    ${SINGLE_TEXT_INPUT_GROUP.format("Description", form_name)}
                </div>
            </div>
        </div>
        `, "text/html"
    );

    work_experience_form.append(doc.body);
    work_experiences++;
}

function remove_work_experience_func(e) {
    e.preventDefault();

    var work_experience_form = document.getElementById("work_experience_form");
    work_experience_form.lastChild.remove();
    work_experiences--;
}

function add_eduction_func(e) {
    e.preventDefault();

    var eduction_form = document.getElementById("eduction_form");
    var form_name = `eductions${eductions}`

    var doc = parser.parseFromString(
        `
        <p class="text-left">Eduction Background ${eductions}</p>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Current Enrolled?</span>
            </div>
            <label class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="Full time" name="${form_name}">
                Full time
                <input class="form-check-input me-1" type="checkbox" value="Part time" name="${form_name}">
                Part time
            </label>
        </div>


        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Level of Education </span>
            </div>
            <label class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="Full time" name="${form_name}">
                Some high school
                <input class="form-check-input me-1" type="checkbox" value="Part time" name="${form_name}">
                High school diploma
                <input class="form-check-input me-1" type="checkbox" value="Contract" name="${form_name}">
                High school certificate
                <input class="form-check-input me-1" type="checkbox" value="Temporary" name="${form_name}">
                Vocational school certificate or diploma
                <input class="form-check-input me-1" type="checkbox" value="Internshi" name="${form_name}">
                Associate's degree
                <input class="form-check-input me-1" type="checkbox" value="Commissio" name="${form_name}">
                Bachelor's degree
                <input class="form-check-input me-1" type="checkbox" value="Commissio" name="${form_name}">
                Master's degree
                <input class="form-check-input me-1" type="checkbox" value="Commissio" name="${form_name}">
                Doctorate/MD
            </label>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Other</span>
                </div>
                <input class="form-control" name="${form_name}"></textarea>
            </div>
        </div>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Degree</span>
            </div>
            <input class="form-control" name="${form_name}"></textarea>
        </div>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Major</span>
            </div>
            <input class="form-control" name="${form_name}"></textarea>
        </div>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">School Name</span>
            </div>
            <input class="form-control" name="${form_name}"></textarea>
        </div>

        <div class="input-group mb-3">
            <p class="text-left">Time Period</p>
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">From</span>
            </div>
            <input class="form-control" name="${form_name}"></textarea>
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">To</span>
            </div>
            <input class="form-control" name="${form_name}" value="Present"></textarea>
        </div>
        
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Major courses taken</span>
            </div>
            <input class="form-control" name="${form_name}" placeholder="Optional"></textarea>
        </div>
        `, "text/html"
    );
    eduction_form.append(doc.body);
    eductions++;
}

function remove_eduction_func(e) {
    e.preventDefault();

    var eduction_form = document.getElementById("eduction_form");
    eduction_form.lastChild.remove();
    eductions--;
}

function add_skills_func(e) {
    e.preventDefault();

    var skills_form = document.getElementById("skills_form");
    var form_name = `skills${skills}`

    var doc = parser.parseFromString(
        `
        <p class="text-left">Skills ${skills}</p>
        
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Skill Name</span>
            </div>
            <input class="form-control" name="${form_name}"></textarea>
        </div>

        
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Years of Experiencce</span>
            </div>
            <input class="form-control" name="${form_name}"></textarea>
        </div>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Level of experience</span>
            </div>
            <label class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="Beginner" name="${form_name}">
                Beginner
                <input class="form-check-input me-1" type="checkbox" value="Intermediate" name="${form_name}">
                Intermediate
                <input class="form-check-input me-1" type="checkbox" value="Proficient" name="${form_name}">
                Proficient
                <input class="form-check-input me-1" type="checkbox" value="Expert" name="${form_name}">
                Expert
            </label>
        </div>
        `, "text/html"
    );
    skills_form.append(doc.body);
    skills++;
}

function remove_skills_func(e) {
    e.preventDefault();

    var skills_form = document.getElementById("skills_form");
    skills_form.lastChild.remove();
    skills--;
}

function add_languages_func(e) {
    e.preventDefault();

    var languages_form = document.getElementById("languages_form");
    var form_name = `languages${languages}`

    var doc = parser.parseFromString(
        `
        <p class="text-left">Languages ${languages}</p>
        
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Language Name</span>
            </div>
            <input class="form-control" name="${form_name}"></textarea>
        </div>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Level of experience</span>
            </div>
            <label class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="Beginner" name="${form_name}">
                Beginner
                <input class="form-check-input me-1" type="checkbox" value="Intermediate" name="${form_name}">
                Intermediate
                <input class="form-check-input me-1" type="checkbox" value="Proficient" name="${form_name}">
                Proficient
                <input class="form-check-input me-1" type="checkbox" value="Expert" name="${form_name}">
                Expert
            </label>
        </div>
        `, "text/html"
    );
    languages_form.append(doc.body);
    languages++;
}

function remove_languages_func(e) {
    e.preventDefault();

    var languages_form = document.getElementById("languages_form");
    languages_form.lastChild.remove();
    languages--;
}

function add_certifications_func(e) {
    e.preventDefault();

    var certifications_form = document.getElementById("certifications_form");
    var form_name = `certifications${certifications}`

    var doc = parser.parseFromString(
        `
        <p class="text-left">Certifications ${certifications}</p>
        
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Title</span>
            </div>
            <input class="form-control" name="${form_name}"></textarea>
        </div>

        
        <div class="input-group mb-3">
            <p class="text-left">Time Period</p>
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">From</span>
            </div>
            <input class="form-control" name="${form_name}"></textarea>
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">To</span>
            </div>
            <input class="form-control" name="${form_name}" value="Present"></textarea>
        </div>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Description</span>
            </div>
            <input class="form-control" name="${form_name}"></textarea>
        </div>

        `, "text/html"
    );
    certifications_form.append(doc.body);
    certifications++;
}

function remove_certifications_func(e) {
    e.preventDefault();

    var certifications_form = document.getElementById("certifications_form");
    certifications_form.lastChild.remove();
    certifications--;
}

function add_awards_func(e) {
    e.preventDefault();

    var awards_form = document.getElementById("awards_form");
    var form_name = `awards${awards}`

    var doc = parser.parseFromString(
        `
        <p class="text-left">Awards ${certifications}</p>
        
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Title</span>
            </div>
            <input class="form-control" name="${form_name}"></textarea>
        </div>

        
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Time</span>
            </div>
            <input class="form-control" name="${form_name}"></textarea>
        </div>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Description</span>
            </div>
            <input class="form-control" name="${form_name}"></textarea>
        </div>

        `, "text/html"
    );
    awards_form.append(doc.body);
    awards++;
}

function remove_awards_func(e) {
    e.preventDefault();

    var awards_form = document.getElementById("awards_form");
    awards_form.lastChild.remove();
    awards--;
}

function add_publications_func(e) {
    e.preventDefault();

    var publications_form = document.getElementById("publications_form");
    var form_name = `publications${publicatiions}`

    var doc = parser.parseFromString(
        `
        <p class="text-left">Publications / Patents ${publicatiions}</p>
        
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Title</span>
            </div>
            <input class="form-control" name="${form_name}"></textarea>
        </div>

        
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Time</span>
            </div>
            <input class="form-control" name="${form_name}"></textarea>
        </div>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Description</span>
            </div>
            <input class="form-control" name="${form_name}"></textarea>
        </div>

        `, "text/html"
    );
    publications_form.append(doc.body);
    publicatiions++;
}

function remove_publicatiions_func(e) {
    e.preventDefault();

    var publications_form = document.getElementById("publications_form");
    publications_form.lastChild.remove();
    publicatiions--;
}
