#THIS IS PYTHON PROJECT
#DONE BY MYTH LIVE

from tkinter import*
from tkinter.ttk import*
from time import strftime

# height = 30,
# width = 100,

root = Tk()
root.title("Clock")
 
def time():
    string = strftime('%I:%M:%S %p')
    label.config(text=string)
    label.after(1000,time)

label = Label(root, font=("ds-digital",100),background = "black", foreground = "yellow")
label.pack(anchor='center')
time()
mainloop()

