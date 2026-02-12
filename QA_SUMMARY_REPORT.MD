# QA Summary Report

**Game Tested**: Not WECIB Minecraft Simulator!

**Dev Team**: slepo

**QA team**: Bianca, Marcus C, Maddy, Ayah, Evan

**Testing Period**: Week 6 (Tue-Fri)

**Report Date**: Friday, 13th

## Executive Summary


We conducted comprehensive QA testing on _Not WECIB Minecraft Simulator_ over 4 days. Our team tested:
- Students and teachers spawning and moving
- Switching between active and inactive
- Pausing
- getting and losing points
- Dying (game over)

**Key Finding**: The game works but has a few bugs that impact critical, high and low issues

## Testing Overview
### What We Tested

- Students and teachers spawning and moving (100% coverage)
- Switching between active and inactive (100% coverage)
- Pausing (100% coverage)
- Getting and losing points (100% coverage)
- (100% coverage)

Test Types:
- Exploratory testing
- Functionality testing

## Bug summary

### By Severity

- **Critical**: 1
- **High**: 1
- **Medium**: 0
- **Low**: 1

**Total Bugs Filed: 3**

### Github Issues
Total: 3
Closed: 2
Open: 1

## By Category

- **Input Validation**: 0
- **Logic Errors**: 0
- **State Management**: 2
- **UI/UX Issues**: 1
- **Other**: 0

## Critical Issues (Must Fix Before Handoff)

Reset mechanic does nothing

Severity: Critical

Steps to Reproduce:
1. Play the game as usual
2. Get caught by one of the bosses (teachers)
3. Press play again to reset the game

Link: [GitHub issue](https://github.com/number1bidoof/Slepo/issues/1)
 
## High-Priority Issues (Fix ASAP)

Severity: Critical

Steps to Reproduce:
1. Start the game, and play as usual
2. Pause the game by pressing p
3. Watch the game play out and get caught while the game

Link: [GitHub issue](https://github.com/number1bidoof/Slepo/issues/2)

## Low-Priority Issues (Fix when able)

Severity: Low (Cosemetic Issue that doesnt effect main gameplay)

Steps to Reproduce:
1. Enter and play the game as usual
2. Exit out of minecraft playing mode, into work mode
3. Pause the game
4. Unpause the game and hear the minecraft playing sound effect

Link: [GitHub issue](https://github.com/number1bidoof/Slepo/issues/3)

## Testing Insights

### What Worked Well

- Student spawning works
- Graphics are amazing
- Clear documentation
- Easy to play (just click a link)

### Areas for Improvement

- Teachers should spawn sooner (game is too easy on the start)
- Adding more mechanics
- Edge and Aura are too similar to be separate scores

### Patterns Noticed

All the code is in one file (main.js) with variables on top, function definitions, then calls to those functions to start the game

## Recommendations for Dev Team

### Critical Fixes (Priority 1)
Fix high priority issues which effects pausing

### Important Fixes (Priority 2)
Fix low priority issues which effects audio 

### Polish/Optional Fixes (Priority 3)
- Add more students and teachers
- Teachers should spawn sooner
- Add different movement speed

## Test Environment

**Platform**: HTML and JavaScript on Chrome

**Game Version (commit hash)**: 989c4069c0faa1c64764825c04b110951b91f200

**Testing Tools**: Manual testing + GitHub Issues

## Conclusion
The game ran good but some features that would allow for smoother gameplay are broken. The graphics are simple and easy to understand, but due to the issues they look wierd. These issues are being reviwed and documented so the Dev Team can find them and fix them. 

## QA Team Sign-Off
Team Lead: Ayah
Submitted: 2/12/26 8:27 AM
Team Members:
- Ayah
- Bianca
- Evan
- Maddy
- Marcus


**End of Report**
