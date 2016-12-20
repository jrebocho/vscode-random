var vscode = require('vscode')
var Chance = require('chance')

const activate = (context) => {
  console.log('Congratulations, your extension "vscode-random" is now active!')
  var chance = new Chance()

  var disposable = vscode.commands.registerCommand('extension.sayHello', function () {
    const randomNumber = chance.integer()
    const insertText = `Hello World ${randomNumber}!`

    const editor = vscode.window.activeTextEditor

    if (!editor) {
      vscode.window.showErrorMessage('No editor found!')
      return
    }

    const cursorPosition = editor.selection.active

    var startPosition = cursorPosition

    editor.edit((builder) => {
      builder.insert(startPosition, insertText)
    })
  })

  context.subscriptions.push(disposable)
}

exports.activate = activate

function deactivate () {
}

exports.deactivate = deactivate
