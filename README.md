# Random Data Generator for VS Code
This extension generates random data directly into VS Code.
It uses the great [ChangeJS](http://chancejs.com/) library written by [Victor Quinn](https://www.victorquinn.com/) and was inspired by the [Random](https://atom.io/packages/random) extension for Atom.

# Install

This extension can be installed with one the following methods: 

1. Launch the Command Pallete **(Cmd+Shift+P / Ctrl+Shift+P)** and type `Extensions: Install Extensions`. Type `vscode-random` in the Side Bar search input. Click the install button and reload VS Code.
2. Click the Extensions icon in the View Bar. Type `vscode-random` in the Side Bar search input. Click the install button and reload VS Code.
3. Launch VS Code Quick Open **(Cmd+P / Ctrl+P)**. Paste the command `ext install vscode-random` and press **Enter**.

# Usage

Launch the Command Pallete **(Cmd+Shift+P / Ctrl+Shift+P)** and type `random` to view all the available data generators. Select one of them and press **Enter**.

![Screen](https://raw.githubusercontent.com/jrebocho/vscode-random/master/images/vscode-random-screen.gif)

Random values generation is also supported when using **multiple editors**.

# Configuration

* `vscodeRandom.contextMenu.enabled` : Enable/disable the context menu for the available data generators (disabled by default).

# Available Commands

* `extension.resetSeed` : Reset seed - Initialize random generation library with a new seed. If no new seed is provided, the library will be reinitialized with the default options.
* `extension.randomByte` : Random byte - Generates an integer between 0 and 255 
* `extension.randomShort` : Random short - Generates an integer between 0 and 65535
* `extension.randomInt` : Random integer - Generates an integer between 0 and 4294967295
* `extension.randomLong` : Random long - Generates an integer between 0 and 9007199254740992
* `extension.randomIntCustomRange` : Random integer (custom range) - Generates a random integer within a given custom range
* `extension.randomGuid` : Random guid - Generates a guid
* `extension.randomStringCustomLength` : Random string (custom length) - Generates a string with a length defined by user input
* `extension.randomName` : Random name - Generates a random name (first and last name)
* `extension.randomStreetAddress` : Random street address - Generates a random street address
* `extension.randomCity` : Random city - Generates a random city name
* `extension.randomCountryCode` : Random country code - Returns a random country code
* `extension.randomCountryName` : Random country name - Returns a random country name
* `extension.randomPhoneNumber` : Random phone number - Generates a random phone number
* `extension.randomEmail` : Random email - Generates a random email with a random domain
* `extension.randomIP` : Random IP - Generates a random IP address
* `extension.randomIPv6` : Random IPv6 - Generates a random IPv6 address
* `extension.randomUrl` : Random Url - Generates a random Url
* `extension.randomHexColor` : Random hexadecimal color - Generates a random hexadecimal color
* `extension.randomRgbColor` : Random RGB color - Generates a random RGB color

# Change Log

You can check all the changes in the change log [here](CHANGELOG.md).

# Contact

Problems with the extension? Suggestions for improvements? Please create an [issue](https://github.com/jrebocho/vscode-random/issues) or submit a PR on the Github repository. You can also ping me on [twitter](https://www.twitter.com/jrebocho).

# Source

[Github](https://github.com/jrebocho/vscode-random)

# License

[MIT](LICENSE) &copy; Jorge Rebocho
