<!DOCTYPE html>
<html>
  <head>
    <link rel="shortcut icon" href="img/logo.png">
    <title>Pemerintah Kabupaten Kudus - Portal Informasi Resmi</title>

    <link rel="stylesheet" type="text/css" href="style.css" media="all">
    <link rel="stylesheet" type="text/css" href="responsive.css" media="all">
    <script src="javascript.js"></script>
  </head>
  <body onload="welcome()" id="ganti">
  <div class="user">
      <b>
        <?php
        {
            echo"Username: ".$_GET['nama']. "</br>";
            echo"Email: ".$_GET['email']. "</br>";
        }
        ?>
    </b>
    </div>
    <section id="container">
        <header id="header-portal">
            <div class="logo">
            <a href="index.html">
                <img id="logo-portal" src="img/logo-portal-2.png" alt="Pemerintah Kabupaten Kudus">
            </a>
            </div>
        </header>
        <main id="main-portal">
            <div id="menu-box">
                <a href="#" class="box">
                    <div class="box-icon2">
                        <img class="full" width="150px" src="img/1.png" alt="Informasi Pajak & Retribusi">
                    </div>
                    <div class="box-text-icon">
                        Informasi Pajak & Retribusi
                    </div>
                </a>
                <a href="#" class="box">
                    <div class="box-icon2">
                        <img class="full" width="150px" src="img/2.png" alt="Seleksi CPNS 2018">
                    </div>
                    <div class="box-text-icon">
                        Seleksi CPNS 2018
                    </div>
                </a>

                <a href="#/" class="box">
                    <div class="box-icon2">
                        <img class="full" width="150px" src="img/3.png" alt="LPSE">
                    </div>
                    <div class="box-text-icon">
                            LPSE
                    </div>
                </a>

                <a href="#" class="box">
                    <div class="box-icon2">
                        <img class="full" width="150px" src="img/4.png" alt="Layanan Perijinan">
                    </div>
                    <div class="box-text-icon">
                         Layanan Perijinan
                    </div>
                </a>

                <a href="#" class="box">
                    <div class="box-icon2">
                        <img class="full" width="150px" src="img/5.png" alt="Government Public Relations">
                    </div>
                    <div class="box-text-icon">
                        Government Public Relations
                    </div>
                </a>

                <a href="#" class="box">
                    <div class="box-icon2">
                            <img class="full" width="150px" src="img/6.png" alt="PPID">
                    </div>
                    <div class="box-text-icon">
                        PPID
                    </div>               
                </a>

                <a href="#" class="box">
                    <div class="box-icon2">
                        <img class="full" width="150px" src="img/7.png" alt="Informasi Keuangan">
                    </div>
                    <div class="box-text-icon">
                        Informasi Keuangan
                        </div>
                </a>
            
                <a href="#" class="box">
                    <div class="box-icon2">
                        <img class="full" width="150px" src="img/8.png" alt="Peta Digital">
                    </div>
                    <div class="box-text-icon">
                        Peta Digital
                    </div>
                </a>
                
                <a href="#" class="box">
                    <div class="box-icon2">
                        <img class="full" width="150px" src="img/9.png" alt="Statistik Kab. Kudus">
                    </div>
                    <div class="box-text-icon">
                        Statistik Kab. Kudus
                    </div>
                </a>
        
                <a href="#" class="box">
                    <div class="box-icon2">
                        <img class="full" width="150px" src="img/10.png" alt="Pelayanan Kesehatan">
                    </div>
                    <div class="box-text-icon">
                        Pelayanan Kesehatan
                    </div>
                </a>
        
                <a href="#" class="box">
                    <div class="box-icon2">
                        <img class="full" width="150px" src="img/11.png" alt="News">
                    </div>
                    <div class="box-text-icon">
                        News
                    </div>
                </a>
        
                <a href="#" class="box">
                    <div class="box-icon2">
                        <img class="full" width="150px" src="img/12.png" alt="Open Data">
                    </div>
                    <div class="box-text-icon">
                        Open Data
                    </div>
                </a>

                <a href="#" class="box">
                    <div class="box-icon2">
                        <img class="full" width="150px" src="img/13.png" alt="Tampilan Penuh">
                    </div>
                    <div class="box-text-icon">
                        Tampilan Penuh
                    </div>
                </a>
            </div>  
        </main>
        <center>
        <a href="javascript:loadXML('ajax.xml')" class="box">
            <div class="box-icon2">
                <img class="full" width="150px" src="img/14.png" alt="Tampilan Penuh">
            </div>
            <div class="box-text-icon">
                Daftar Bupati
            </div>
        </a>
        <div class="xml">
            <b>
                <div id="daftar1"></div>
                <div id="daftar2"></div>
                <br>
                <div id="daftar3"></div>
                <div id="daftar4"></div>
                <br>
                
                <div id="daftar5"></div>
                <div id="daftar6"></div>
                <br>
                
                <div id="daftar7"></div>
                <div id="daftar8"></div>
                <br>
                
                <div id="daftar9"></div>
                <div id="daftar10"></div>
                <br>
                
                <div id="daftar11"></div>
                <div id="daftar12"></div>
                <br>
                
                <div id="daftar13"></div>
                <div id="daftar14"></div>
                <br>
                
                <div id="daftar15"></div>
                <div id="daftar16"></div>
                <br>
                
                <div id="daftar17"></div>
                <div id="daftar18"></div>
                <br>
                
                <div id="daftar19"></div>
                <div id="daftar20"></div>
                <br>
                
                <div id="daftar21"></div>
                <div id="daftar22"></div>
                <br>
                
                <div id="daftar23"></div>
                <div id="daftar24"></div>
                <br>
                
                <div id="daftar25"></div>
                <div id="daftar26"></div>
                <br>
                
                <div id="daftar27"></div>
                <div id="daftar28"></div>
                <br>
                
                <div id="daftar29"></div>
                <div id="daftar30"></div>
                <br>
                
                <div id="daftar31"></div>
                <div id="daftar32"></div>
                <br>
                
                <div id="daftar33"></div>
                <div id="daftar34"></div>
                <br>
                
                <div id="daftar35"></div>
                <div id="daftar36"></div>
                <br>
                
                <div id="daftar37"></div>
                <div id="daftar38"></div>
                <br>
                
                <div id="daftar39"></div>
                <div id="daftar40"></div>
                <br>
                
                <div id="daftar41"></div>
                <div id="daftar42"></div>
                <br>
                
                <div id="daftar43"></div>
                <div id="daftar44"></div>
                <br>
                
                <div id="daftar45"></div>
                <div id="daftar46"></div>
                <br>
                
                <div id="daftar47"></div>
                <div id="daftar48"></div>
                <br>
                
                <div id="daftar49"></div>
                <div id="daftar50"></div>
                <br>
                
                <div id="daftar51"></div>
                <div id="daftar52"></div>
                <br>
                
                <div id="daftar53"></div>
                <div id="daftar54"></div>
                <br>

                <div id="daftar55"></div>
                <div id="daftar56"></div>
                <br>
                
                
                <div id="daftar57"></div>
                <div id="daftar58"></div>
                <br>
                
                <div id="daftar59"></div>
                <div id="daftar60"></div>
                <br>
            </b>
        </div>
        </center>
        <footer class="footer">
            <div>
                <h3>ganti background</h3>
                <button id="buttonbg" onclick="gantibackground()">background 2</button>
            </div>
            UAS Pemrograman Berbasis web    Fahmi Afianto A11.2017.10587
        </footer>
    </section>
  </body>
</html>