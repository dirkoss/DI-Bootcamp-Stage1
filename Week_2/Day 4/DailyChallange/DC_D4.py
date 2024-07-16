# Given a “Matrix” string:

#     7ii
#     Tsx
#     h%?
#     i #
#     sM 
#     $a 
#     #t%
#     ^r!


matrix = [['7','i','i'],
          ['T','s','x'],
          ['h','%','?'],
          ['i',' ','#'],
          ['s','M',' '],
          ['$','a',' '],
          ['#','t','%'],
          ['^','r','!']
]

length = len(matrix)
width = len(matrix[0])

alpha_ch = 'abcdefghijklmnopqrstuvwxyz'

sentence = ''

found_alpha = False #To make sure we put just 1 space between 2 alpha numbers, we check if we already found an alpha
for i in range (width):
    for j in range (length):
        ch = matrix[j][i]
        if(ch.lower() in alpha_ch):
            sentence += ch
            found_alpha = True
        elif(found_alpha == True):
            sentence += ' '
            found_alpha = False
        else:
            continue
            
print(sentence)