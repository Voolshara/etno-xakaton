import os
import random
directory = r'C:\Users\paden\Desktop\Programming\xataton\etno-xakaton\frontend\public\img\members\gym'

files = os.listdir(directory)
answer = []
names = []
for name in files:
    name = name.replace('.jpg', '')
    i = 0
    for letter in name:
        if letter == letter.upper() and i != 0:
            names.append(name[:name.index(letter)] +' ' + (name[name.index(letter):]))
            print(name)
            break
        i += 1
for index, file in enumerate(files):
    if index != 18:
        answer.append([f"/img/members/gym/{file}", f"{names[index]}", f'defilee__div defilee__div--special{random.randint(1, 4)}'])
print(answer)