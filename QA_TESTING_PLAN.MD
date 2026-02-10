# QA Testing Plan
Game Being Tested: WECIB Minecraft Simulator

Dev Team: Slepo (Angel, Afton, Christopher, Marcus)

QA Team: Ayah, Evan, Bianca, Maddy & Marcus C.

Date: 02/18/2026

### Game Overview (From README)
Game Type: Idle game/ Simulation game

Core Mechanics:
- Dodge teachers from seeing you play minecraft

- Aura farm from playing minecraft in front of students & evading teachers

- Gain edge points by playing minecraft by playing for more time

- Pause game to avoid getting caught

Win Condition: Get the highest score possible (no win conditon)

Lose Condition: You get caught by a teacher for playing Minecraft

Player Inputs: 

- P: Pause/Unpause Mechanic
- Space: Toggle/untoggle Minecraft

### Testing Strategy by Day

## Tuesday: Happy Path & Core Mechanics
Goal: Does the game work as the dev team said it would? 

It works well, but with limited functionality & noticable bugs in the code. The game is still playable, but UI issues are apparent. 

Test Scenarios:

- [X] Start the game cleanly (no crashes at launch)

- [X] Follow the happy path (win the game normally)

- [X] Follow the lose path (lose the game)

- [X] Core mechanic 1 works as described

- [X] Core mechanic 2 works as described

- [X] Core mechanic 3 works as described

- [X] All UI/output is readable and clear

## Known issues found today:

- There is no play again mechanic or reset button, you would have to reset browser. End screen does not work

- Pause does not work correctly, while you do get a pause screen, it doesnt pause actual gameplay. You can still get caught, aura farm & edge while pause

- When you pause and die you can't do anything. The gameplay doesnt stop as intendid & end screen displays forever until you reset your browser. Acts as an overlay.

- Duplicates of Students on desktops & walking around. 

- Marcuss & Ayah are not added. Only 16 students available and a limited amount of characters. As well as multiple different students of the same character being able to be generated walking around and in the desk. 

- High score should be called Highest Aura, instead of Aura
 
- Minecraft audio still playing after you pause and unpuase, even if before you werent playing minecraft
