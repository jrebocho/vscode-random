import { commands } from 'vscode'
import Chance from 'chance'
import { randomInteger } from './random'

export const activate = (context) => {
  const chance = new Chance()

  context.subscriptions.push(
    commands.registerCommand('extension.randomInteger', () => randomInteger(chance))
  )
}
