function salaryCalculator() {
    var name = document.getElementById("name").value;
    var empId = document.getElementById("empId").value;
    var basic = document.getElementById("basic").value;
    var specialAllowances = document.getElementById("specialAllowances").value;
    var bonus = document.getElementById("bonus").value;
    var taxSavingInvestments = document.getElementById("taxSavingInvestments").value;
    var grossMonthlySalary = parseInt(basic) + parseInt(specialAllowances);
    var annualSalary = grossMonthlySalary * 12;
    var grossAnnualSalary = annualSalary + parseInt(bonus);
    var annualNetSalary = grossAnnualSalary;
    var taxPayable = 0;
    if (annualSalary > 1000000) {
        taxPayable = (annualSalary - 1000000) * 0.3;
        annualNetSalary = annualNetSalary - taxPayable;
    }
    if (annualSalary > 500000) {
        taxPayable = (annualSalary - 500000) * 0.2;
        annualNetSalary = annualNetSalary - taxPayable;
    }
    if (annualSalary > 250000) {
        taxPayable = (annualSalary - 250000) * 0.05;
        annualNetSalary = annualNetSalary - taxPayable;
    }
    if (taxSavingInvestments > 150000) {
        taxPayable = taxPayable - 150000;
        annualNetSalary = annualNetSalary - 150000;
    }
    document.getElementById("grossMonthlySalary").innerHTML = grossMonthlySalary;
    document.getElementById("annualSalary").innerHTML = annualSalary;
    document.getElementById("grossAnnualSalary").innerHTML = grossAnnualSalary;
    document.getElementById("annualNetSalary").innerHTML = annualNetSalary;
    document.getElementById("taxPayable").innerHTML = taxPayable;
    document.getElementById("result").style.display = "block";
}