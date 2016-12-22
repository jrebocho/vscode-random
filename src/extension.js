import { commands } from 'vscode'
import Chance from 'chance'
import { randomInteger } from './random'

export const activate = (context) => {
  const chance = new Chance()

  const extensionCommands = [
    { key: 'extension.randomInteger', callback: randomInteger }
  ]

  extensionCommands.map(cmd => {
    context.subscriptions.push(
      commands.registerCommand(cmd.key, () => cmd.callback(chance))
    )
  })
}
