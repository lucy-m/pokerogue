import { SimpleTranslationEntries } from "#app/plugins/i18n";

/**
 * The menu namespace holds most miscellaneous text that isn't directly part of the game's
 * contents or directly related to Pokemon data. This includes menu navigation, settings,
 * account interactions, descriptive text, etc.
 */
export const menu: SimpleTranslationEntries = {
    "cancel": "Cancel",
    "continue": "Continue",
    "dailyRun": "Daily Run (Beta)",
    "loadGame": "Load Game",
    "newGame": "New Game",
    "selectGameMode": "Select a game mode.",
    "logInOrCreateAccount": "Log in or create an account to start. No email required!",
    "username": "Username",
    "password": "Password",
    "login": "Login",
    "register": "Register",
    "emptyUsername": "Username must not be empty",
    "invalidLoginUsername": "The provided username is invalid",
    "invalidRegisterUsername": "Username must only contain letters, numbers, or underscores",
    "invalidLoginPassword": "The provided password is invalid",
    "invalidRegisterPassword": "Password must be 6 characters or longer",
    "usernameAlreadyUsed": "The provided username is already in use",
    "accountNonExistent": "The provided user does not exist",
    "unmatchingPassword": "The provided password does not match",
    "passwordNotMatchingConfirmPassword": "Password must match confirm password",
    "confirmPassword": "Confirm Password",
    "registrationAgeWarning": "By registering, you confirm you are of 13 years of age or older.",
    "backToLogin": "Back to Login",
    "failedToLoadSaveData": "Failed to load save data. Please reload the page.\nIf this continues, please contact the administrator.",
    "sessionSuccess": "Session loaded successfully.",
    "failedToLoadSession": "Your session data could not be loaded.\nIt may be corrupted.",
    "boyOrGirl": "Are you a boy or a girl?",
    "boy": "Boy",
    "girl": "Girl",
    "bossAppeared": "{{bossName}} appeared.",
    "trainerAppeared": "{{trainerName}}\nwould like to battle!",
    "singleWildAppeared": "A wild {{pokemonName}} appeared!",
    "multiWildAppeared": "A wild {{pokemonName1}}\nand {{pokemonName2}} appeared!",
    "playerComeBack": "Come back, {{pokemonName}}!",
    "trainerComeBack": "{{trainerName}} withdrew {{pokemonName}}!",
    "playerGo": "Go! {{pokemonName}}!",
    "trainerGo": "{{trainerName}} sent out {{pokemonName}}!",
    "switchQuestion": "Will you switch\n{{pokemonName}}?",
    "trainerDefeated": `You defeated\n{{trainerName}}!`,
    "pokemonCaught": "{{pokemonName}} was caught!",
    "pokemon": "Pokémon",
    "sendOutPokemon": "Go! {{pokemonName}}!",
    "attackFailed": "But it failed!",
    "attackHitsCount": `Hit {{count}} time(s)!`,
    "expGain": "{{pokemonName}} gained\n{{exp}} EXP. Points!",
    "levelUp": "{{pokemonName}} grew to\nLv. {{level}}!",
    "learnMove": "{{pokemonName}} learned\n{{moveName}}!",
    "learnMovePrompt": "{{pokemonName}} wants to learn the\nmove {{moveName}}.",
    "learnMoveLimitReached": "However, {{pokemonName}} already\nknows four moves.",
    "learnMoveReplaceQuestion": "Should a move be forgotten and\nreplaced with {{moveName}}?",
    "learnMoveStopTeaching": "Stop trying to teach\n{{moveName}}?",
    "learnMoveNotLearned": "{{pokemonName}} did not learn the\nmove {{moveName}}.",
    "learnMoveForgetQuestion": "Which move should be forgotten?",
    "learnMoveForgetSuccess": "{{pokemonName}} forgot how to\nuse {{moveName}}.",
    "levelCapUp": "The level cap\nhas increased to {{levelCap}}!",
    "moveNotImplemented": "{{moveName}} is not yet implemented and cannot be selected.",
    "moveDisabled": "{{moveName}} is disabled!",
    "noPokeballForce": "An unseen force\nprevents using Poké Balls.",
    "noPokeballTrainer": "You can't catch\nanother trainer's Pokémon!",
    "noPokeballMulti": "You can only throw a Poké Ball\nwhen there is one Pokémon remaining!",
    "noPokeballStrong": "The target Pokémon is too strong to be caught!\nYou need to weaken it first!",
    "noEscapeForce": "An unseen force\nprevents escape.",
    "noEscapeTrainer": "You can't run\nfrom a trainer battle!",
    "noEscapePokemon": "{{pokemonName}}'s {{moveName}}\nprevents {{escapeVerb}}!",
    "runAwaySuccess": "You got away safely!",
    "runAwayCannotEscape": 'You can\'t escape!',
    "escapeVerbSwitch": "switching",
    "escapeVerbFlee": "fleeing",
    "notDisabled": "{{moveName}} is disabled\nno more!",
    "skipItemQuestion": "Are you sure you want to skip taking an item?",
    "eggHatching": "Oh?",
    "ivScannerUseQuestion": "Use IV Scanner on {{pokemonName}}?",
    "rankings": "Rankings",
    "dailyRankings": "Daily Rankings",
    "noRankings": "No Rankings",
    "loading": "Loading…",
    "playersOnline": "Players Online"
} as const;