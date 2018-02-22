# Helpful-Steve

A discord bot that enables commands specified in yaml.

## Specifying commands

Commands should be specified in `commands.yml` in the same directory as `index.js`.

Here is an example: 

```yaml
%YAML 1.2
---
Commands:
  help: Here is a help message.
  command1: This is command one.
```

Typing `!help` in discord would trigger Helpful-Steve to respond with `Here is a help message.`