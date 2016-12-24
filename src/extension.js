import { commands, window } from 'vscode'
import { extensionCommands } from './commands'

export const activate = (context) => {
  extensionCommands.map(cmd => {
    context.subscriptions.push(
      commands.registerCommand(cmd.key, () => editorInsert(cmd.callback()))
    )
  })
}

const editorInsert = (text) => {
  const editor = window.activeTextEditor

  if (!editor) {
    window.showErrorMessage('No editor found!')
    return
  }

  const cursorPosition = editor.selection.active

  editor.edit((builder) => {
    builder.insert(cursorPosition, text)
  })
}
