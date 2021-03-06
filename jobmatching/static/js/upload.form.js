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
        <div class="row no-gutters">
            <div class="card">
                <div class="card-subtitle mb-2 text-muted">Eduction Background ${eductions}</div>
                <div class="card-body">
                    <div class="input-group">
                        <div class="col-sm-10">
                            <label for="name" class="col-sm-2 col-form-label">Current Enrolled?</label>
                            <label class="list-group-item">
                            <input class="form-check-input me-1" type="checkbox" value="Full time" name="${form_name}">
                            Full time
                            <input class="form-check-input me-1" type="checkbox" value="Part time" name="${form_name}">
                            Part time
                        </label>
                        </div>
                    </div>

                    <div class="row">
                        <label class="col-sm-2 col-form-label">Level of Education</label>
                    </div>
                    <div class="row">
                        <div class="col">
                            ${RADIO_CHECK_BOX.format(form_name, "Some high school", "_edulevel1")}
                            ${RADIO_CHECK_BOX.format(form_name, "High school diploma", "_edulevel2")}
                            ${RADIO_CHECK_BOX.format(form_name, "High school certificate", "_edulevel3")}
                            ${RADIO_CHECK_BOX.format(form_name, "Vocational school certificate or diploma", "_edulevel4")}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            ${RADIO_CHECK_BOX.format(form_name, "Associate's degree", "_edulevel5")}
                            ${RADIO_CHECK_BOX.format(form_name, "Bachelor's degree", "_edulevel6")}
                            ${RADIO_CHECK_BOX.format(form_name, "Master's degree", "_edulevel7")}
                            ${RADIO_CHECK_BOX.format(form_name, "Doctorate/MD", "_edulevel8")}
                            ${RADIO_CHECK_BOX.format(form_name, "Other", "_edulevel9")}
                        </div>
                    </div>

                    ${SINGLE_TEXT_INPUT_GROUP.format("Degree", form_name)}
                    ${SINGLE_TEXT_INPUT_GROUP.format("Major", form_name)}
                    ${SINGLE_TEXT_INPUT_GROUP.format("School Name", form_name)}

                    ${TIME_RANGE_PICKER.format(form_name)}
                    ${SINGLE_TEXT_INPUT_GROUP.format("Major courses taken", form_name)}
                </div>
            </div>
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
        <div class="row no-gutters">
        <div class="card">
            <div class="card-subtitle mb-2 text-muted">Skills ${skills}</div>
            <div class="card-body">
        
                ${SINGLE_TEXT_INPUT_GROUP.format("Skill Name", form_name)}
                ${SINGLE_TEXT_INPUT_GROUP.format("Year of Experience", form_name)}

                <div class="row">
                    <label class="col-sm-2 col-form-label">Level of Experience</label>
                </div>
                <div class="row">
                    <div class="col">
                        ${RADIO_CHECK_BOX.format(form_name, "Beginner", "_explevel1")}
                        ${RADIO_CHECK_BOX.format(form_name, "Intermediate", "_explevel2")}
                        ${RADIO_CHECK_BOX.format(form_name, "Proficient", "_explevel3")}
                        ${RADIO_CHECK_BOX.format(form_name, "Expert", "_explevel4")}
                    </div>
                </div>
            </div>
        </div>
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
        <div class="row no-gutters">
        <div class="card">
            <div class="card-subtitle mb-2 text-muted">Languages ${languages}</div>
            <div class="card-body">
                ${SINGLE_TEXT_INPUT_GROUP.format("Language Name", form_name)}

                <div class="row">
                    <label class="col-sm-2 col-form-label">Level of Experience</label>
                </div>
                <div class="row">
                    <div class="col">
                        ${RADIO_CHECK_BOX.format(form_name, "Beginner", "_languageexplevel1")}
                        ${RADIO_CHECK_BOX.format(form_name, "Intermediate", "_languageexplevel2")}
                        ${RADIO_CHECK_BOX.format(form_name, "Proficient", "_languageexplevel3")}
                        ${RADIO_CHECK_BOX.format(form_name, "Expert", "_languageexplevel4")}
                    </div>
                </div>
            </div>
        </div>
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
        <div class="row no-gutters">
        <div class="card">
            <div class="card-subtitle mb-2 text-muted">Certifications ${certifications}</div>
            <div class="card-body">
                ${SINGLE_TEXT_INPUT_GROUP.format("Title", form_name)}
                ${TIME_RANGE_PICKER.format(form_name)}
                ${SINGLE_TEXT_INPUT_GROUP.format("Description", form_name)}
            </div>
        </div>
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
        <div class="row no-gutters">
        <div class="card">
            <div class="card-subtitle mb-2 text-muted">Awards ${awards}</div>
            <div class="card-body">
                ${SINGLE_TEXT_INPUT_GROUP.format("Title", form_name)}
                ${SINGLE_TEXT_INPUT_GROUP.format("Time", form_name)}
                ${SINGLE_TEXT_INPUT_GROUP.format("Description", form_name)}
            </div>
        </div>
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
        <div class="row no-gutters">
        <div class="card">
            <div class="card-subtitle mb-2 text-muted">Publications / Patents ${publicatiions}</div>
            <div class="card-body">
                ${SINGLE_TEXT_INPUT_GROUP.format("Title", form_name)}
                ${SINGLE_TEXT_INPUT_GROUP.format("Time", form_name)}
                ${SINGLE_TEXT_INPUT_GROUP.format("Description", form_name)}
            </div>
        </div>
        </div>
        `, "text/html"
    );
    publications_form.append(doc.body);
    publicatiions++;
}

function remove_publications_func(e) {
    e.preventDefault();

    var publications_form = document.getElementById("publications_form");
    publications_form.lastChild.remove();
    publicatiions--;
}
