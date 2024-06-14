moves = {0: " ", 1: " ", 2: " ", 3: " ", 4: " ", 5: " ", 6: " ", 7: " ", 8: " "}


def print_board(moves):

    board = f"""
    | {moves[0]} | {moves[1]} | {moves[2]} |
    |---|---|---|
    | {moves[3]} | {moves[4]} | {moves[5]} |
    |---|---|---|
    | {moves[6]} | {moves[7]} | {moves[8]} |
    """

    print(board)


print_board(moves)

player = "X"
move = 0

moves[move] = player

print_board(moves)

print(moves)

move = 0
if moves[move] != " ":
    print("NOT ALLOWED")
else:
    moves[move] = player