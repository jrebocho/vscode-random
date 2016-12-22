import { window } from 'vscode'

export const editorInsert = (text) => {
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
