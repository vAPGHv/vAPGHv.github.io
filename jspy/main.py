def p(string, id="", clas=""):  # ------------------------------------------------------- p
    print(f'<p id="{id}" class="{clas}">{string}</p>')


def a(string, id="", clas="", href=""):  # ---------------------------------------------- a
    print(f'<a id="{id}" class="{clas}" href="{href}">{string}</a>')


def h1(string, id="", clas=""):  # ----------------------------------------------------- H1
    print(f'<h1 id="{id}" class="{clas}">{string}</h1>')
def h2(string, id="", clas=""):  # ----------------------------------------------------- H2
    print(f'<h2 id="{id}" class="{clas}">{string}</h2>')
def h3(string, id="", clas=""):  # ----------------------------------------------------- H3
    print(f'<h3 id="{id}" class="{clas}">{string}</h3>')
def h4(string, id="", clas=""):  # ----------------------------------------------------- H4
    print(f'<h4 id="{id}" class="{clas}">{string}</h4>')
def h5(string, id="", clas=""):  # ----------------------------------------------------- H5
    print(f'<h5 id="{id}" class="{clas}">{string}</h5>')
def h6(string, id="", clas=""):  # ----------------------------------------------------- H6
    print(f'<h6 id="{id}" class="{clas}">{string}</h6>')

from PIL import Image

img = Image.open("imgs/img.jpg")
pix = img.getpixel((1, 1))
p(pix)
