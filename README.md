# AMNESIA CHAT

A forgetful chat room with no usernames and no long term memory.

![Emulated mobile screenshot showing session activity](public/img/about/amnesia-0.0.1-screenshot.png)

## Description

AMNESIA is a small anonymous chatroom project put together during the [2020 Covid-19 Lockdown](https://en.wikipedia.org/wiki/COVID-19_pandemic_in_Namibia) as a WebSocket learning exercise.

## Getting Started

### Dependencies

* [Tailwind CSS](https://tailwindcss.com/)
* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [Socket.io](https://socket.io/)

## Version History

* 0.0.1
    * Initial Deployment, Hello World!

## Roadmap

Some short term goals to help make AMNESIA more usable.

#### Front End

- [X] Darkmode
- [X] Rework Interface: Minimal, Clean, Responsive
- [ ] Multi-Room Landing: `EVENTS | AREAS | INTERESTS`
- [ ] Text Fade: Chat messages slowly disappear
- [ ] BUG: Fix Scrolling!
- [ ] Moderator Overlay: Heatmaps and Session IDs

#### General Chat Commands

- [X] Colour Codes: change user id to predetermined colour
- [ ] Region Codes: enable in-line region code
- [X] ID Codes: enable random user id for session

#### Abuse Mitigation

- [ ] Auto Ban by IP
- [ ] Ban Cooldown Timers

#### Service

- [X] Room User Limit
- [ ] Room Full Redirect
- [ ] Ban Redirect

#### Moderation Tools

- [ ] Moderator Tokens: elevates user to moderator -- `!SECRETTOKEN|COMMANDS`
- [ ] Global Rate-Limiting: slows down global chat -- `!SECRETTOKEN|SLOW|RATE`
- [ ] Manual Ban: targets an offending user directly -- `!SECRETTOKEN|BAN|SESSIONID|TIME|REASON`

## License

This project is licensed under the MIT License - see the LICENSE.md file for details