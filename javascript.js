function gantibackground()
{
    var ganti=document.getElementById('ganti');
    var button=document.getElementById('buttonbg');
    if(button.innerHTML=="background 2")
    {
        ganti.style.cssText="background-image: url(img/background2.jpg);";
        button.innerHTML="background 3";
    }
    else if(button.innerHTML=="background 3")
    {
        ganti.style.cssText="background-image: url(img/background3.jpg);";
        button.innerHTML="background 4";
    }
    else if(button.innerHTML=="background 4")
    {
        ganti.style.cssText="background-image: url(img/background4.jpg);";
        button.innerHTML="background 1";
    }
    else if(button.innerHTML=="background 1")
    {
        ganti.style.cssText="background-image: url(img/background1.jpg);";
        button.innerHTML="background 2";
    }
}

function welcome()
{
    alert("Selamat datang");
}

function loadXML(file)
{
    var xmlHttp;
    if(window.XMLHttpRequest)
    {
        //instansiasi untuk IE7+, FIrefox, Chrome, Opera, Safari
        xmlHttp=new XMLHttpRequest();
    }
    else
    {
        //Instansi untuk IE5, IE6
        xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlHttp.onreadystatechange=function()
    {
        if(xmlHttp.readyState==4 && xmlHttp.status==200)
        {
            var xml=xmlHttp.responseXML;
            bupati=xml.documentElement.getElementsByTagName("bupati");
            nama=bupati[0].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[0].getElementsByTagName("periode")[0].childNodes[0].nodeValue;

            document.getElementById("daftar1").innerHTML=nama;
            document.getElementById("daftar2").innerHTML=periode;

            nama=bupati[1].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[1].getElementsByTagName("periode")[0].childNodes[0].nodeValue;

            document.getElementById("daftar3").innerHTML=nama;
            document.getElementById("daftar4").innerHTML=periode;
            
            nama=bupati[2].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[2].getElementsByTagName("periode")[0].childNodes[0].nodeValue;

            document.getElementById("daftar5").innerHTML=nama;
            document.getElementById("daftar6").innerHTML=periode;
            
            nama=bupati[3].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[3].getElementsByTagName("periode")[0].childNodes[0].nodeValue;

            document.getElementById("daftar7").innerHTML=nama;
            document.getElementById("daftar8").innerHTML=periode;
            
            nama=bupati[4].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[4].getElementsByTagName("periode")[0].childNodes[0].nodeValue;

            document.getElementById("daftar9").innerHTML=nama;
            document.getElementById("daftar10").innerHTML=periode;
            
            nama=bupati[5].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[5].getElementsByTagName("periode")[0].childNodes[0].nodeValue;

            document.getElementById("daftar11").innerHTML=nama;
            document.getElementById("daftar12").innerHTML=periode;
            
            nama=bupati[6].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[6].getElementsByTagName("periode")[0].childNodes[0].nodeValue;

            document.getElementById("daftar13").innerHTML=nama;
            document.getElementById("daftar14").innerHTML=periode;
            
            nama=bupati[7].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[7].getElementsByTagName("periode")[0].childNodes[0].nodeValue;

            document.getElementById("daftar15").innerHTML=nama;
            document.getElementById("daftar16").innerHTML=periode;
            
            nama=bupati[8].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[8].getElementsByTagName("periode")[0].childNodes[0].nodeValue;

            document.getElementById("daftar17").innerHTML=nama;
            document.getElementById("daftar18").innerHTML=periode;
            
            nama=bupati[9].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[9].getElementsByTagName("periode")[0].childNodes[0].nodeValue;

            document.getElementById("daftar19").innerHTML=nama;
            document.getElementById("daftar20").innerHTML=periode;
            
            nama=bupati[10].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[10].getElementsByTagName("periode")[0].childNodes[0].nodeValue;

            document.getElementById("daftar21").innerHTML=nama;
            document.getElementById("daftar22").innerHTML=periode;
            
            nama=bupati[11].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[11].getElementsByTagName("periode")[0].childNodes[0].nodeValue;

            document.getElementById("daftar23").innerHTML=nama;
            document.getElementById("daftar24").innerHTML=periode;
            
            nama=bupati[12].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[12].getElementsByTagName("periode")[0].childNodes[0].nodeValue;

            document.getElementById("daftar25").innerHTML=nama;
            document.getElementById("daftar26").innerHTML=periode;
            
            nama=bupati[13].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[13].getElementsByTagName("periode")[0].childNodes[0].nodeValue;

            document.getElementById("daftar27").innerHTML=nama;
            document.getElementById("daftar28").innerHTML=periode;
            
            nama=bupati[14].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[14].getElementsByTagName("periode")[0].childNodes[0].nodeValue;

            document.getElementById("daftar29").innerHTML=nama;
            document.getElementById("daftar30").innerHTML=periode;
            
            nama=bupati[15].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[15].getElementsByTagName("periode")[0].childNodes[0].nodeValue;

            document.getElementById("daftar31").innerHTML=nama;
            document.getElementById("daftar32").innerHTML=periode;
            
            nama=bupati[16].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[16].getElementsByTagName("periode")[0].childNodes[0].nodeValue;

            document.getElementById("daftar33").innerHTML=nama;
            document.getElementById("daftar34").innerHTML=periode;
            
            nama=bupati[17].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[17].getElementsByTagName("periode")[0].childNodes[0].nodeValue;

            document.getElementById("daftar35").innerHTML=nama;
            document.getElementById("daftar36").innerHTML=periode;
            
            nama=bupati[18].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[18].getElementsByTagName("periode")[0].childNodes[0].nodeValue;

            document.getElementById("daftar37").innerHTML=nama;
            document.getElementById("daftar38").innerHTML=periode;
            
            nama=bupati[19].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[19].getElementsByTagName("periode")[0].childNodes[0].nodeValue;

            document.getElementById("daftar39").innerHTML=nama;
            document.getElementById("daftar40").innerHTML=periode;
            
            nama=bupati[20].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[20].getElementsByTagName("periode")[0].childNodes[0].nodeValue;

            document.getElementById("daftar41").innerHTML=nama;
            document.getElementById("daftar42").innerHTML=periode;
            
            nama=bupati[21].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[21].getElementsByTagName("periode")[0].childNodes[0].nodeValue;

            document.getElementById("daftar43").innerHTML=nama;
            document.getElementById("daftar44").innerHTML=periode;
            
            nama=bupati[22].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[22].getElementsByTagName("periode")[0].childNodes[0].nodeValue;

            document.getElementById("daftar45").innerHTML=nama;
            document.getElementById("daftar46").innerHTML=periode;

            nama=bupati[23].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[23].getElementsByTagName("periode")[0].childNodes[0].nodeValue;
        
            document.getElementById("daftar47").innerHTML=nama;
            document.getElementById("daftar48").innerHTML=periode;
            
            nama=bupati[24].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[24].getElementsByTagName("periode")[0].childNodes[0].nodeValue;

            document.getElementById("daftar49").innerHTML=nama;
            document.getElementById("daftar50").innerHTML=periode;
            
            nama=bupati[25].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[25].getElementsByTagName("periode")[0].childNodes[0].nodeValue;

            document.getElementById("daftar51").innerHTML=nama;
            document.getElementById("daftar52").innerHTML=periode;
            
            nama=bupati[26].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[26].getElementsByTagName("periode")[0].childNodes[0].nodeValue;

            document.getElementById("daftar53").innerHTML=nama;
            document.getElementById("daftar54").innerHTML=periode;
            
            nama=bupati[27].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[27].getElementsByTagName("periode")[0].childNodes[0].nodeValue;

            document.getElementById("daftar55").innerHTML=nama;
            document.getElementById("daftar56").innerHTML=periode;
            
            nama=bupati[28].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[28].getElementsByTagName("periode")[0].childNodes[0].nodeValue;

            document.getElementById("daftar57").innerHTML=nama;
            document.getElementById("daftar58").innerHTML=periode;
            
            nama=bupati[29].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
            periode=bupati[29].getElementsByTagName("periode")[0].childNodes[0].nodeValue;
            
            document.getElementById("daftar59").innerHTML=nama;
            document.getElementById("daftar60").innerHTML=periode;    
        }
    }

    xmlHttp.open("GET",file,true);
    xmlHttp.send("");
}