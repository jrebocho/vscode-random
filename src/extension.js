import { extensionCommands, extensionCommandsWithInput, extensionExecCommands } from './commands'
import {
  registerCommandsOutput,
  registerCommandsInputOutput,
  registerCommandsInput,
} from './vscodeUtils'

export const activate = (context) => {
  extensionCommands.map((cmd) => registerCommandsOutput(context, cmd))
  extensionCommandsWithInput.map((cmd) => registerCommandsInputOutput(context, cmd))
  extensionExecCommands.map((cmd) => registerCommandsInput(context, cmd))
}
