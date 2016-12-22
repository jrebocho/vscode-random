import { editorInsert } from './vscodeHelpers'

export const randomInteger = (chanceInstance, outputStream = editorInsert) => {
  const randomNumber = chanceInstance.integer().toString()

  outputStream(randomNumber)
}
