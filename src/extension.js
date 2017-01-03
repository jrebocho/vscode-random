import { commands, window, Position, Selection } from 'vscode'
import { extensionCommands, extensionCommandsWithInput } from './commands'
import { MSG_NO_ACTIVE_TEXT_EDITOR } from './constants'

export const activate = (context) => {
  extensionCommands.map(cmd => {
    context.subscriptions.push(
      commands.registerCommand(cmd.key, () => editorInsert(cmd.callback()))
    )
  })

  extensionCommandsWithInput.map(cmd => {
    context.subscriptions.push(
      commands.registerCommand(cmd.key, () =>
        window.showInputBox({prompt: cmd.prompt})
        .then(inputValue => {
          if (cmd.validation(inputValue)) {
            editorInsert(cmd.callback({inputValue}))
          } else {
            window.showErrorMessage(cmd.errorMsg)
          }
        })
      )
    )
  })
}

const editorInsert = (text) => {
  const editor = window.activeTextEditor

  if (!editor) {
    window.showErrorMessage(MSG_NO_ACTIVE_TEXT_EDITOR)
    return
  }

  const newSelections = []
  editor.edit((builder) => {
    editor.selections.map(selection => {
      builder.replace(selection, text)
      newSelections.push(getEndPosition(selection, text))
    })
  }).then(() => {
    editor.selections = newSelections
  })
}

const getEndPosition = (selection, text) => {
  var endPosition = new Position(selection.start.line, selection.start.character + text.length)
  return new Selection(endPosition, endPosition)
}
