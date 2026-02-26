document.getElementById("userForm").addEventListener("submit", function(e) {
    // CLOSE REFRESH PAGE OF WEBSITE
    e.preventDefault();
    // alert("Form submitted successfully!");
    var fullname = document.getElementById("fullname").value;
    var gender = document.querySelector("input[name='gender']:checked").value;
    var salary = document.getElementById("salary").value;
    var dob = document.getElementById("dob").value;
    var position = document.getElementById("position").value;
    var description = document.getElementById("description").value;
    var currency = Number(salary).toLocaleString("en-US",{
    style:"currency",
    currency:"USD"
    });
    
    document.getElementById("result").innerHTML = `
    <div class="alert alert-success">
        <button type="button" class="btn-close position-absolute top-0 end-0 m-3" data-bs-dismiss="alert"></button>
        <h5 class="text-primary">Submit Result Information</h5>
        <P><strong>FullName      :</strong> ${fullname}</P>
        <P><strong>Gender        :</strong> ${gender}</P>
        <P><strong>Salary        :</strong> ${currency}</P>
        <P><strong>Date of Birth :</strong> ${dob}</P>
        <P><strong>Position      :</strong> ${position}</P>
        <P><strong>Description   :</strong> ${description}</P>
    </div>
    `;
    

});


