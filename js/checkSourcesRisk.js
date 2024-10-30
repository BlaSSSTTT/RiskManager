function selectAll1() {
    var1 = document.getElementById('tRS1').checked;
    var2 = document.getElementById('tRS2').checked;
    var3 = document.getElementById('tRS3').checked;
    var4 = document.getElementById('tRS4').checked;
    var5 = document.getElementById('tRS5').checked;
    var6 = document.getElementById('tRS6').checked;
    var7 = document.getElementById('tRS7').checked;
    if(!var1 || !var2 || !var3 || !var4 || !var5 || !var6 || !var7) {
        document.getElementById('tRS1').checked = true;
        document.getElementById('tRS2').checked = true;
        document.getElementById('tRS3').checked = true;
        document.getElementById('tRS4').checked = true;
        document.getElementById('tRS5').checked = true;
        document.getElementById('tRS6').checked = true;
        document.getElementById('tRS7').checked = true;
    } else if(var1 && var2 && var3 && var4 && var5 && var6 && var7) {
        document.getElementById('tRS1').checked = false;
        document.getElementById('tRS2').checked = false;
        document.getElementById('tRS3').checked = false;
        document.getElementById('tRS4').checked = false;
        document.getElementById('tRS5').checked = false;
        document.getElementById('tRS6').checked = false;
        document.getElementById('tRS7').checked = false;
    }
    calculateRisks();
}

function selectAll2() {
    var1 = document.getElementById('cRS1').checked;
    var2 = document.getElementById('cRS2').checked;
    var3 = document.getElementById('cRS3').checked;
    if(!var1 || !var2 || !var3) {
        document.getElementById('cRS1').checked = true;
        document.getElementById('cRS2').checked = true;
        document.getElementById('cRS3').checked = true;
    } else if(var1 && var2 && var3) {
        document.getElementById('cRS1').checked = false;
        document.getElementById('cRS2').checked = false;
        document.getElementById('cRS3').checked = false;
    }
    calculateRisks();
}

function selectAll3() {
    var1 = document.getElementById('pRS1').checked;
    var2 = document.getElementById('pRS2').checked;
    var3 = document.getElementById('pRS3').checked;
    if(!var1 || !var2 || !var3) {
        document.getElementById('pRS1').checked = true;
        document.getElementById('pRS2').checked = true;
        document.getElementById('pRS3').checked = true;
    } else if(var1 && var2 && var3) {
        document.getElementById('pRS1').checked = false;
        document.getElementById('pRS2').checked = false;
        document.getElementById('pRS3').checked = false;
    }
    calculateRisks();
}

function selectAll4() {
    var1 = document.getElementById('mRS1').checked;
    var2 = document.getElementById('mRS2').checked;
    var3 = document.getElementById('mRS3').checked;
    var4 = document.getElementById('mRS4').checked;
    var5 = document.getElementById('mRS5').checked;
    if(!var1 || !var2 || !var3 || !var4 || !var5) {
        document.getElementById('mRS1').checked = true;
        document.getElementById('mRS2').checked = true;
        document.getElementById('mRS3').checked = true;
        document.getElementById('mRS4').checked = true;
        document.getElementById('mRS5').checked = true;
    } else if(var1 && var2 && var3 && var4 && var5) {
        document.getElementById('mRS1').checked = false;
        document.getElementById('mRS2').checked = false;
        document.getElementById('mRS3').checked = false;
        document.getElementById('mRS4').checked = false;
        document.getElementById('mRS5').checked = false;
    }
    calculateRisks();
}

function calculateRisks() {
    t1 = document.getElementById('tRS1').checked ? 1 : 0;
    t2 = document.getElementById('tRS2').checked ? 1 : 0;
    t3 = document.getElementById('tRS3').checked ? 1 : 0;
    t4 = document.getElementById('tRS4').checked ? 1 : 0;
    t5 = document.getElementById('tRS5').checked ? 1 : 0;
    t6 = document.getElementById('tRS6').checked ? 1 : 0;
    t7 = document.getElementById('tRS7').checked ? 1 : 0;
    
    c1 = document.getElementById('cRS1').checked ? 1 : 0;
    c2 = document.getElementById('cRS2').checked ? 1 : 0;
    c3 = document.getElementById('cRS3').checked ? 1 : 0;
    
    p1 = document.getElementById('pRS1').checked ? 1 : 0;
    p2 = document.getElementById('pRS2').checked ? 1 : 0;
    p3 = document.getElementById('pRS3').checked ? 1 : 0;
    
    m1 = document.getElementById('mRS1').checked ? 1 : 0;
    m2 = document.getElementById('mRS2').checked ? 1 : 0;
    m3 = document.getElementById('mRS3').checked ? 1 : 0;
    m4 = document.getElementById('mRS4').checked ? 1 : 0;
    m5 = document.getElementById('mRS5').checked ? 1 : 0;

    var t = 0, c = 0, p = 0, m = 0, g = 0;
    t = ( t1 + t2 + t3 + t4 + t5 + t6 + t7 ) / 18;
    c = ( c1 + c2 + c3 ) / 18;
    p = ( p1 + p2 + p3 ) /18;
    m = ( m1 + m2 + m3 + m4 + m5) /18;
    g = t + c + p + m;
    document.getElementById('tRS-risk').innerHTML = (t * 100).toFixed(2) + '%';
    document.getElementById('cRS-risk').innerHTML = (c * 100).toFixed(2) + '%';
    document.getElementById('pRS-risk').innerHTML = (p * 100).toFixed(2) + '%';
    document.getElementById('mRS-risk').innerHTML = (m * 100).toFixed(2) + '%';
    document.getElementById('generalRS-risk').innerHTML = (g * 100).toFixed(2) + '%';

}

function setupCheckboxListeners() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', calculateRisks);
    });
}

document.addEventListener('DOMContentLoaded', setupCheckboxListeners);