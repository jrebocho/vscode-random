import { commands, window, Position, Selection } from 'vscode'
import { MSG_NO_ACTIVE_TEXT_EDITOR } from './constants'

export const registerCommandsOutput = (context, cmd) => {
  context.subscriptions.push(
    commands.registerCommand(cmd.key, () => editorInsert(cmd.callback))
  )
}

export const registerCommandsInputOutput = (context, cmd) => {
  context.subscriptions.push(
    commands.registerCommand(cmd.key, () =>
      window.showInputBox({
        prompt: cmd.prompt,
        placeHolder: !cmd.placeHolder ? '' : cmd.placeHolder
      })
      .then(inputValue => {
        if (!cmd.validation || cmd.validation(inputValue)) {
          editorInsert(cmd.callback, {inputValue})
        } else {
          window.showErrorMessage(cmd.errorMsg)
        }
      })
    )
  )
}

export const registerCommandsInput = (context, cmd) => {
  context.subscriptions.push(
    commands.registerCommand(cmd.key, () =>
      window.showInputBox({
        prompt: cmd.prompt,
        placeHolder: !cmd.placeHolder ? '' : cmd.placeHolder
      })
      .then(inputValue => {
        if (!cmd.validation || cmd.validation(inputValue)) {
          cmd.callback(inputValue)

          if (cmd.infoMsg) {
            window.showInformationMessage(cmd.infoMsg)
          }
        } else {
          window.showErrorMessage(cmd.errorMsg)
        }
      })
    )
  )
}

const editorInsert = (generator, params = {}) => {
  const editor = window.activeTextEditor

  if (!editor) {
    window.showErrorMessage(MSG_NO_ACTIVE_TEXT_EDITOR)
    return
  }

  const newSelections = []
  editor.edit((builder) => {
    editor.selections.map(selection => {
      const text = generator(params)

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
