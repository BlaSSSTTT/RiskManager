function selectAll11() {
    var1 = document.getElementById('tR1').checked;
    var2 = document.getElementById('tR2').checked;
    var3 = document.getElementById('tR3').checked;
    var4 = document.getElementById('tR4').checked;
    var5 = document.getElementById('tR5').checked;
    var6 = document.getElementById('tR6').checked;
    var7 = document.getElementById('tR7').checked;
    var8 = document.getElementById('tR8').checked;
    var9 = document.getElementById('tR9').checked;
    var10 = document.getElementById('tR10').checked;
    var11 = document.getElementById('tR11').checked;
    if(!var1 || !var2 || !var3 || !var4 || !var5 || !var6 || !var7 || !var8 || !var9 || !var10 || !var11) {
        document.getElementById('tR1').checked = true;
        document.getElementById('tR2').checked = true;
        document.getElementById('tR3').checked = true;
        document.getElementById('tR4').checked = true;
        document.getElementById('tR5').checked = true;
        document.getElementById('tR6').checked = true;
        document.getElementById('tR7').checked = true;
        document.getElementById('tR8').checked = true;
        document.getElementById('tR9').checked = true;
        document.getElementById('tR10').checked = true;
        document.getElementById('tR11').checked = true;
    } else if(var1 && var2 && var3 && var4 && var5 && var6 && var7&& var8 && var9 && var10 && var11) {
        document.getElementById('tR1').checked = false;
        document.getElementById('tR2').checked = false;
        document.getElementById('tR3').checked = false;
        document.getElementById('tR4').checked = false;
        document.getElementById('tR5').checked = false;
        document.getElementById('tR6').checked = false;
        document.getElementById('tR7').checked = false;
        document.getElementById('tR8').checked = false;
        document.getElementById('tR9').checked = false;
        document.getElementById('tR10').checked = false;
        document.getElementById('tR11').checked = false;
    }
    calculateRisks2();
}

function selectAll22() {
    var1 = document.getElementById('cR1').checked;
    var2 = document.getElementById('cR2').checked;
    var3 = document.getElementById('cR3').checked;
    var4 = document.getElementById('cR4').checked;
    var5 = document.getElementById('cR5').checked;
    var6 = document.getElementById('cR6').checked;
    var7 = document.getElementById('cR7').checked;
    var8 = document.getElementById('cR8').checked;
    var9 = document.getElementById('cR9').checked;
    if(!var1 || !var2 || !var3 || !var4 || !var5 || !var6 || !var7 || !var8 || !var9) {
        document.getElementById('cR1').checked = true;
        document.getElementById('cR2').checked = true;
        document.getElementById('cR3').checked = true;
        document.getElementById('cR4').checked = true;
        document.getElementById('cR5').checked = true;
        document.getElementById('cR6').checked = true;
        document.getElementById('cR7').checked = true;
        document.getElementById('cR8').checked = true;
        document.getElementById('cR9').checked = true;
    } else if(var1 && var2 && var3 && var4 && var5 && var6 && var7 && var8 && var9) {
        document.getElementById('cR1').checked = false;
        document.getElementById('cR2').checked = false;
        document.getElementById('cR3').checked = false;
        document.getElementById('cR4').checked = false;
        document.getElementById('cR5').checked = false;
        document.getElementById('cR6').checked = false;
        document.getElementById('cR7').checked = false;
        document.getElementById('cR8').checked = false;
        document.getElementById('cR9').checked = false;
    }
    calculateRisks2();
}

function selectAll33() {
    var1 = document.getElementById('pR1').checked;
    var2 = document.getElementById('pR2').checked;
    var3 = document.getElementById('pR3').checked;
    var4 = document.getElementById('pR4').checked;
    var5 = document.getElementById('pR5').checked;
    var6 = document.getElementById('pR6').checked;
    var7 = document.getElementById('pR7').checked;
    var8 = document.getElementById('pR8').checked;
    var9 = document.getElementById('pR9').checked;
    var10 = document.getElementById('pR10').checked;
    var11 = document.getElementById('pR11').checked;
    if(!var1 || !var2 || !var3 || !var4 || !var5 || !var6 || !var7 || !var8 || !var9 || !var10 || !var11) {
        document.getElementById('pR1').checked = true;
        document.getElementById('pR2').checked = true;
        document.getElementById('pR3').checked = true;
        document.getElementById('pR4').checked = true;
        document.getElementById('pR5').checked = true;
        document.getElementById('pR6').checked = true;
        document.getElementById('pR7').checked = true;
        document.getElementById('pR8').checked = true;
        document.getElementById('pR9').checked = true;
        document.getElementById('pR10').checked = true;
        document.getElementById('pR11').checked = true;
    } else if(var1 && var2 && var3 && var4 && var5 && var6 && var7 && var8 && var9 && var10 && var11) {
        document.getElementById('pR1').checked = false;
        document.getElementById('pR2').checked = false;
        document.getElementById('pR3').checked = false;
        document.getElementById('pR4').checked = false;
        document.getElementById('pR5').checked = false;
        document.getElementById('pR6').checked = false;
        document.getElementById('pR7').checked = false;
        document.getElementById('pR8').checked = false;
        document.getElementById('pR9').checked = false;
        document.getElementById('pR10').checked = false;
        document.getElementById('pR11').checked = false;
    }
    calculateRisks2();
}

function selectAll44() {
    var1 = document.getElementById('mR1').checked;
    var2 = document.getElementById('mR2').checked;
    var3 = document.getElementById('mR3').checked;
    var4 = document.getElementById('mR4').checked;
    var5 = document.getElementById('mR5').checked;
    var6 = document.getElementById('mR6').checked;
    var7 = document.getElementById('mR7').checked;
    var8 = document.getElementById('mR8').checked;
    var9 = document.getElementById('mR9').checked;
    var10 = document.getElementById('mR10').checked;
    var11 = document.getElementById('mR11').checked;
    var12 = document.getElementById('mR12').checked;
    var13 = document.getElementById('mR13').checked;
    var14 = document.getElementById('mR14').checked;
    var15 = document.getElementById('mR15').checked;
    var16 = document.getElementById('mR16').checked;
    if(!var1 || !var2 || !var3 || !var4 || !var5 || !var6 || !var7 || !var8 ||
       !var9 || !var10 || !var11 || !var12 || !var13 || !var14 || !var15 || !var16) {
        document.getElementById('mR1').checked = true;
        document.getElementById('mR2').checked = true;
        document.getElementById('mR3').checked = true;
        document.getElementById('mR4').checked = true;
        document.getElementById('mR5').checked = true;
        document.getElementById('mR6').checked = true;
        document.getElementById('mR7').checked = true;
        document.getElementById('mR8').checked = true;
        document.getElementById('mR9').checked = true;
        document.getElementById('mR10').checked = true;
        document.getElementById('mR11').checked = true;
        document.getElementById('mR12').checked = true;
        document.getElementById('mR13').checked = true;
        document.getElementById('mR14').checked = true;
        document.getElementById('mR15').checked = true;
        document.getElementById('mR16').checked = true;
    } else if(var1 && var2 && var3 && var4 && var5 && var6 && var7 && var8 && 
              var9 && var10 && var11 && var12 && var13 && var14 && var15 && var16) {
        document.getElementById('mR1').checked = false;
        document.getElementById('mR2').checked = false;
        document.getElementById('mR3').checked = false;
        document.getElementById('mR4').checked = false;
        document.getElementById('mR5').checked = false;
        document.getElementById('mR6').checked = false;
        document.getElementById('mR7').checked = false;
        document.getElementById('mR8').checked = false;
        document.getElementById('mR9').checked = false;
        document.getElementById('mR10').checked = false;
        document.getElementById('mR11').checked = false;
        document.getElementById('mR12').checked = false;
        document.getElementById('mR13').checked = false;
        document.getElementById('mR14').checked = false;
        document.getElementById('mR15').checked = false;
        document.getElementById('mR16').checked = false;
    }
    calculateRisks2();
}

function calculateRisks2() {
    t1 = document.getElementById('tR1').checked ? 1 : 0;
    t2 = document.getElementById('tR2').checked ? 1 : 0;
    t3 = document.getElementById('tR3').checked ? 1 : 0;
    t4 = document.getElementById('tR4').checked ? 1 : 0;
    t5 = document.getElementById('tR5').checked ? 1 : 0;
    t6 = document.getElementById('tR6').checked ? 1 : 0;
    t7 = document.getElementById('tR7').checked ? 1 : 0;
    t8 = document.getElementById('tR8').checked ? 1 : 0;
    t9 = document.getElementById('tR9').checked ? 1 : 0;
    t10 = document.getElementById('tR10').checked ? 1 : 0;
    t11 = document.getElementById('tR11').checked ? 1 : 0;
    
    c1 = document.getElementById('cR1').checked ? 1 : 0;
    c2 = document.getElementById('cR2').checked ? 1 : 0;
    c3 = document.getElementById('cR3').checked ? 1 : 0;
    c4 = document.getElementById('cR4').checked ? 1 : 0;
    c5 = document.getElementById('cR5').checked ? 1 : 0;
    c6 = document.getElementById('cR6').checked ? 1 : 0;
    c7 = document.getElementById('cR7').checked ? 1 : 0;
    c8 = document.getElementById('cR8').checked ? 1 : 0;
    c9 = document.getElementById('cR9').checked ? 1 : 0;
    
    p1 = document.getElementById('pR1').checked ? 1 : 0;
    p2 = document.getElementById('pR2').checked ? 1 : 0;
    p3 = document.getElementById('pR3').checked ? 1 : 0;
    p4 = document.getElementById('pR4').checked ? 1 : 0;
    p5 = document.getElementById('pR5').checked ? 1 : 0;
    p6 = document.getElementById('pR6').checked ? 1 : 0;
    p7 = document.getElementById('pR7').checked ? 1 : 0;
    p8 = document.getElementById('pR8').checked ? 1 : 0;
    p9 = document.getElementById('pR9').checked ? 1 : 0;
    p10 = document.getElementById('pR10').checked ? 1 : 0;
    p11 = document.getElementById('pR11').checked ? 1 : 0;
    
    m1 = document.getElementById('mR1').checked ? 1 : 0;
    m2 = document.getElementById('mR2').checked ? 1 : 0;
    m3 = document.getElementById('mR3').checked ? 1 : 0;
    m4 = document.getElementById('mR4').checked ? 1 : 0;
    m5 = document.getElementById('mR5').checked ? 1 : 0;
    m6 = document.getElementById('mR6').checked ? 1 : 0;
    m7 = document.getElementById('mR7').checked ? 1 : 0;
    m8 = document.getElementById('mR8').checked ? 1 : 0;
    m9 = document.getElementById('mR9').checked ? 1 : 0;
    m10 = document.getElementById('mR10').checked ? 1 : 0;
    m11 = document.getElementById('mR11').checked ? 1 : 0;
    m12 = document.getElementById('mR12').checked ? 1 : 0;
    m13 = document.getElementById('mR13').checked ? 1 : 0;
    m14 = document.getElementById('mR14').checked ? 1 : 0;
    m15 = document.getElementById('mR15').checked ? 1 : 0;
    m16 = document.getElementById('mR16').checked ? 1 : 0;

    var t = 0, c = 0, p = 0, m = 0, g = 0;
    t = ( t1 + t2 + t3 + t4 + t5 + t6 + t7 + t8 + t9 + t10 + t11) / 47;
    c = ( c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9 ) / 47;
    p = ( p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10 + p11) /47;
    m = ( m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + m10 + m11 + m12 + m13 + m14 + m15 + m16) /47;
    g = t + c + p + m;
    document.getElementById('tR-risk').innerHTML = (t * 100).toFixed(2) + '%';
    document.getElementById('cR-risk').innerHTML = (c * 100).toFixed(2) + '%';
    document.getElementById('pR-risk').innerHTML = (p * 100).toFixed(2) + '%';
    document.getElementById('mR-risk').innerHTML = (m * 100).toFixed(2) + '%';
    document.getElementById('generalR-risk').innerHTML = (g * 100).toFixed(2) + '%';

}

function setupCheckboxListeners() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', calculateRisks2);
    });
}

document.addEventListener('DOMContentLoaded', setupCheckboxListeners);