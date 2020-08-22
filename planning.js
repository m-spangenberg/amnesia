/*
MODTOKENS
---
!SECRETTOKEN
---
checks for secret token
gives user moderator powers
enables moderator overlay for session duration
*/

/*
MODVIEW
---
overlay that shows user-id and ban heatmaps
*/

/*
CHATCOMMAND
---
checks for '!CHAT|' to parse command on each message submission
*/

/*
CHATCODES
---
!CHAT|COMMAND|ARGUMENTS
!CHAT|TEXT|COLOUR
!CHAT||REGION|PLACENAME
!CHAT|ID|ON
---
session duration only
region hint from region list
colour textr from colour list
enable random id from id list
*/

/*
BANHAMMER
---
manually target session id for ban
*/

/*
BANTOME
---
ban list in csv file or db that has ip with cooldown condition
> probably not a good idea to have permanent bans - bloated ban lists
*/

/*
BANTIMER
---
contains ruleset of predetermined ban sentences to apply to cooldown timer
checks lapsed bans and clear banlist every 5 minutes
*/

/*
BANSIPHON
---
checks if session-id ip is banned on connection
determines ban conditons and executes redirects
*/

/*
SMITE
---
assigns point based weighting to individual user id's based on offensive behaviour
returns a score for each user-id in the session
> spam (message rate limiter being hit)
> vulgarity ('banned' words being used regularly)
> must be lightweight and only active for the duration of a sessions
*/

/*
CRAWL
---
!SECRETTOKEN|CRAWL|ON
!SECRETTOKEN|CRAWL|OFF
---
global rate limit to slow down room when congested
will need input placeholder update of 'slow mode'
*/