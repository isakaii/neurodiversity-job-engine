var work_experiences = 1;
var eductions = 1;
var parser = new DOMParser();

function add_work_experience_func(e) {
    e.preventDefault();

    var work_experience_form = document.getElementById("work_experience_form");
    var form_name = `workExperience${work_experiences}`

    var doc = parser.parseFromString(
        `
        <p class="text-left">Work Experience ${work_experiences}</p>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Job Title</span>
            </div>
            <input class="form-control" name="${form_name}"></textarea>
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Company</span>
            </div>
            <input class="form-control" name="${form_name}"></textarea>
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Location</span>
            </div>
            <input class="form-control" name="${form_name}"></textarea>
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Job type</span>
            </div>
            <label class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="Full time" name="${form_name}">
                Full time
                <input class="form-check-input me-1" type="checkbox" value="Part time" name="${form_name}">
                Part time
                <input class="form-check-input me-1" type="checkbox" value="Contract" name="${form_name}">
                Contract
                <input class="form-check-input me-1" type="checkbox" value="Temporary" name="${form_name}">
                Temporary
                <input class="form-check-input me-1" type="checkbox" value="Internshi" name="${form_name}">
                Internshi
                <input class="form-check-input me-1" type="checkbox" value="Commissio" name="${form_name}">
                Commission
                <input class="form-check-input me-1" type="checkbox" value="Commissio" name="${form_name}">
                Pre-employment training
            </label>
            
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
        </div>`, "text/html"
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
