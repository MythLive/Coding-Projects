#THIS IS PYTHON PROJECT
#DONE BY MYTH LIVE


import random

again = True

while again:
    print(random.randint(1, 6))
    another_roll = input("Want To Roll The Dice Again? (y/n): ")
    if another_roll.lower() == "y":
        continue
    else:
        break
