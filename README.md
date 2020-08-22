# AMNESIA CHAT

A forgetful chat room with no long term memory.

![Emulated mobile screenshot showing session activity](public/img/about/amnesia-0.0.1-screenshot.png)

## Description

AMNESIA is a small anonymous chatroom project put together during the [2020 Covid-19 Lockdown](https://en.wikipedia.org/wiki/COVID-19_pandemic_in_Namibia) as a WebSocket learning exercise.

## Getting Started

The front was put together with only the most basic of Tailwind CSS. I did consider using Bulma or Tachyons and might try them out depending on which direction this project goes in. This is also my first project using any JavaScript, Node.js, Express.js and Socket.io.

### Dependencies

* [Tailwind CSS](https://tailwindcss.com/)
* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [Socket.io](https://socket.io/)

## Version History

* 0.0.1
    * Initial Deployment, Hello World!

## Roadmap

Some short term goals to help make AMNESIA more usable.

#### Front End

- [ ] Multi-Room Landing Page
- [ ] Text Fade: Chat messages slowly disappear
- [ ] BUG: Fix Scrolling!

#### Abuse Mitigation

- [ ] Tokens
- [ ] Limit Sockets by IP
- [ ] Auto Ban by IP
- [ ] Ban Cooldown Timers

#### Service

- [ ] Room Full Redirect
- [ ] Ban Redirect

#### Moderation Tools

- [ ] Moderator Tokens: elevates user to moderator -- `!SECRETTOKEN|COMMANDS`
- [ ] Global Rate-Limiting: slows down global chat -- `!SECRETTOKEN|SLOW|RATE`
- [ ] Manual Ban: targets an offending user directly -- `!SECRETTOKEN|BAN|SESSIONID|TIME|REASON`
- [ ] Moderator Overlay: Heatmaps and Session IDs

## License

This project is licensed under the MIT License - see the LICENSE.md file for details